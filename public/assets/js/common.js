$(document).ready(function(){
    console.log('testing')
    $('.our-milestone .slider-dots').slick({
        arrows: false,
        centerMode: true,
        slidesToShow: 5,
        infinite: false,
        asNavFor: ".slider-center-content",
        dots: false,
        focusOnSelect: true,
        responsive: [{ breakpoint: 767, settings: { slidesToShow: 2, variableWidth: true } }],
    })

    $('.slider-center-content').slick({ arrows: !1, slidesToShow: 1, fade: !1, dots: !1, infinite: !1, asNavFor: ".slider-dots", draggable: !1,  });
    var e = function() {
        $(".slider-milestone").slick({ arrows: !0, dots: !1, slidesToShow: 1, infinite: !1,  });
    }
    e()
 
    $(".our-milestone .slider-dots").on("afterChange", function () {
        $(".slider-milestone").slick("unslick");
        e();
    })
    $(".slider-milestone").on("afterChange", function (e) {
        console.log('asu', $(".slider-milestone .slick-prev").attr("aria-disabled"))
        "true" == $(".slider-milestone .slick-prev").attr("aria-disabled") ? $(".arrow.prev").addClass("disabled") : $(".arrow.prev").removeClass("disabled");
        "true" == $(".slider-milestone .slick-next").attr("aria-disabled") ? $(".arrow.next").addClass("disabled") : $(".arrow.next").removeClass("disabled");
    })



    $(document).ready(function(){
        $('.test').slick({"slidesToShow": 1, "slidesToScroll": 1, fade: true});
    });

    $(document).ready(function(){
        $('.tab.zz').slick({"slidesToShow": 2, "slidesToScroll": 1});

       
    });

    $(document).ready(function(){
        $('.next').on('click', function () {
            console.log('test')
            $('.test').slick('slickGoTo', 1);
        });
    });

    $(document).ready(function(){
        $('.prev').on('click', function () {
            console.log('test')
            $('.test').slick('slickGoTo', 0);
        });
    });


    $(document).ready(function(){
        $('.multiple-items').slick({ 
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            centerMode: true,
        });
    });
});

