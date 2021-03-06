﻿/*!
* Keleyi(jQuery Menu)
* version: 0.1.9
* Copyright (c) 2013 KeLeyi
* http://keleyi.com
* http://keleyi.com/keleyi/
*/
(function ($) {
    $.fn.keleyi = function (options) {

        var settings = $.extend({
            width: '986px',
            margin: '0px auto',
            isAutoAddTriangle: true,
            item_background_color_hover: '#005500',
            item_background_color: 'transparent',
            item_width: 'auto',
            item_margin: '0px 0px 0px 10px',
            bar_height: 'auto',
            bar_position: 'fixed',
            bar_background_color: "#008000",
            bar_bottom: "0px",
            mainItem_color: "white",
            subItem_color: "white",
            subMenuShowWay: "show",
            subMenuShowSpeed: 0
        }, options);

        $(this).addClass("keleyi-menu");
        $(this).css({ "width": settings.width, "margin": settings.margin });

        $(this).wrap("<div class='keleyi-menubar'></div>");
        var k_bar = $(this).parent();
        k_bar.css({ "background-color": settings.bar_background_color
        , "height": settings.bar_height, "position": settings.bar_position
        , "bottom": settings.bar_bottom, "min-width": settings.width
        });

        if (! -[1, ] && !window.XMLHttpRequest) {
            if (k_bar.css("position") == "fixed") {
                ie6FixedBottom(k_bar, settings.bar_bottom);
            }
            $(this).find("ul li a").css({ "height": "1%" });
        }

        k_bar.append("<div style='width:100%;clear:both;height:0px;overflow:hidden'></div>");

        $(this).find(">li").css({ "width": settings.item_width, "background-color": settings.item_background_color, "margin": settings.item_margin
        , "padding": "0px", "white-space": "nowrap", "height": "20px", "float": "left", "text-align": "center"
        , "display": "inline-block", "position": "relative"
        });

        $(this).find(">li a").css({ "color": "white", "line-height": "20px"
        , "display": "block", "font-size": "14px"
        });


        if (settings.isAutoAddTriangle)
            $(this).find(">li").has('ul').find("a:first").append("<b></b>");

        $(this).find(">li").find("a:first").css({ "width": "100%", "overflow": "hidden", "color": settings.mainItem_color });
        $(this).find(">li").find("b").css({ "border-color": ("transparent transparent " + settings.mainItem_color) })


        $(this).find(">li ul").css({ "padding": "0px", "list-style-type": "none"
        , "background-color": "transparent", "position": "absolute", "display": "none"
        });

        $(this).find(">li").find("li a").css({ "color": settings.subItem_color });

        $(this).find(">li").has("ul").each(function () {
            var k_ul = $(this).find("ul");
            k_ul.css({ "background-color": settings.item_background_color_hover, "top": $(this).position().top - (k_ul.height())
                , "left": "0px", "margin": "0px"
            });
            if (k_ul.width() < $(this).width())
                k_ul.width($(this).width());
        });

        var k_subMenuShowWay = settings.subMenuShowWay.toLowerCase();
        $(this).find(">li>a").mouseover(function () {
            $(this).parent().css({ "background-color": settings.item_background_color_hover });
            var k_ul = $(this).parent().find("ul");
            if (k_ul.length < 1)
                return;

            switch (k_subMenuShowWay) {
                case "show":
                    k_ul.show(settings.subMenuShowSpeed);
                    break;
                case "fadein":
                    k_ul.fadeIn(settings.subMenuShowSpeed);
                    break;
                case "slidedown":
                    k_ul.slideDown(settings.subMenuShowSpeed);
                    break;
            }
        });

        $(this).find(">li").mouseleave(function () {
            $(this).css("background-color", settings.item_background_color);
            var k_ul = $(this).find("ul");
            if (k_ul.length < 1)
                return;
            switch (k_subMenuShowWay) {
                case "show":
                    k_ul.hide(settings.subMenuShowSpeed);
                    break;
                case "fadein":
                    k_ul.fadeOut(settings.subMenuShowSpeed);
                    break;
                case "slidedown":
                    k_ul.slideUp(settings.subMenuShowSpeed);
                    break;
            }

        });

        function ie6FixedBottom(fixedobj, bottommargin) {
            fixedobj.css({ "position": "absolute" });
            var k_bm = new Number;
            k_bm = Number(bottommargin.substring(0, bottommargin.length - 2));
            var obj = fixedobj[0];
            function setStyleTop() {
                obj.style.top = document.documentElement.scrollTop + document.documentElement.clientHeight
                - obj.offsetHeight - (parseInt(obj.currentStyle.marginTop, 0) || k_bm) - (parseInt(obj.currentStyle.marginBottom, 0) || k_bm)
            }
            window.onscroll = function () { setStyleTop(); }
            window.onresize = function () { setStyleTop(); }
        }

    }
} (jQuery));