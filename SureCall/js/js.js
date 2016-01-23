function e(obj1,obj2){
	if(arguments.length === 1){
		obj2 = arguments[0];
		obj1 = document;
	}else{
		if(typeof obj1 !== 'object' || typeof obj2 !== 'string'){return false};
	};		
	if(obj2.indexOf('#') === 0){
		if(obj1.getElementById(obj2.substring(1)) !== null){
			return obj1.getElementById(obj2.substring(1));
		}else{
			return false;
		};
	}else if(obj2.indexOf('.') === 0){
		if(obj1.getElementsByClassName){
			if(obj1.getElementsByClassName(obj2.substring(1)).length === 0){
				return false;
			}else if(obj1.getElementsByClassName(obj2.substring(1)).length === 1){
				return obj1.getElementsByClassName(obj2.substring(1))[0];
			}else{
				return obj1.getElementsByClassName(obj2.substring(1));
			};
		}else{
			var arrEle = [];
			var aTag = obj1.getElementsByTagName('*');
			for(var i = 0; i < aTag.length; i++){
				if(aTag[i].className === obj2.substring(1));
				arrEle.push(aTag[i]);
			};
			if(arrEle.length === 0){
				return false;
			}else if(arrEle.length === 1){
				return arrEle[0];
			}else{
				return arrEle;
			};
		};
	}else{
		if(obj1.getElementsByTagName(obj2).length === 0){
			return false;
		}else if(obj1.getElementsByTagName(obj2).length === 1){
			return obj1.getElementsByTagName(obj2)[0];
		}else{
			return obj1.getElementsByTagName(obj2);
		};
	};
};

//function load(fn){
//	window.addEventListener('load',fn,false);
//};

function plimg(imgname,type){
	var img = new Image();
	img.src = './images/'+imgname+'.'+type;
};

function height(obj){
	obj.parentNode.style.position = 'relative';
	obj.style.position = 'absolute';
	obj.style.left = '-10px';
	obj.style.width = '100%';
	obj.style.display = 'block';
	var val = obj.offsetHeight;
	obj.parentNode.removeAttribute('style');
	obj.removeAttribute('style');
	return val;
};

function getStyle(obj,attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	}else{
		return getComputedStyle(obj,true)[attr];
	};
};

function hasClass(obj, cls) {  
    return obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));  
}  


function addClass(obj, cls) {  
    if (!this.hasClass(obj, cls)) obj.className += " " + cls;  
}
function removeClass(obj, cls) {  
    if (hasClass(obj, cls)) {  
        var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');  
        obj.className = obj.className.replace(reg, ' ');  
    }  
}  


function move(obj,json,sp,fn){
	if(typeof obj !== 'object'){return};
	clearInterval(obj.timer);
	obj.timer=setInterval(function(){
		var stop=true;
		for(var attr in json){
			if(attr=='opacity'){
				var style=Math.round(getStyle(obj,attr)*100);
			}else{
				var style=parseInt(getStyle(obj,attr));
			};
			var speed=(json[attr]-style)/sp;
			speed=speed>0?Math.ceil(speed):Math.floor(speed);
			if(attr=='opacity'){
				obj.style[attr]=(style+speed)/100;
				obj.style.filter='alpha(opacity='+(style+speed)+')';
			}else{
				obj.style[attr]=style+speed+'px';
			};
			if(style!=json[attr])stop=false;
		};
		if(stop){
			clearInterval(obj.timer);
			if(fn)fn();
		};
	},30);
};

function removeElement(_element){
    var _parentElement = _element.parentNode;
     	if(_parentElement){
            _parentElement.removeChild(_element);  
    }
}

