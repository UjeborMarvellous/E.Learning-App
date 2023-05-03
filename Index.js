$(document).ready(function(){
    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $('#login').click(function(){
        $('.login-form').addClass('popup');
    });
    $('.login-form .fa-times').click(function(){
        $('.login-form').removeClass('popup');
    });

    $(window).on('load scroll',function(){

        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

    });
});


// $(document).ready(function() {
//     $('#menu').click(function() {
//       $(this).toggleClass('fa-bars fa-times');
//       $('.navbar').toggleClass('nav-toggle');
//     });
//     $(window).on('scroll', function() {
//       $('#menu').removeClass('fa-times').addClass('fa-bars');
//       $('.navbar').removeClass('nav-toggle');
//     });
//   });