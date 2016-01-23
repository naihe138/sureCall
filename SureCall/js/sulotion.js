var prv = e(".check_btnLeft");
var next = e(".check_btnRight");
var chexk_text = e(".chexk_text");
var main_block3 = e(".main_block3");
var needBox = e(".needBox");
var f_close = e("#f_close");
var help = e(".help");

var iNow = 0;
var checkAn1 = e('.checkAn1');
var checkAn2 = e('.checkAn2');
var checkAn3 = e('.checkAn3');
var main_block2 = e('.main_block2');

var c_mark = e(checkAn1, '.c_mark');


var an1_div = e(checkAn1, 'div');
var an2_div = e(checkAn2, '.c_sin');
var an3_div = e(checkAn3, '.c_sin');
var onoff1 = false;
var onoff2 = false;
var onoff3 = false;

var t1 = "";
var t2 = ""; 
var t3 = "";
var itext1 = e('#itext1');
var itext2 = e('#itext2');
var itext3 = e('#itext3');
//an1 check
for(var i = 0; i< an1_div.length; i++){
	an1_div[i].index = i;
	an1_div[i].onclick = function(){
		t1 = this.dataset.text;
		for(var i=0; i<c_mark.length; i++){
			c_mark[i].style.opacity = 0;
		}
		c_mark[this.index].style.opacity = 1;
		setTimeout(function(){
			iNow=1;
			checkAn1.style.display="none";
			checkAn2.style.display="block";
			chexk_text.innerHTML = "2G,3G or 4G?";
		}, 500)
		
		
		onoff1 = true;
	}
	
}
//an2 check
for(var i = 0; i< an2_div.length; i++){
	an2_div[i].index = i;
	an2_div[i].onclick = function(){
		t2 = this.dataset.text;
		for(var i = 0; i< an2_div.length; i++){
			removeClass(an2_div[i], "c_sin1");
		}
		addClass(an2_div[this.index], "c_sin1");
		setTimeout(function(){
			iNow=2;
			checkAn2.style.display="none";
			checkAn3.style.display="block";
			chexk_text.innerHTML = "Coverage?";
		}, 500)
		onoff2 = true;
	}
}
//an3 check
for(var i = 0; i< an3_div.length; i++){
	an3_div[i].index = i;
	an3_div[i].onclick = function(){
		t3 = this.dataset.text;
		for(var i = 0; i< an3_div.length; i++){
			removeClass(an3_div[i], "c_sin1");
		}
		addClass(an3_div[this.index], "c_sin1");
		setTimeout(function(){
			iNow=2;
			main_block2.style.display="block";
			needBox.style.display="block";
			itext1.innerHTML = t1;
			itext2.innerHTML = t2;
			itext3.innerHTML = t3;
			scrollTop(800);
		}, 500)
		onoff3 = true;
	}
}

next.onclick = function(){
	
	switch (iNow){
		case 0:
			if(onoff1){
				//prv.style.borderColor = "#03B9D9";
				//prv.style.backgroundImage = "url(images/prev.1.png)";
				
				iNow=1;
				checkAn1.style.display="none";
				checkAn2.style.display="block";
				chexk_text.innerHTML = "2G,3G or 4G?";
			}else{
				alert("Please answer the question");
			}
			break;
		case 1:
			if(onoff2){
				iNow=2;
				checkAn2.style.display="none";
				checkAn3.style.display="block";
				chexk_text.innerHTML = "Coverage?";
			}else{
				alert("Please answer the question");
			}
			break;
		case 2:
			if(onoff3){
				//main_block2.style.display="block";
				//needBox.style.display="block";
				
			}else{
				alert("Please answer the question");
			}
			break;
		default:
			break;
	}
}
prv.onclick = function(){
	iNow--;
	if(iNow<=0){
		iNow=0;
		//prv.style.borderColor = "#bbbbbc";
		//prv.style.backgroundImage = "url(images/prev.png)";
	}
	switch (iNow){
		case 0:
			if(onoff1){
				iNow=0;
				checkAn1.style.display="block";
				checkAn2.style.display="none";
				chexk_text.innerHTML = "Application?";
			}else{
				alert("Please answer the question");
			}
			break;
		case 1:
			if(onoff2){
				iNow=1;
				checkAn2.style.display="block";
				checkAn3.style.display="none";
				chexk_text.innerHTML = "Application?";
			}else{
				alert("Please answer the question");
			}
			break;
		default:
			break;
	}
	console.log(iNow);
}
f_close.onclick = function(){
	needBox.style.display="none";
}

help.onclick = function(){
	needBox.style.display="block";
}


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
