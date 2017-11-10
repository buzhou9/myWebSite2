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
export {animateControl};