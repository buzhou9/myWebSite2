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
		async:false,
		success:function(data){
			if(data.result=='success'){
				window.personalInfoData=data.root;
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