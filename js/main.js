(function ($) {
    "use strict";

    /*----------------------------
        page-loader and home-wrapper background active
    ------------------------------ */
    $(window).on('load', function () {
        $(".loader").fadeOut(300);
        /*--- wow-js active --- */
        new WOW().init();
    });

    /*----------------------------
        navigation and goTop btn active
    ------------------------------ */
    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll >= 250) {
            $('header').addClass("nav_fixed");
            $('.go_top').removeClass('content_hide');
        } else {
            $('header').removeClass("nav_fixed");
            $('.go_top').addClass('content_hide');
        }
        
        if(scroll + $(window).height() > $(document).height() - 80) {
            $('.go_top').css('bottom','230px');
        }else{
            $('.go_top').css('bottom','55px');
        }
    });

    /*----------------------------
        responsive menu active
    ------------------------------ */
    $('.menu_btn').on('click', function () {
        $(this).toggleClass('open');
        $('nav').toggleClass('show');
        $('header').toggleClass('h-100');
        $('body').toggleClass('oflow-hide');
    });
    $('.menu_btn.closei').on('click', function () {
        $('header').removeClass('h-100');
    });
    $('nav ul li a').on('click', function () {
        $('.menu_btn').removeClass('open');
        $('header').removeClass('h-100');
        $('nav').removeClass('show');
        $('body').removeClass('oflow-hide');
    });

    /*----------------------------
        video-popup active
    ------------------------------ */
    $('.video_pop').magnificPopup({
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });

    /*----------------------------
        magnificPopup active
    ------------------------------ */
    $(".zoom-gallery").magnificPopup({
        delegate: "a.zoom_image",
        type: "image",
        closeOnContentClick: !1,
        closeBtnInside: !1,
        mainClass: "mfp-with-zoom mfp-img-mobile",
        image: {
            verticalFit: !0
        },
        gallery: {
            enabled: !0
        },
        zoom: {
            enabled: !0,
            duration: 300,
            opener: function (a) {
                return a.find("img");
            }
        }
    });

    /*----------------------------
        isotop filter active
    ------------------------------ */
    var $gridt = $('.zoom-gallery');
    $gridt.isotope({
        itemSelector: '.isotop_item',
        layoutMode: 'fitRows'
    });
    $('.filter-buttons').on('click', 'p', function () {
        var filterValue = $(this).attr('data-filter');
        $gridt.isotope({
            filter: filterValue
        });
        $(this).addClass('active').siblings().removeClass('active');
    });

    /*----------------------------
        isotop active
    ------------------------------ */
    // init Isotope
    var $grid = $('.works').isotope({
      itemSelector: '.isotop_item',
      percentPosition: true
    });
    // layout Isotope after each image loads
    $grid.imagesLoaded().progress( function() {
      $grid.isotope('layout');
    }); 

    /*----------------------------
        smooth-scroll active
    ------------------------------ */
    $('.smooth_scroll').on("click", function() {
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate({
                    scrollTop: target.offset().top - 70
                }, 1000, "easeInOutExpo");
                return false;
            }
        }
        return false;
    });

    /*----------------------------
        background-image active
    ------------------------------ */
    $('.bg-img').each(function () {
        var src = $(this).attr('data-src');
        $(this).css({
            'background-image': 'url(' + src + ')'
        });
    });
    
    /*----------------------------
        parallax(Jarallax) active
    ------------------------------ */
    $('.parallax').jarallax();

})(jQuery);