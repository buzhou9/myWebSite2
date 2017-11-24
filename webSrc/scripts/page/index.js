import '../../styles/common/font_icon.css';
import '../../styles/common/header.css';
import '../../styles/page/index.css';
import '../components/header.js';

const pageResize=function(){
	let headerBg=document.getElementById('header-bg');
	let parent=headerBg.parentNode;
	var str='?x-oss-process=image/resize,m_fill,h_'+parent.clientHeight+',w_'+parent.clientWidth;
	headerBg.src=headerBg.getAttribute('asrc')+str;
};
pageResize();
window.onresize=pageResize;
