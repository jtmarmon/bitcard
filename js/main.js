function showPreorder(){
	$("#i-want-it").addClass('i-want-clicked');
	$("#waiting-for").hide();
	setTimeout(function(){
		$("#preorder-wrapper").show(500);
	},750);
}
function validateEmail(email) { 
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
} 
function checkEmail(){
	if(validateEmail(document.getElementById('emailInput').value))
	{

		$('.bitcard-button').show( 'slow');
	}
	else
	{
		$('.bitcard-button').hide('slow');
	}
}
var arrowCycle = true;
function pulseArrow() {
			arrowCycle = !arrowCycle;
			if(arrowCycle)
			{
	        	$(".arrow-down").css('border-top-color', 'rgba(240,240,240,.7)');
	        }
	        else
	        {
	        	$(".arrow-down").css('border-top-color', 'rgba(240,240,240,.2)');
	        }
	    }
$(document).ready(function(){
	    
	    setInterval(pulseArrow, 700);
	setTimeout(function(){
		$('#f1_container').animate({'opacity':'1'},2000,'linear');
		$('#tagline').animate({'opacity':'1'}, 2000,'linear');
	},200);
     var alpha = Math.min(0.4 * $(this).scrollTop() / 1, 0.9);
        $("#p1").css('background-color', 'rgba(255, 255, 255,' + alpha + ')');
 $(document).scroll(function() {

        var alpha = 0.6 * $(this).scrollTop() / 300;

	    $("#p1").css('background-color', 'rgba(255, 255, 255,' + alpha + ')');
	    $("#info-wrapper").css('opacity', alpha);
	    $('#tagline').css('opacity', 1-alpha);
	    $("#introducing").css('opacity', 1-alpha);
	    $(".arrow-down").css('opacity', 1-alpha);
	    $("#f1_container").css('opacity', 1-alpha);
	    if(alpha<=.2)
	    {
	    	$("#tagline").css({'opacity':'1','color':'white'});
	    $("#info-wrapper").css('opacity', '0');
	    }
	    else
	  	  $("#tagline").css({'opacity':'1','color':'rgba(0,0,0,' + alpha + ')'});

 		 var percentageVisible = $(window).scrollTop()/$(window).height()
 		 percentageVisible+=.1;
 		  if(percentageVisible>=1)
        	percentageVisible=1;
	   // $("#info-wrapper").css('left',(100-(1/percentageVisible)*100) + "%");
 		 if(percentageVisible>=1)
 		 	percentageVisible=1;
 		 var offset = 100 - percentageVisible*100;
 		 $("#p2 *").css({'opacity':percentageVisible});
    });
	$("#tagline").waypoint(function(direction){
		if(direction==="down")
		{
			$("#standalones").stop().animate({'left':'0'},1000, function(){
				$("#standalones").effect('bounce',{direction:'left', times:'3', distance:'15', mode:'show'},600);
			});
		}
		else
		{
			$("#standalones").stop().animate({'left':'-100%'},1000);
		}
	});
});