function loading(){
	var arr = ["banner1.jpg", "banner2.jpg", "banner3.jpg","1.1.png", "1.png", "2.1.png", "2.png", "3.1.png", "3.png", "4.1.png", "4.png", "5.1.png", "5.png", "tower.png", "round.png", "mobile.png", "signal.png", "phoneImg.jpg", "6.png", "6.1.png", "9.png", "9.1.png", "12.png", "12.1.png", "13.png", "13.1.png", "10.png", "10.1.png", "7.png", "7.1.png", "11.png", "11.1.png", "8.png", "8.1.png","14.png","15.png"];
	var iNow = 0;
	var loadingBox = e(".loadingBox");
	
	var progress = e("#progress");
	var len = arr.length
	for(var i = 0; i<len; i++){
		
		var objImg = new Image();
		objImg.src = './images/'+arr[i];
		
		objImg.onload = function(){
			iNow++;
			progress.innerHTML = parseInt((iNow/len)*100)+"%";
			if(iNow>=len){
				
				//loadingBox.style.display = "none";
				//removeElement(loadingBox);
				//toLoad();
			}
			
		}
		objImg.onerror = function(){
			//loadingBox.style.display = "none";
			//removeElement(loadingBox);
			//toLoad();
		}
		
	}
	
}

window.onload = function(){
	//loading();
	toLoad();
}



