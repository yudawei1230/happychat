var mongo = require('../controllers/mongo.js');
var router = require('express').Router();
var commond = require('../routes/commond.js');
/* GET home page. */


//commond.post();
//
router.get('/',commond.getRoot);
//
router.get('/canvas', commond.getCanvas);
//
router.get('/happychat',commond.getHappychat);
router.get('/geth',commond.geth);
//
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


module.exports = router;
