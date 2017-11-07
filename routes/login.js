const express=require('express');
const router=express.Router();

router.get('/',(request,respond,next)=>{
	respond.render('login',{errors:request.session.errors});
	request.session.errors=null;
});
router.post('/login',(request,respond,next)=>{
	
	request.check('username','Invalid Login').equals("");
	request.check('password','Invalid Login').equals("");
	console.log("Login");

	const errors=request.validationErrors();
	if(errors){
		request.session.errors=true;
	}else{
		request.session.errors=false;
	}	
		//respond.redirect('/');

		
});

module.exports =router;