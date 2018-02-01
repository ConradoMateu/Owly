function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 59.33501709, lng: 18.07079315},
        zoom: 16
    });
}

$(document).ready(function() {

    var nav_menu = $('.nav-menu');
    var nav_menu_wrap = $('.nav-menu-wrap');
    var nav_menu_background = $('.nav-menu-background');

    function toggle_menu() {
        nav_menu_wrap.toggleClass('active');
        nav_menu_background.toggleClass('active');
    }

    $('.nav-menu-toggle, .nav-menu-background, .nav-menu .close').on('click', function() {
        toggle_menu();
    });



});