$(document).ready(function() {
    AOS.init();

    var inicio = $('#inicio').offset().top,
        sobreNosotros = $('#sobre-nosotros').offset().top,
        servicios = $('#servicios').offset().top,
        portafolio = $('#portafolio').offset().top,
        contacto = $('#contacto').offset().top;

    $('#btn-inicio').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: inicio
        }, 500);
    });

    $('#btn-sobre-nosotros').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: sobreNosotros
        }, 500);
    });

    $('#btn-servicios').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: servicios
        }, 500);
    });

    $('#btn-portafolio').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: portafolio
        }, 500);
    });
    $('#btn-contacto').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: contacto
        }, 500);
    });
    /* para arriba */
    $('.ir-arriba').on('click', function() {
        $('html, body').animate({
            scrollTop: '0'
        }, 300);
    });
});


