$(function() {
    $("a").on('click', function(event) {

        if (this.hash !== "") {
            event.preventDefault();


            $('html, body').animate({
                scrollTop: $(this.hash).offset().top + 2
            }, 700, function() {});

        }
    });

    $('#downArrow').on('mouseenter', function() {
        $(this).fadeOut('slow');
        $(this).fadeIn('slow');
    }, );
    var stickyNavTop = $('.nav-bar').offset().top;

    var stickyNav = function() {
        var scrollTop = $(window).scrollTop();
        if (scrollTop > stickyNavTop) {
            $('.nav-bar').addClass('sticky');
        } else {
            $('.nav-bar').removeClass('sticky');
        }
    };

    stickyNav();
    $(window).scroll(function() {
        stickyNav();
    });
});