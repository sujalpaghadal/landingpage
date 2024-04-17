$(document).ready(function () {
    $(".mobilenavigation").hide()
    $(".toggle").click(function () {
        $(".mobilenavigation").slideToggle()
    })
    
    $('#slider1').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        navText: ["<i class='fa-solid fa-chevron-left'></i>", "<i class='fa-solid fa-chevron-right'></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 3
            }
        }
    })
    $('#slider2').owlCarousel({
        loop: true,
        margin: 25,
        nav: true,
        navText: ["<i class='fa-solid fa-chevron-left'></i>", "<i class='fa-solid fa-chevron-right'></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 2
            }
        }
    })
})

$(window).scroll(function () {
    if ($(window).scrollTop() > 170) {
        $(".main").addClass("scrollmainfix")
    }
    else {
        $(".main").removeClass("scrollmainfix")
    }
})
