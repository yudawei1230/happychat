var http = require('http');
var express = require('express');
var router = express.Router();
var querystring = require('querystring');
var commond ={};
var postData = querystring.stringify({
  'hello':'yu'
});
var WetchatHead = {
  hostname:'121.42.148.138',
  path:'/wechat',
  port:80,
  method:'POST',
  headers:{
    'Content-type':"application/x-www-form-urlencoded",
    'Content-Length':postData.length
  }

};
commond.getRoot = function(req, res, next) {
  var time = new Date().toTimeString();
  res.render('login', { title: 'happychat' });
}
commond.getCanvas = function(req,res,next){
  var time = new Date().toTimeString();
  res.render('hcanvas',function(err,html){
    if(err)
      console.log(err);
    res.send(html);
  });
}
commond.geth = function(req,res,next){
  var time = new Date().toTimeString();
  res.render('orderCheck',function(err,html){
    if(err)
      console.log(err);
    res.send(html);
  });
}
commond.getHappychat = function(req,res,next){
      res.render('main', { stylesheet: 'happychat' });
}
commond.postFn = function(res){
  if(res.statusCode === 200)
  {
    res.setEncoding('utf8');
    res.on('data',(body)=>{
      console.log(`dataBody: ${body}`);
    }).on('end',()=>{
      console.log('no more data');
    })
  }
}
commond.post = function(head = WetchatHead ,data=postData,fn = commond.postFn){
  var req = http.request(head,fn);
  console.log(data);
  req.write(data);
  req.end();
}

module.exports = commond;
