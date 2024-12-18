$(document).ready(function(){
    // gsap.registerPlugin(ScrollToPlugin,Draggable)

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
            arrows:false,
            autoplaySpeed: 2000,
            speed: 15000,
            pauseOnHover: false,
            infinite: true,
            cssEase: 'linear'
            // fade: true
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


        $('.menu .parent').mouseenter(function() {
            // Remove the hovered class from all menu items
            $('.menu .parent').children('a').removeClass('link-active');
            
            // Add the hovered class to the current menu item
            $(this).children('a').addClass('link-active');
          });
        
          // Optionally, if you want to remove the hovered class when not hovering over any menu item
          $('.menu').mouseleave(function() {
            $('.menu .parent').children('a').removeClass('link-active');
          });
    });

    $('.mitra-slider').slick({
        slidesToShow: 1,
        dots: false,
        arrows: true
    })

    $('.mitra-tab').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        asNavFor: ".mitra-slider",
        focusOnSelect: true
    })

    $('.overlay-bg.link').on('click', function(e) {
        e.preventDefault();
        var content = $(this).parents('.grid-item').find(".data-popup").html();
        $("#popup-bod .content-popup").html(content), openPopup("#popup-bod")
    })



    $('.detail .detail-big').slick({
        arrows: false,
        
        slidesToScroll: 1,
        slidesToShow: 1
    })

    $('.detail .detail-nav').slick({
        arrows: false,
        fade: false,
        slidesToScroll: 1,
        slidesToShow: 5,
        asNavFor: '.detail .detail-big',
        // centerMode: true,
        focusOnSelect: true
    })
    

    if ($(window).width() >- 1280) {
        $('ul.menu >li.have-child').hover(function () {
            $("ul.menu").hasClass("not-submenu") ||
                ($(this).parent().hasClass("drop")
                    ? ($(this).removeClass("drop"), $(this).children(".child").hide())
                    : ($(this).parent().children("li").removeClass("drop"), $(this).parent().find(".child").hide(), $(this).addClass("drop"), $(this).children(".child").show()));
        }, function(){
            $("header ul.menu .child").hide(), $("ul.menu").children("li").removeClass("drop");
        })
    }

    var header = $('header')

   $(window).on('scroll', function() {
    var scrollTop = $(window).scrollTop();


    if (scrollTop > 0) {
        header.hasClass("sticky") || header.addClass("sticky")
    } else {
       header.removeClass("sticky")
    }
    console.log('scroll', $(window).scrollTop())
    
   })
});

