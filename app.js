
$(document).ready(function(){
	$("#sgnN").click(function(){
		$("#logindiv").fadeIn();
	});
	$(".sgnUP").click(function(){
		$("#register").fadeIn();
	});
	$(".rcancel").click(function(){
		$(this).parent().parent().fadeOut();
	});
	$(".cancel").click(function(){
		$(this).parent().parent().fadeOut();
	});
	$("#results").hide();
	
});	
$(document).ready(function(){
	$(".submit").click(function(){	
		
		var fname = $("#fname").val();
		var lname = $("#lname").val();
		var pwd = $("#pwd").val();
		var rpwd = $("#rpwd").val();
		var eml = $("#eml").val();
		
				
		if(fname == "" || lname == "" || pwd == "" || rpwd == "" || eml == ""){
			
			$("#registration").hide();
			$("#ask1").hide();
			$("#results").fadeIn();
			$("#errmsg").append("Empty Error!");
			
			$("#ok").click(function(){
				$("#results").fadeOut();
				$("#registration").fadeIn();
			});
			
		}
		else{
			$("#registration").hide();
			$("#ask1").hide();
			$("#results").fadeIn();
			$("#errmsg").append("Success!");
			$("#ok").click(function(){
				$("#results").hide();
			});
		}
		
	});
});


	
	
	
	
	
	