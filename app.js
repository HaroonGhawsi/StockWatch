$(document).ready(function(){
	setTimeout(popup, 3000);
	function popup(){
		$("#ask").fadeIn();
	}
	$("#sgnN").click(function(){
		$("#logindiv").fadeIn();
	});
	$("#sgnUP").click(function(){
		$("#register").fadeIn();
	});
	$("#rcancel").click(function(){
		$(this).parent().parent().fadeOut();
	});
	$("#close").click(function(){
		$(this).parent().fadeOut();
	});
	$("#cancel").click(function(){
		$(this).parent().parent().fadeOut();
	});
	$("#submit").click(function(){
				
		
		var fname = $("#fname").val();
		var lname = $("#lname").val();
		var pwd = $("#pwd").val();
		var rpwd = $("#rpwd").val();
		var eml = $("#eml").val();
		
		if(fname == "" || lname == "" || pwd == "" || rpwd == "" || eml == ""){
			$("#errmsg").append("Empty Error!");
		}
		else{
			$("#errmsg").append("Success!");
		}
		
	});
});

	
	
	
	
	
	