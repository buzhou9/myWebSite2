function switchDisplayDide(elme,str){
	elme.classList.add('animated');
	elme.style.animationDuration='0.2s';
	if(str=='show'){
		elme.classList.remove('fadeOut');
		elme.classList.add('fadeIn');
		elme.style.display='block';
	}else{
		elme.classList.remove('fadeIn');
		elme.classList.add('fadeOut');
		setTimeout(function(){
			elme.style.display='none';
		},200);
	}
}
function animateControl(){
	window.switchDisplayDide=switchDisplayDide;
}
function openCover(type,ctr){
	let _this=this;
	if(_this==undefined){
		var elme=document.createElement('div');
		elme.classList.add('fixdCover');
		if(type=='loading'){
			elme.classList.add('loadCover');
			elme.innerHTML=`<span class="icon-load iconfont"></span>`;
		}
		document.querySelector('body').appendChild(elme);
		elme.openCover=openCover;
		elme.inBody=true;
		return elme;
	}else{
		let ctr=ctr||type;
		if(ctr=='hide'){
			_this.style.display='none';
		}else{
			if(ctr=='remove'){
				_this.parentNode.removeChild(_this);
				_this.inBody=false;
			}else{
				if(_this.inBody){
					_this.style.display='block';
				}else{
					_this.style.display='block';
					document.querySelector('body').appendChild(_this);
				}
			}
		}
	}
}
function checkSession(fn){
	let SESSION_ID=getCookie('SESSION_ID');
	mui.ajax('/server/user/searchSession',{
		data:{
			SESSION_ID:SESSION_ID
		},
		dataType:'json',//服务器返回json格式数据
		type:'post',//HTTP请求类型
		success:function(data){
			if(data.result=='success'){
				let Personal=document.querySelector('header .Personal');
				if(Personal){
					document.querySelector('header .tools').style.display='none';
					Personal.style.display='block';
					let userName=data.root.nickname || data.root.username;
					document.querySelector('#Personal-popover .Personal-name').innerHTML=userName;
					let headPic=data.root.headPic || 'data:image/png;base64,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';
					Personal.querySelector('.headImg').src=headPic;
				}
				if(fn){
					fn(data);
				}
			}else{
				if(document.getElementById('indexPage')){
					
				}else{
					let choose=confirm(data.message+'请重新登陆！');
					if(choose){
						window.location.href='./index.html';
					}
				}
			}
		},
		error:function(xhr,type,errorThrown){
			
		}
	});
}
function getCookie(c_name) {
    if (document.cookie.length > 0) {
        let c_start = document.cookie.indexOf(c_name + "=")
        if (c_start != -1) {
            c_start = c_start + c_name.length + 1
            let c_end = document.cookie.indexOf(";", c_start)
            if (c_end == -1) c_end = document.cookie.length
            return unescape(document.cookie.substring(c_start, c_end))
        }
    }
    return ""
}
export {animateControl,openCover,checkSession};