function toLoad(){
	
	//loading页面预加载
	
	
	if(e('.slide')){
		var slideIndex = 0;
		var textLiLeft = 0;
		//var li = e(e('.banner_nav'),'li');
		var textLi = e(e('.text_slide'),'li');
		function init(){
			if(document.documentElement.clientWidth>=1100){
				// e('.maskLeft').style.display = "block";
				// e('.maskRight').style.display = "block";
				textLiLeft = document.documentElement.clientWidth;
				for(var i = 0; i < e('.slide').length; i++){
					e('.slide')[i].style.width = textLiLeft+"px";
					//if(i){e(e('.text_slide'),'li')[i].style.left = textLiLeft+'px';}
				}
				e('.banner').style.height = (e('.slide')[0].offsetHeight)+'px';
				e('.banner_slide').style.width = e('.slide')[0].offsetWidth*e('.slide').length+'px';
			}
			else{
				// 左右的遮罩
				// e('.maskLeft').style.display = "none";
				// e('.maskRight').style.display = "none";
				e('.banner').style.width = document.documentElement.clientWidth+'px';
				textLiLeft = document.documentElement.clientWidth - e('.text_slide').offsetLeft || document.body.clientWidth - e('.text_slide').offsetLeft;
				for(var i = 0; i < e('.slide').length; i++){
					e('.slide')[i].style.width = document.documentElement.clientWidth+'px' || document.body.clientWidth+'px';
					//if(i){e(e('.text_slide'),'li')[i].style.left = textLiLeft+'px';}
				}
				e('.banner').style.height = e('.slide')[0].offsetHeight+'px';
				
				e('.banner_slide').style.width = e('.slide')[0].offsetWidth*e('.slide').length+'px';
			}
			slide(0);
			barNav();
			
		};
		
		
		window.onresize = function(){
			init()
			slide(0);
		};
		
		function slide(i){
			if(i || i === 0){
				slideIndex = i;
			}else{
				slideIndex < e('.slide').length-1? slideIndex++: slideIndex = 0;
			};
			var aLi = e('.slide');
			var oct = e(e('.bar'), '.act');
			
			for(var i = 0; i<aLi.length; i++){
				aLi[i].style.opacity = "0";
				//removeClass(oct[i],'active');//修改tip
			}
			addClass(oct[slideIndex],'active');
			aLi[slideIndex].style.opacity = 1;
			for(var i = 0; i < aLi.length; i++){
				//li[i].className = '';
				//textLi[i].style.transition = '';
				//textLi[i].style.webkitTransition = '';
				//textLi[i].style.transform = 'scaleY(0)';
				//textLi[i].style.webkitTransform = 'scaleY(0)';
				//textLi[i].style.mozTransform = 'scaleY(0)';
				
				textLi[i].style.opacity = '0';
				
			};
			//li[slideIndex].className = 'active';
			//textLi[slideIndex].style.transition = 'all 1s ease-in-out';
			//textLi[slideIndex].style.webkitTransition = 'all 1s ease-in-out';
			//textLi[slideIndex].style.transform = 'scaleY(1)';
			//textLi[slideIndex].style.webkitTransform = 'scaleY(1)';
			//textLi[slideIndex].style.mozTransform = 'scaleY(1)';
			textLi[slideIndex].style.opacity = '1';
		};
		
		var timer2 = setInterval(slide,5000);
		//修改tip
		//这是移入bar的导航 没有变切换了
		
		function barNav(){
			var oA = e(e('.bar'), 'a');
			var oGoto = e('.goto');
			var GO_nav = e('#GO_nav');
			var aMark = e(GO_nav, 'mark');
			var arrow = e('.arrow');
			oGoto.style.left = GO_nav.offsetLeft+oA[0].offsetLeft+(oA[0].offsetWidth-oGoto.offsetWidth)/2+'px';
			
			for(var j = 0; j < oA.length; j++){
				oA[j].index = j;
				oA[j].onmouseover = function(){
					var slideIndex = this.index;
					var a1 = oA[slideIndex].offsetLeft;
					var a2 =oA[slideIndex].offsetWidth;
					var a3 =oGoto.offsetWidth;
					var a4 = GO_nav.offsetLeft;
					oGoto.style.left = a4+a1+(a2-a3)/2+'px';
					removeClass(arrow, "arrow1");
					setTimeout(function(){
						addClass(arrow, "arrow1");
					}, 100);
					
					return false;
				};
				
			};
		
		}
		
		e('.banner').onmouseover = function(){
			clearInterval(timer2);
		};
		e('.banner').onmouseout = function(){
			timer2 = setInterval(slide,5000);
		};
		e('.bar').onmouseover = function(){
			clearInterval(timer2);
		};
		e('.bar').onmouseout = function(){
			timer2 = setInterval(slide,5000);
		};
		
		e(e('.banner_tab'),'.prev').onclick = function(){
			slideIndex > 0? slideIndex--: slideIndex = e('.slide').length-1;
			slide(slideIndex);
			return false;
		};
		e(e('.banner_tab'),'.next').onclick = function(){
			slideIndex < e('.slide').length-1? slideIndex++: slideIndex = 0;
			slide(slideIndex);
			return false;
		};
	};

	if(e('#start')){
		e('#start').onmouseover = function(){
			var next = this.nextElementSibling||this.nextSibling;
			var prev = this.previousElementSibling||this.previousSibling;
			var opacity = e(next,'.opacity');
			var signalGrid = e(next,'.signalGrid');
			var signalRound = e(e(prev,'.signalRound'),'div');
			var roundGrid = e(e(prev,'.signalRound'),'img');
			//var span = e(next,'span');
			var aLine = document.getElementById('aline');
			next.style.right = '0px';
			prev.style.left = '0px';
			opacity.style.opacity = 0;
			signalGrid.style.opacity = 1;
			//span.style.opacity = 0;
			aLine.style.opacity = 1;
		};
		e('#start').onmouseout = function(){
			var next = this.nextElementSibling||this.nextSibling;
			var prev = this.previousElementSibling||this.previousSibling;
			var opacity = e(next,'.opacity');
			var signalGrid = e(next,'.signalGrid');
			var signalRound = e(e(prev,'.signalRound'),'div');
			var roundGrid = e(e(prev,'.signalRound'),'img');
			//var span = e(next,'span');
			var aLine = document.getElementById('aline');
			next.style.right = '65px';
			prev.style.left = '80px';
			opacity.style.opacity = 1;
			signalGrid.style.opacity = 0;
			//span.style.opacity = 1;
			aLine.style.opacity = 0;
		};
	};
	
	e('.search').onclick = function(){
		e('.search_bar').style.opacity = 1;
		e('.search_bar').style.filter = 'alpha(opacity=100)';
		e('.search_bar').style.height = 'auto';
	};
	e('.search_bar_close').onclick = function(){
		e('.search_bar').style.opacity = 0;
		e('.search_bar').style.filter = 'alpha(opacity=0)';
		e('#search').value = '';
		e('.search_bar').style.height = 0;
	}
	
	e('.login_btn').onclick = function(){
		e('.main_opacity').style.display = 'block';
		e('.login_block').style.display = 'block';
	};
	e('.show_whereToBuy_block').onclick = function(){
		e('.main_opacity').style.display = 'block';
		e('.whereToBuy_block').style.display = 'block';
	}
	e('.bf_video').onclick = function(){
		e('.main_opacity').style.display = 'block';
		e('.iframe').style.display = 'block';
	};
	e('.opacity_bg').onclick = function(){
		if(e('.login_block').style.display === 'block' || e('.whereToBuy_block')){
			e('.main_opacity').style.display = 'none';
			e('.login_block').style.display = 'none';
			e('.whereToBuy_block').style.display = 'none';
			for(var i = 0; i < e(e('.whereToBuy_block'),'input').length; i++){
				if(e(e('.whereToBuy_block'),'input')[i].type === 'text'){
					e(e('.whereToBuy_block'),'input')[i].value = '';
				};
			};
		}else{
			return false;
		};
	};
	e('.bf_close').onclick = function(){
		e('.main_opacity').style.display = 'none';
		e('.iframe').style.display = 'none';
	};
	
	e('.menu_btn').onmouseover = function(){
		move(e('.menu'),{width:268,height:847},3);
	};
	e('.close').onclick = function(){
		move(e('.menu'),{width:0,height:0},5);
	};
	e('.menu').onmouseleave = function(){
		move(e('.menu'),{width:0,height:0},3);
	};
	
	if(e('.bar')){
//		var barTimer = null;
//		e('.bar').onmouseenter = function(){
//			e('.slideto').style.left = '-61px';
//			barTimer = setTimeout(function(){
//				e('.slideto').style.opacity = 0;
//			},888);
//		};
//	
//		e('.bar').onmouseleave = function(){
//			clearTimeout(barTimer);
//			e('.slideto').style.left = '';
//			e('.slideto').style.opacity = '';
//		};
	};
	
	if(e('#faq_search')){
		e('#faq_search').onclick = function(){
			if(getStyle(e('#faq_text'),'opacity') == 0){
				e('#faq_text').style.opacity = 1;
				e('#faq_text').style.filter = 'alpha(opacity=100)';
				e('#faq_text').style.zIndex = 1;
				return false;
			}else{
				e('#faq_text').value = '';
			};
		};
	};
	
	if(e(e('.faq_list'),'li')){
		for(var i = 0; i < e(e('.faq_list'),'li').length; i++){
			var cur = e(e(e('.faq_list'),'li')[i],'.faq_list_title');
			cur.onclick = function(){
				var o = this;
				var p = this.nextElementSibling||this.nextSibling;
				if(p.style.display == 'block'){
					move(p,{height:0},10,function(){
						p.removeAttribute('style');
						e(e(o,'span'),'img').src = './images/+.png';
						o.removeAttribute('style');
					});
				}else{
					for(var n = 0; n < e(e('.faq_list'),'li').length; n++){
						e(e(e('.faq_list'),'li')[n],'.faq_list_title').removeAttribute('style');
						e(e(e(e(e('.faq_list'),'li')[n],'.faq_list_title'),'span'),'img').src = './images/+.png';
						e(e(e('.faq_list'),'li')[n],'.p').removeAttribute('style');
					};
					var h = height(p);
					o.style.backgroundColor = 'hsl(128, 58%, 52%)';
					e(e(o,'span'),'img').src = './images/-.png';
					p.style.display = 'block';
					p.style.height = 0;
					move(p,{height:h},10);
				};
			};
		};
	};
	
	if(e('.product_list_group')){
		for(var i = 0; i < e('.product_list_group').length; i++){
			e('.product_list_group')[i].onmouseover = function(){
				e(this,'.fadeIn').style.opacity = 1;
				e(this,'.fadeIn').style.filter = 'alpha(opacity=100)';
			};
		};
	};
	
	if(e('.kit_optional_slide')){
		var kit_optional_slideIndex = 0;
		var kit_optional_li = e(e(e('.kit_optional_slide'),'ul'),'li');
		var kit_optional_nav = e(e('.kit_optional_nav'),'a');
		function init2(){
			for(var i = 0; i < kit_optional_li.length; i++){
				kit_optional_li[i].style.width = e('.kit_optional_slide').offsetWidth+'px';
			};
			e(e('.kit_optional_slide'),'ul').style.width = kit_optional_li[0].offsetWidth*kit_optional_li.length+'px';
		};
		init2();
		window.onresize = function(){init2()};
		function kit_optional_slide(i){
			if(i || i === 0){
				kit_optional_slideIndex = i;
			}else{
				kit_optional_slideIndex < kit_optional_li.length-1? kit_optional_slideIndex++: kit_optional_slideIndex = 0;
			};
			move(e(e('.kit_optional_slide'),'ul'),{left:-(kit_optional_slideIndex*kit_optional_li[0].offsetWidth)},6,function(){
				for(var i = 0; i < kit_optional_nav.length; i++){
					kit_optional_nav[i].className = '';
				};
				kit_optional_nav[kit_optional_slideIndex].className = 'on';
			});
		};
		var timer3 = setInterval(kit_optional_slide,8000);
		for(var j = 0; j < kit_optional_nav.length; j++){
			kit_optional_nav[j].index = j;
			kit_optional_nav[j].onmouseover = function(){
				clearInterval(timer3);
			};
			kit_optional_nav[j].onmouseout = function(){
				timer3 = setInterval(kit_optional_slide,8000);
			};
			kit_optional_nav[j].onclick = function(){kit_optional_slide(this.index)};
		};
		e('.kit_optional_pn').onmouseover = function(){
			clearInterval(timer3);
		};
		e('.kit_optional_pn').onmouseout = function(){
			timer3 = setInterval(kit_optional_slide,8000);
		};
		e(e('.kit_optional_pn'),'.prev').onclick = function(){
			kit_optional_slideIndex > 0? kit_optional_slideIndex--: kit_optional_slideIndex = kit_optional_li.length-1;
			kit_optional_slide(kit_optional_slideIndex);
		};
		e(e('.kit_optional_pn'),'.next').onclick = function(){
			kit_optional_slideIndex < kit_optional_li.length-1? kit_optional_slideIndex++: kit_optional_slideIndex = 0;
			kit_optional_slide(kit_optional_slideIndex);
		};
	};
	
	
	if(e('.tabControl')){
		var tabLi = e(e('.tabControl'),'li');
		for(var i = 0; i < tabLi.length; i++){
			tabLi[i].index = i;
			plimg(tabLi[i].innerHTML,'jpg');
			tabLi[i].onclick = function(){
				for(var n = 0; n < tabLi.length; n++){
					tabLi[n].className = '';
					e(e('.tabControl'),'img')[n].style.display = 'none';
				};					
				this.className = 'on';
				e(e('.tabControl'),'img')[this.index].style.display = 'block';
			};
		};
	};
	
	function scrollTop(val){
		if(val){
			document.documentElement.scrollTop = val;
			document.body.scrollTop = val;
		}else{
			return document.documentElement.scrollTop || document.body.scrollTop;
		};
	};
	if(e('.toTop') || e('.toBottom')){
		var scrollStatus = true;
		e('.toBottom').onclick = e('.toTop').onclick = function scroll(){
			if(document.documentElement.scrollHeight > document.documentElement.clientHeight && scrollStatus){
				scrollStatus = false;
				var target = 0;
				this.className === 'toTop'? target = 0: target = (document.documentElement.scrollHeight-document.documentElement.clientHeight);
				var curTop = scrollTop();
				var scrollTimer = setInterval(function(){
					target >= curTop? curTop += Math.ceil((target - scrollTop())/5): curTop += Math.floor((target - scrollTop())/5);
					if(curTop !== target){
						scrollTop(curTop);
					}else{
						clearInterval(scrollTimer);
						scrollTop(target);
						scrollStatus = true;
					};
				},30);
			};
		};
	};
	init();
};
