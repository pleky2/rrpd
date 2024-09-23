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
});