/*!
* jQuery Menu
* version: 0.1.0
* Copyright (c) 2013 KeLeyi
* http://keleyi.com
*/
(function ($) {
    $.fn.keleyi = function (options) {

        var settings = $.extend({
            width: '986px',
            margin: '0px auto',
            item_background_color_hover: '#005500',
            item_background_color: 'transparent',
            item_width: 'auto',
            bar_height: 'auto',
            bar_position: 'fixed',
            bar_background_color: "#008000",
            bar_bottom: "0px"
        }, options);


        $(this).addClass("keleyi-menu");
        $(this).css({ "width": settings.width, "margin": settings.margin });

        $(this).wrap("<div class='keleyi-menubar'></div>");
        $(this).parent().css({ "background-color": settings.bar_background_color
        , "height": settings.bar_heigh, "position": settings.bar_position
        , "bottom": settings.bar_bottom, "min-width": settings.width
        });

        $(this).find(">li").css({ "width": settings.item_width, "background-color": settings.item_background_color });

        $(this).find(">li>a").mouseover(function () {
            $(this).parent().css({ "background-color": settings.item_background_color_hover });
            var k_ul = $(this).parent().find("ul");
            k_ul.css({ "background-color": settings.item_background_color_hover, "top": $(this).parent().position().top - (k_ul.height()) }).show();
            if (k_ul.width() < $(this).parent().width())
                k_ul.width($(this).parent().width());
        });

        $(this).find(">li").mouseleave(function () {
            $(this).find("ul").hide();
            $(this).css("background-color", settings.item_background_color);
        });
    }
} (jQuery));
