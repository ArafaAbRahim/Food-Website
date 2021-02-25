$(document).ready(function(){
    $('.food-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        prevArrow: ".prev-btn",
        nextArrow: ".next-btn"
        
    });

    $('.nav-trigger').click(function(){
        $('.site-content-wrapper').toggleClass('scaled');
     })
     
});