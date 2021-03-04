$(function () {


    const mixer = mixitup('.products__inner-box');



    $('.product-slider__inner').slick({
        dots: true,
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 4,
    });

    $(".rate-star.rate-star.rate-star").rateYo({
        rating: 5,
        startWidth: "12px",
        readOnly: true,
    });


});