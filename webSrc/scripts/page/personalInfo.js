import '../../styles/common/font_icon.css';
import '../../styles/common/header.css';
import '../../styles/page/personalInfo.css';
import '../components/header.js';
{
	document.querySelector('#PersonalInfo-sub').addEventListener('tap',modifyUserInfo);
	findUserInfo();
	function findUserInfo(){
		mui.ajax('/server/user/findUserInfo',{
			data:{
				id:personalInfoData.id
			},
			dataType:'json',//服务器返回json格式数据
			type:'post',//HTTP请求类型
			success:function(data){
				if(data.result=='success'){
					let personalInfoData=data.root;
					let nickname=personalInfoData.nickname || '';
					let age=personalInfoData.age || '';
					let email=personalInfoData.email || '';
					let introduce=personalInfoData.introduce || '';
					let sex=personalInfoData.sex;
					document.getElementById('nickname').value=nickname;
					document.getElementById('age').value=age;
					document.getElementById('email').value=email;
					document.getElementById('intro').value=introduce;
					if(sex=='男'){
						document.querySelector('.icon-xingbienan input').checked=true;	
					}
					if(sex=='女'){
						document.querySelector('.icon-xingbie-nv input').checked=true;	
					}
				}else{
					mui.alert(data.message);
				}
			},
			error:function(xhr,type,errorThrown){
				
			}
		});
	}
	function modifyUserInfo(){
		let sexInput=document.querySelectorAll('.group-sex input');
		let sex=null;
		if(sexInput[0].checked){
			sex=1;
		}
		if(sexInput[1].checked){
			sex=2;
		}
		let nickname=document.getElementById('nickname').value;
		if(nickname.length>6){
			mui.alert('昵称长度不允许超过6');
			return false;
		}
		let age=document.getElementById('age').value;
		let reCheckNum = /^\+?[1-9][0-9]*$/;
		if(!reCheckNum.test(age)){
			mui.alert('年龄只能是正整数！');
			return false;
		}
		let email=document.getElementById('email').value;
		let reEmail =/^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
		if(!reEmail.test(email)){
			mui.alert('请输入有效邮箱地址！');
			return false;
		}
		let intro=document.getElementById('intro').value;
		if(intro.length>100){
			mui.alert('个性签名长度不允许超过100个字符！');
			return false;
		}
		mui.ajax('/server/user/modifyUserInfo',{
			data:{
				id:personalInfoData.id,
				nickname:nickname,
				age:age,
				sex:sex,
				email:email,
				introduce:intro
			},
			dataType:'json',//服务器返回json格式数据
			type:'post',//HTTP请求类型
			success:function(data){
				console.log(data);
			},
			error:function(xhr,type,errorThrown){
				
			}
		});
	}
}
