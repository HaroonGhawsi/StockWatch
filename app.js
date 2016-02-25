$(document).ready(function(){
	setTimeout(popup, 3000);
	function popup(){
		$("#ask").css("display", "block");
	}
	$("#sgnN").click(function(){
		$("#logindiv").css("display", "block");
	});
	$("#sgnUP").click(function(){
		$("#register").css("display", "block");
	});
	$("#rcancel").click(function(){
		$(this).parent().parent().hide();
	});
	$("#guest").click(function(){
		$(this).parent().parent().hide();
	});
	$("#cancel").click(function(){
		$(this).parent().parent().hide();
	});
});
	