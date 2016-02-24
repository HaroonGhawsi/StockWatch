$(document).ready(function(){
	setTimeout(popup, 3000);
	function popup(){
		$("#logindiv").css("display", "block");
	}
	$("#login #cancel").click(function(){
		$(this).parent().parent().hide();
	});
});
$("#loginbtn").click(function(){
	var name = $("#username").val();
	var password = $("#password").val();
	if(username == "" || password == ""){
		alert("Username or Password was wrong");
	}else{
		$("#logindiv").css("display", "none");
	}
});