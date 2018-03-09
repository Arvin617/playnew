$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        items: 1,/*显示图片数*/
        loop: true,
        autoplay: true,
        autoplayTimeout: 1000,
        autoplayHoverPause: true/*鼠标悬浮停止滚动*/
    });
});