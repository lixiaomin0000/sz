window.onload = function(){
	var zhxxspan = document.getElementsByClassName("zhxx-span")[0];
	var zhxxb = document.getElementsByClassName("zhxx-b")[0];
	var zhxxhh = document.getElementsByClassName("zhxx-hh")[0];
	var ppp = document.getElementById("ppp");
	var as = ppp.getElementsByTagName("a");
	zhxxspan.onclick = function(){
		zhxxb.style.display = "block";
	}
	zhxxhh.onclick = function(){
		zhxxb.style.display = "none";
		return false;
	}
	for(var i = 0;i<as.length;i++){
		as[i].index = i		
//		onfocus 文本框获得焦点
		as[i].onfocus = function(){
			for(var j = 0;j<as.length;j++){
				as[j].style.background = "silver";
				as[j].style.color = "black";
			}
			as[this.index].style.background = "#ffac2c";
			as[this.index].style.color = "white";
		}
//		onblur  文本框失去焦点
		as[i].onblur = function(){
			for(var j = 0;j<as.length;j++){
				as[j].style.background = "silver";
				as[j].style.color = "black";
			}
		}
	}
	
}
	
