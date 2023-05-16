$(function () {
    $("#inputcheckin").datepicker();
    $("#inputcheckout").datepicker();

    $('.level-slider').slick({
        dots: true,
        autoplay: true,
        arrows: false,
        autoplaySpeed: 3000,
    });

    function videoToggle() {
        video = $('.level-video').get(0)
        if (video.paused) {
            video.play();
            $('.video-control-play').hide();
            $('.video-control-pause').show();

        } else {
            video.pause();
            $('.video-control-play').show();
            $('.video-control-pause').hide();
        }
    }

    $('.video-control-play').click(function () {
        videoToggle();
    })
    $('.video-control-pause').click(function () {
        videoToggle();
    })


});

