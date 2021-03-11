$(function () {

    let mixer = mixitup('.products__inner-box');

    // $(".js-range-slider").ionRangeSlider({
    //     type: "double",
    //     min: 0,
    //     max: 1000,
    //     from: 0,
    //     to: 600,
    //     prefix: "$"
    // });



    $('.product-slider__inner').slick({
        dots: true,
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 4,
    });

    
    $(".rate-star").rateYo({
        rating: 5,
        startWidth: "12px",
        readOnly: true,
    });

    


});