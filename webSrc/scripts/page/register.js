import '../../styles/page/register.css';


//			document.getElementById('register-sub').onclick=function(){
//				var userName=document.getElementById('userName').value;
//				var password=document.getElementById('password').value;
//				var re=/\S/;
//				if(!re.test(userName)){
//					alert('用户名不能为空！');
//					return false;
//				}
//				if(!re.test(password)){
//					alert('密码不能为空！');
//					return false;
//				}
//				mui.ajax('/user/register',{
//					data:{
//						userName:userName,
//						password:password
//					},
//					dataType:'json',//服务器返回json格式数据
//					type:'post',//HTTP请求类型
//					success:function(data){
//						alert(data.message);
//					},
//					error:function(xhr,type,errorThrown){
//						
//					}
//				});
//			}