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
export {animateControl,openCover};