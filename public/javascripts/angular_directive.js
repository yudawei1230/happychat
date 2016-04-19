module.exports = function(myapp){
	myapp.directive('login',function(){
		return{
			link:function(scope,element,attr){
				if(localStorage.getItem('username')&&localStorage.getItem('password'))
				{
					scope.user={
						username:localStorage.getItem('username'),
						password:localStorage.getItem('password')
					}
					scope.check = true;
				}
				else
					scope.user = {};
				scope.$watch('check',function(news,old){
					if(news != old && news==false)
					{
						scope.user={};
						localStorage.clear();
					}
				});
				element.bind('click',function(){
					if(!scope.user.username)
						alert('请输入邮箱或手机');
					else if(!scope.user.password)
						alert('请输入密码');
					else
					{
						if(scope.check)
						{
							localStorage.setItem("username", scope.user.username); 
							localStorage.setItem("password", scope.user.password); 
						}
						scope.login(scope.user);
					}
				})
			}
		}
	});

	myapp.directive('registerhtml',function(){
		return{
			restrict : 'AE',
			link : function(scope,element,attr){
				var html = element.parent().parent();
				var cp = html.next().children().clone();
				html.next().addClass('login_register');
				scope.registers = function(){
					scope.registerUser = {};
					html.next().addClass('changeinitial');
					html.next().removeClass('login_register');
					html.removeClass('changeinitial');
					html.addClass('login_register');
					scope.loginhtml = function(){
						scope.user = {};
						html.addClass('changeinitial');
						html.removeClass('login_register');
						html.next().removeClass('changeinitial');
						html.next().addClass('login_register');
						
					};
				};
			}
		}
	});
	myapp.directive('uservalidation',function(){
		return{
			link: function(scope,element,attr){
				scope.$watch('registerUser.username',function(news,old){
					if(news&&news.length>5)
					{	
						if(this.time)
							clearTimeout(this.time);
						this.time = setTimeout(function(){
							scope.validate('username',news).then(function(res){								
								if(res.data){
									
									element.next().removeClass('ok');
									element.addClass('ok');
								}
								else
								{
									element.next().addClass('ok');
									element.removeClass('ok');
								}
							})
						},1000);
					}
				});
			}
		}
	});
	myapp.directive('emailvalidate',function(){
		return{
			link:function(scope,element,attr){
				scope.$watch('registerUser.email',function(news,old){
					if(news&&news.length>5)
					{	
						if(this.time)
							clearTimeout(this.time);
						this.time = setTimeout(function(){
							scope.validate('email',news).then(function(res){								
								if(res.data){
									
									element.next().removeClass('ok');
									element.addClass('ok');
								}
								else
								{
									element.next().addClass('ok');
									element.removeClass('ok');
								}
							})
						},1000);
					}
				});
			}
		}
	});
	myapp.directive('phonevalidate',function(){
		return{
			link:function(scope,element,attr){
				scope.$watch('registerUser.phone',function(news,old){
					if(news&&news.length>5)
					{	
						if(this.time)
							clearTimeout(this.time);
						this.time = setTimeout(function(){
							scope.validate('phone',news).then(function(res){					
								if(res.data){
									
									element.next().removeClass('ok');
									element.addClass('ok');
								}
								else
								{
									element.next().addClass('ok');
									element.removeClass('ok');
								}
							})
						},1000);
					}
				});	
			}
		}
	});
	myapp.directive('passwordvalidate',function(){
		return{
			link:function(scope,element,attr){
				scope.$watch('registerUser.password',function(news,old){
					if(news&&news.length>5)
					{		
						element.next().removeClass('ok');
						element.addClass('ok');
					}
				});	
			}
		}
	});
	myapp.directive('passwordconfirmationvalidate',function(){
		return{
			link:function(scope,element,attr){
				scope.$watch('registerUser.passwordConfirmation',function(news,old){
					if(news&&news.length>5)
					{		
						if(scope.registerUser.passwordConfirmation == scope.registerUser.password)
						{
							element.next().removeClass('ok');
							element.addClass('ok');
						}
						else
						{
							element.next().addClass('ok');
							element.removeClass('ok');
						}
					}
				});	
			}
		}
	});
	myapp.directive('register',function(){
		return{
			link:function(scope,element,attr){
				element.bind('click',function(){
					if(!scope.registerUser.username)
						alert('请输入用户名')
					else if(!scope.registerUser.phone)
						alert('请输入手机')
					else if(!scope.registerUser.email)
						alert('请输入邮箱')
					else if(!scope.registerUser.password)
						alert('请输入密码')
					else if(!scope.registerUser.passwordConfirmation)
						alert('请再次输入密码')
					else if(scope.registerUser.password != scope.registerUser.passwordConfirmation)
						alert('密码输入不一致')
					else 
						{
							scope.register(scope.registerUser);
							window.location.reload();
						}
				});
			}
		}
	})
}
