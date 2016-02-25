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
});
	