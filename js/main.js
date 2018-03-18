$(document).ready(function () {
        $("#about").click(
            function () {
                $('html, body').animate({scrollTop: '500px'}, 800);
            });
        $("#galery").click(
            function () {
                $('html, body').animate({scrollTop: '700px'}, 800);
            });
        $("#rules").click(
            function () {
                $('html, body').animate({scrollTop: '1000px'}, 800);
            });
        $("#contacts").click(
            function () {
                $('html, body').animate({scrollTop: '1700px'}, 800);
            });
        $(".gallerybox").click(
            function (e) {
                var ob = $(this)
                $('#overlay').fadeIn(400, // сначала плавно показываем темную подложку
                    function () { // после выполнения предъидущей анимации
                        ob
                            .css('display', 'block') // убираем у модального окна display: none;
                            .css("width", "50%")
                            .css("left", "20%")
                            .css("position", "fixed")
                            .css("z-index", 4)
                            .animate({opacity: 1, top: '15%'}, 400);
                    });
                $('#overlay').click(function () { // ловим клик по крестику или подложке
                    ob
                        .animate({opacity: 0, top: '45%'}, 200,  // плавно меняем прозрачность на 0 и одновременно двигаем окно вверх
                            function () { // после анимации
                                ob.css('display', 'block') // убираем у модального окна display: none;
                                    .css("width", "16%")
                                    .css("left", "0")
                                    .css("opacity", "1")
                                    .css("position", "inherit")
                                    .css("z-index", 0);
                                $('#overlay').fadeOut(400); // скрываем подложку
                            }
                        );
                });
            }
        )
    }
);
jQuery(document).ready(function ($) {
    var jssor_1_options = {
        $FillMode: 1,
        $AutoPlay: true,

        $ThumbnailNavigatorOptions: {
            $Class: $JssorThumbnailNavigator$,
            $Cols: 5,
            $SpacingX: 1,
            $SpacingY: 1,
            $Align: 0,
            $NoDrag: true
        }
    };

    var jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);
    function ScaleSlider() {
        var refSize = jssor_1_slider.$Elmt.parentNode.clientWidth;
        if (refSize) {
            refSize = Math.min(refSize, 1920);
            jssor_1_slider.$ScaleWidth(refSize);
        }
        else {
            window.setTimeout(ScaleSlider, 30);
        }
    }

    ScaleSlider();
    $(window).bind("load", ScaleSlider);
    $(window).bind("resize", ScaleSlider);
    $(window).bind("orientationchange", ScaleSlider);
});