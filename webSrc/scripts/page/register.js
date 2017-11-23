import '../../styles/common/header.css';
import '../../styles/common/font_icon.css';
import '../../styles/page/register.css';
import {openCover} from '../components/commonTool.js';
window.openCover=openCover;
{
	document.getElementById('register-sub').addEventListener('tap',function(){
		var userName=document.getElementById('userName').value;
		var password=document.getElementById('password').value;
		var password1=document.getElementById('password1').value;
		var re=/\S/;
		if(!re.test(userName)){
			alert('用户名不能为空！');
			return false;
		}
		if(!re.test(password)){
			alert('密码不能为空！');
			return false;
		}
		if(!re.test(password1)){
			alert('重输入密码不能为空！');
			return false;
		}
		if(password1!=password){
			alert('两次输入密码不一致！');
			return false;
		}
		openCover('loading','show');
		mui.ajax('/server/user/register',{
			data:{
				userName:userName,
				password:password
			},
			dataType:'json',//服务器返回json格式数据
			type:'post',//HTTP请求类型
			success:function(data){
				if(data.result=='success'){
					let result=confirm('注册成功！是否立即登录！');
					if(result){
						mui.ajax('/server/user/login',{
							data:{
								userName:userName,
								password:password
							},
							dataType:'json',//服务器返回json格式数据
							type:'post',//HTTP请求类型
							success:function(data){
								if(data.result=='success'){
									window.location.href='./index.html';
								}else{
									alert(data.message);
								}
							},
							error:function(xhr,type,errorThrown){
								alert(errorThrown);
							}
						});
					}else{
						window.location.href='./index.html';
					}
				}else{
					alert(data.message);
				}
			},
			error:function(xhr,type,errorThrown){
				
			}
		});
	});
	let $username=document.querySelector('#register-form input[name="username"]');
	$username.onchange=function(){
		let $iconLoad=this.nextElementSibling;
		let $iconResult=$iconLoad.nextElementSibling;
		$iconResult.style.display='none';
		if(this.value==''){
			$iconLoad.style.display='none';
			return false;
		}
		$iconLoad.style.display='block';
		mui.ajax('/server/user/searchAccount',{
			data:{
				userName:this.value
			},
			dataType:'json',//服务器返回json格式数据
			type:'get',//HTTP请求类型
			success:function(data){
				if(data.result=='success'){
					if(data.root){
						$iconLoad.style.display='none';
						$iconResult.classList.remove('icon-error');
						$iconResult.classList.add('icon-correct');
						$iconResult.style.display='block';
					}else{
						$iconLoad.style.display='none';
						$iconResult.classList.remove('icon-correct');
						$iconResult.classList.add('icon-error');
						$iconResult.style.display='block';
						alert(data.message);
					}
				}else{
					alert(data.message);
				}
			},
			error:function(xhr,type,errorThrown){
			}
		});
	}
}
