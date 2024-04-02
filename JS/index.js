$(function() {
    'use strict';

    //Buttons OF Title
    $('.title .points .left').click(function() {
        $('.title .first').css({
            'transform': 'translate3d(0,0,0)',
            'zIndex': '4'
        })
        $('.title .second').css({
            'transform': 'translate3d(100%,0,0)',
            'zIndex': '-1'
        })
        $('.title .points .right').removeClass('active');
        $(this).addClass('active');

    });
    $('.title .points .right').click(function() {
        $('.title .second').css({
            'transform': 'translate3d(0,0,0)',
            'zIndex': '4'
        })
        $('.title .first').css({
            'transform': 'translate3d(-100%,0,0)',
            'zIndex': '-1'
        })
        $('.title .points .left').removeClass('active');
        $(this).addClass('active');

    });
    $('.main .container > div .bottom').children().css({
        "margin-top": "300px",
        "transition": ".3s",
        "opacity": "0"
    })

    //SweetAlert
    // $('button').click(function() {
    //     Swal.fire(
    //         'Sorry',
    //         'This website is only one page',
    //         'info'
    //     )
    // })
    // $('.portfolio .contain .bottom .box').each(function() {
    //     $(this).click(function() {
    //         Swal.fire(
    //             'Sorry',
    //             'This website is only one page',
    //             'info'
    //         )
    //     })
    // })
    // $('.solution .contain .bottom .box').each(function() {
    //     $(this).click(function() {
    //         Swal.fire(
    //             'Sorry',
    //             'This website is only one page',
    //             'info'
    //         )
    //     })
    // })

    //Header Scrolling
    $(window).scroll(function() {

        if ($(window).scrollTop() > $('.header').offset().top) {
            $('.header .contain').css({
                'backgroundColor': '#fff',
                'box-shadow': 'var(--box-shadow)'
            })
            $('.header .contain .logo .name').css({
                'color': '#111'
            })
            $('.header .contain .tools .tool a').css({
                'color': '#111'
            })
            $('.scroll').fadeIn();
        } else {
            $('.header .contain').css({
                'backgroundColor': 'transparent',
                'box-shadow': 'none'
            })
            $('.header .contain .logo .name').css({
                'color': '#fff'
            })
            $('.header .contain .tools .tool a').css({
                'color': '#fff'
            })
            $('.scroll').fadeOut();
        }
        //Animation Of Element
        if ($(window).scrollTop() > $('.solution').offset().top - 200) {
            $('.main .container .solution .bottom').children().animate({
                marginTop: 0,
                opacity: 1
            }, 10)
        }
        if ($(window).scrollTop() > $('.about').offset().top - 200) {
            $('.main .container .about .bottom').children().animate({
                marginTop: 0,
                opacity: 1
            }, 10)
        }
        if ($(window).scrollTop() > $('.portfolio').offset().top - 200) {
            $('.main .container .portfolio .bottom').children().animate({
                marginTop: 0,
                opacity: 1
            }, 10)
        }
        if ($(window).scrollTop() > $('.price').offset().top - 200) {
            $('.main .container .price .bottom').children().animate({
                marginTop: 0,
                opacity: 1
            }, 10)
        }
        if ($(window).scrollTop() > $('.team').offset().top - 200) {
            $('.main .container .team .bottom').children().animate({
                marginTop: 0,
                opacity: 1
            }, 10)
        }
        if ($(window).scrollTop() > $('.blog').offset().top - 200) {
            $('.main .container .blog .bottom').children().animate({
                marginTop: 0,
                opacity: 1
            }, 10)
        }
        if ($(window).scrollTop() > $('.down').offset().top - 200) {
            $('.main .container .down .bottom').children().animate({
                marginTop: 0,
                opacity: 1
            }, 10)
        }
    })
});

// GET IN TOUCH
const form = document.getElementById('form');
const result = document.getElementById('result');

document.addEventListener("DOMContentLoaded", function() {
    // Add 'animated' class to trigger the animation
    document.querySelector('.title .first').classList.add('animated');
    document.querySelector('.title .second').classList.add('animated');
});


form.addEventListener('submit', function(e) {
  e.preventDefault();
  const formData = new FormData(form);
  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);
  result.innerHTML = "Please wait..."

    fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: json
        })
        .then(async (response) => {
            let json = await response.json();
            if (response.status == 200) {
                result.innerHTML = "Form submitted successfully";
            } else {
                console.log(response);
                result.innerHTML = json.message;
            }
        })
        .catch(error => {
            console.log(error);
            result.innerHTML = "Something went wrong!";
        })
        .then(function() {
            form.reset();
            setTimeout(() => {
                result.style.display = "none";
            }, 3000);
        });
});
