$(function() {
    $('.clearnum').on('click',function() {
      $('.numb').val('');
    })

    $('.btn').on('click',function(){
      if (!$('.numb').val()=='') {
        $('.body').css('background','gray');
        $('.body').css('opcity','0.5');
        $('.numb').css('background', 'gray');
        $('.show').show();
        $('.numb1').html($('.numb').val());
      }
    });
    
  $('.qx').on('click',function(){
    $('.body').css('background','white');
    $('.body').css('opcity','1');
    $('.numb').css('background', 'white');
    $('.show').hide();
    /* Act on the event */
  });
  
  
  var index1 = 60;
  $('.qd').on('click',function(){
  	var timer = setInterval(function(){
  	index1--;
	$('.djs').html(index1+'s');
	if(index1 == 0){
		clearInterval(timer);
		index1 = 60;
		$('.djs').html("重新获取");
		$('.djs').on('click',function(){
			var timer1 = setInterval(function(){
				$('.djs').html(index1+'s');
					index1--;
					if(index1 == 0){
						clearInterval(timer1);
						setInterval(timer)
						$('.djs').html("重新获取");
						index1 = 6;
					}
			},1000)
		})
	}
  },1000);
    $('.body').css('background','white');
    $('.body').css('opcity','1');
    $('.numb').css('background', 'white');
    $('.show').hide();
    $('.yzm').show();
    $('.yzm1').show();
    $('.sjh').hide();
    $('.sjh1').hide();
    /* Act on the event */
  });
  
  
  $('.yzmbtn').on('click',function(){
  	if(!$('#numb1').val()==''){
  		$('.yzm').hide();
	    $('.yzm1').hide();
	    $('.cz').show();
	    $('.cz1').show();
  	}
  });
  
  var eye = 1;
$(".icon-eye").on('click',function(){
	eye++;
	if(eye%2==0){
		$("#numb2").attr('type','text');
		$(".icon-eye").css('color','orange');
	}else{
		$("#numb2").attr('type','password');
		$(".icon-eye").css('color','#cccccc');
	}
	
})
  
  $('.czbtn').on('click',function(){
  	if(!$("#numb2").val()==''){
  		$('.show1').show();
  	}
  });

})
