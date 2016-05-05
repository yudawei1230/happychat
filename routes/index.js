var express = require('express');
var mongo = require('../controllers/mongo.js');
var router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {
  var time = new Date().toTimeString();
  res.render('login', { title: 'happychat' });
});
router.get('/canvas', function(req, res, next) {
  var time = new Date().toTimeString();
  res.render('hcanvas',function(err,html){
    if(err)
      console.log(err);
    res.send(html);
  });
});
router.post('/bin/www', function(req, res, next) {
	if(req.query.action == 'login')
  		mongo.login(JSON.parse(req.query.data),res);
	else if(req.query.action == 'register')
  		mongo.registerUsername(JSON.parse(req.query.data),res);
  	else if(req.query.action =='username')
  		mongo.validate(req.query,res);
  	else if(req.query.action =='email')
  		mongo.validate(req.query,res);
  	else if(req.query.action =='phone')
  		mongo.validate(req.query,res);
	else
		res.send(400);
});
router.get('/happychat',function(req,res,next){
      res.render('main', { stylesheet: 'happychat' });
});
/* GET users listing. */
router.get('/users', function(req, res, next) {
  res.send('respond with a resource');
});


module.exports = router;
