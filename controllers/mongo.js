var mongoose = require('mongoose');
this.db = mongoose.createConnection('localhost','happychat');
this.schema = new mongoose.Schema({
	username:String,
	password:String,
	email:String,
	phone:String 
});
this.login = function(data,res){
	var Model = this.db.model('accounts',this.schema);
	var personEntity = new Model(data);

	//personEntity.save();
	Model.find({username:data.username},function(err,user){
		if(err)
			console.log(err);
		if(user.length>0)
		{
			if(data.password == user[0].password)
				res.send('/happychat');
			else
				res.send(false);
		}
		else
			res.send(null);
	})
}
this.registerPhone = function(data,res){
	delete data.passwordConfirmation;
	var Model = this.db.model('accounts',this.schema);
	var personEntity = new Model(data);
	Model.find({'phone':data.phone},function(err,user){
		if(err)
			console.log(err);
		if(user.length>0)
		{
			//console.log(user)
			res.send(false);
		}
		else
		{
			//personEntity.save();
			
			personEntity.save();
			res.send(true);
			//this.registerEmail(data,res);
		}
	});
}
this.registerEmail = function(data,res){
	delete data.passwordConfirmation;
	var Model = this.db.model('accounts',this.schema);
	var personEntity = new Model(data);
	//var this = that;
	Model.find({'Email':data.username},this,function(err,user){
		if(err)
			console.log(err);
		if(user.length>0)
		{
			//console.log(user)
			res.send(false);
		}
		else
		{
			this.registerPhone(data,res)
			//res.send(true);
		}
	});
}
this.registerUsername = function(data,res){
	delete data.passwordConfirmation;
	var Model = this.db.model('accounts',this.schema);
	var personEntity = new Model(data);
	//var this = that;
	Model.find({'username':data.username},function(err,user){
		if(err)
			console.log(err);
		if(user.length>0)
		{
			console.log(user)
			res.send(false);
		}
		else
		{
			Model.find({'email':data.email},function(err,user){
				if(err)
					console.log(err);
				if(user.length>0)
				{
					//console.log(user)
					res.send(false);
				}
				else
				{
					Model.find({'phone':data.phone},function(err,user){
						if(err)
							console.log(err);
						if(user.length>0)
						{
							//console.log(user)
							res.send(false);
						}
						else
						{
							personEntity.save();
							res.send(true);
						}
					});
				}
			});
		}
	});
}
this.validate = function (datas,res){
	var Model = this.db.model('accounts',this.schema);
	var ex ={};
	ex[datas.action] = datas.data;
	var personEntity = new Model(ex);
	Model.find(ex,function(err,user){
		if(err)
			console.log(err);
		else if(user.length>0)
			res.send(false);
		else
			res.send(true);
	})
}

//this.login = login;
module.exports =  this;
