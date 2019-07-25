$(document).ready(function(){
    $('.menu-toggle').click(function(){
        $('.navbar-menu').toggleClass('active');
    })
    $('ul li').click(function(){
        $(this).siblings().removeClass('active');
        $(this).toggleClass('active');
    })
});

