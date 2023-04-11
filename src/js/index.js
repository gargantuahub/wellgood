import $ from 'jquery'
import Swiper, { Navigation, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import '../scss/styles.scss'

const swiper = new Swiper('.swiper', {
    modules: [Navigation, Pagination],

    direction: 'horizontal',
    loop: true,

    pagination: {
        el: '.swiper-pagination'
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

$(document).ready(function() {

    $(".navbar-burger").click(function() {

        $(".navbar-burger").toggleClass("is-active");
        $(".navbar-menu").toggleClass("is-active");

    });
});