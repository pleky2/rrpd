$(document).ready(function(){
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
        $('.test').slick({
            slidesToShow: 6, 
            slidesToScroll: 6, 
            autoplay: true,
            autoplaySpeed: 2000,
            speed: 15000,
            pauseOnHover: false,
            infinite: true,
            cssEase: 'linear'
            // fade: true
        });
    });

    // $(document).ready(function(){
    //     $('.tab.zz').slick({"slidesToShow": 2, "slidesToScroll": 1});

       
    // });

    // $(document).ready(function(){
    //     $('.next').on('click', function () {
    //         console.log('test')
    //         $('.test').slick('slickGoTo', 1);
    //     });
    // });

    // $(document).ready(function(){
    //     $('.prev').on('click', function () {
    //         console.log('test')
    //         $('.test').slick('slickGoTo', 0);
    //     });
    // });


    $(document).ready(function(){
        $('.multiple-items').slick({ 
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            centerMode: true,
        });
    });

    $(document).ready(function(){
        $('.mebi-slider').slick({
            slidesToShow: 1, 
            slidesToScroll: 1, 
            centerMode: true,
            dots:true,
            arrows:false,
            infinite: false,

            // fade: true
        });
    })

    $(".prev-btn").click(function () {
		$(".mebi-slider").slick("slickPrev");
	});

	$(".next-btn").click(function () {
		$(".mebi-slider").slick("slickNext");
	});
	$(".prev-btn").addClass("slick-disabled");
	$(".mebi-slider").on("afterChange", function () {
		if ($(".slick-prev").hasClass("slick-disabled")) {
			$(".prev-btn").addClass("slick-disabled");
		} else {
			$(".prev-btn").removeClass("slick-disabled");
		}
		if ($(".slick-next").hasClass("slick-disabled")) {
			$(".next-btn").addClass("slick-disabled");
		} else {
			$(".next-btn").removeClass("slick-disabled");
		}
	});



    $(document).ready(function() {
        // Variable to store the currently visible child
        let currentChild = null;

        $('.menu .parent').hover(
            function() {
                // On mouse enter, get the id of the hovered parent
                const id = $(this).attr("id");

                // Hide the currently visible child if it exists and is different from the new one
                if (currentChild && currentChild !== `.chd[data-parent="${id}"]`) {
                    $(currentChild).addClass("d-none").hide(); // Hide the current child
                }

                // Show the child associated with the current parent
                currentChild = `.chd[data-parent="${id}"]`;
                $(currentChild).removeClass("d-none").show(); // Show the new child
            }
        );
    });
});

