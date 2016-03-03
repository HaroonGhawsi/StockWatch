$(function(){
    var pull = $('#pull');
    var menu = $('nav ul');
    menuheight = menu.height();
    
    $(pull).on("click", function(e){
        e.preventDefault();
        menu.slideToggle();
    });
});

$(window).resize(function(){
    var w = $(window).width();
    if(w > 320 && menu.is(':hidden')){
        menu.removeAttr('style');
    }
});

