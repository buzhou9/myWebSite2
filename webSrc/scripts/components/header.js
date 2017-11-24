import {animateControl,checkSession} from './commonTool.js';
animateControl();
checkSession();
let openLogin=document.getElementById('open-login');
let loginBg=document.querySelector('.login-bg');
openLogin.addEventListener('tap',function(){
	switchDisplayDide(loginBg,'show');
});
document.getElementById('login-bg-close').addEventListener('tap',function(){
	switchDisplayDide(loginBg,'hide');
});
document.getElementById('login-sub').addEventListener('tap',function(){
	//获取表单数据
	var form={
		userName:document.getElementById('userName-val').value,
		password:document.getElementById('password-val').value
	};
	var re=/\S/;
	if(!re.test(form.userName)){
		alert('用户名不能为空！');
		return false;
	}
	if(!re.test(form.password)){
		alert('用户名不能为空！');
		return false;
	}
	mui.ajax('/server/user/login',{
		data:form,
		dataType:'json',//服务器返回json格式数据
		type:'post',//HTTP请求类型
		success:function(data){
			if(data.result=='success'){
				window.location.reload();
			}else{
				alert(data.message);
			}
		},
		error:function(xhr,type,errorThrown){
			alert(errorThrown);
		}
	});
});
document.querySelector('#signOut').addEventListener('tap',function(){
	mui.ajax('/server/user/signOut',{
		data:{
			
		},
		dataType:'json',//服务器返回json格式数据
		type:'post',//HTTP请求类型
		success:function(data){
			if(data.result=='success'){
				window.location.reload();
			}else{
				mui.alert(data.message);
			}
		},
		error:function(xhr,type,errorThrown){
			
		}
	});
});