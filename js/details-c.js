window.onload = function(){
	var yebtn = document.getElementById("ye-btn");
	var zhcg = document.getElementsByClassName("zhcg")[0];
	var qd = document.getElementById("qd");
	var dx = document.getElementById("dx");
		
	yebtn.onclick = function(){
		if($("#dx").val() != "" && $("#dx").val() <= 100) {
			zhcg.style.display = "block";
		} else if($("#dx").val() == 0){
			alert("请输入转换量")
		}else{
			alert("您的短信余额不足")
		}
		
	}
	qd.onclick = function(){
		zhcg.style.display = "none";
		return false;
	}
}
	
