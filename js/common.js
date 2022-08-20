$(document).ready(function() {

    $('.image-link').magnificPopup({type:'image'});
    $('.popup').magnificPopup();

    $.stellar({
        responsive: true,
        offset: 60
    });

    $(".owl-carousel").owlCarousel({
        loop: true,
        responsiveClass:true,
        responsive: {
            0: {
                items: 1,
                nav: true
            }
        },
        navText: ""
    });

    function wResize() {
        $("header").css("min-height", $(window).height());
    };
    wResize();
    $(window).resize(function() {
        wResize()
    });

    $(".tabs_header .tab_item").not(":nth-child(n+2)").show();
    $(".tabs_header .wrapper .tab").click(function() {
        $(".tabs_header .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
        $(".tabs_header .tab_item").hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass("active");

    $(".contacts_top .tab_item").not(":nth-child(2)").show();
    $(".contacts_top .tab").click(function() {
        $(".contacts_top .tab").removeClass("active").eq($(this).index()).addClass("active");
        $(".contacts_top .tab_item").hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass("active");

    $(".top_phone .tab_item").not(":nth-child(2)").show();
    $(".top_phone .wrapper .tab").click(function() {
        $(".top_phone .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
        $(".top_phone .tab_item").hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass("active");

    $(".footer_phone .tab_item").not(":nth-child(2)").show();
    $(".footer_phone .wrapper .tab").click(function() {
        $(".footer_phone .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
        $(".footer_phone .tab_item").hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass("active");

    //Цели для Яндекс.Метрики и Google Analytics
    $(".count_element").on("click", (function() {
        ga("send", "event", "goal", "goal");
        yaCounterXXXXXXXX.reachGoal("goal");
        return true;
    }));

    //SVG Fallback
    if(!Modernizr.svg) {
        $("img[src*='svg']").attr("src", function() {
            return $(this).attr("src").replace(".svg", ".png");
        });
    };

    //Аякс отправка форм
    //Документация: http://api.jquery.com/jquery.ajax/
    $("form").submit(function (e) {
        var ths = $(this);
        e.preventDefault;
        $.ajax({
            type: "POST",
            url: "mail.php",
            data: $(this).serialize()
        }).done(function () {
            alert("Спасибо за заявку!");
            setTimeout(function () {
                var magnificPopup = $.magnificPopup.instance;
                magnificPopup.close();
                ths.trigger("reset");
            }, 1000);
        });
    });

});

$(window).load(function() {
    $(".top_header").animated("fadeInDown", "fadeOut");
    $(".tabs_header .wrapper").animated("flipInY", "fadeOut");
    $(".profi_item").animated("fadeInRight", "fadeOut");
    $(".s_profi form").animated("zoomInRight", "fadeOut");
    $(".s_back h3").animated("fadeInUp", "fadeOut");
    $("footer").animated("fadeInUp", "fadeOut");

});

