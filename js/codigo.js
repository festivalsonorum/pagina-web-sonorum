$(document).ready(function () {

    //Esconde los artistas 2016
    $("#artistas-2016").hide();

    //Si se hace click en 'Artistas' aparecen los artistas 2016:
    $("#boton-artistas").click(function () {
        $("#artistas-2016").slideToggle(500);
    });

    $(".ocultar").click(function(){
        $("#daed").hide();
        $("#free").hide();
        $("#mono").hide();
        $("#andy").hide();
        $("#franco").hide();
        $("#durango").hide();
        $("#jerry").hide();
        $("#clean").hide();
        $("#inter").hide();
    });

    $("#daed").hide();
    $("#free").hide();
    $("#mono").hide();
    $("#andy").hide();
    $("#franco").hide();
    $("#durango").hide();
    $("#jerry").hide();
    $("#clean").hide();
    $("#inter").hide();

    $("#cdaed").click(function () {
        $("#daed").slideToggle(200);
        
        $('html, body').animate({
            scrollTop: $("#lineupDiv").offset().top
        }, 500);
        $("#free").hide();
        $("#mono").hide();
        $("#andy").hide();
        $("#franco").hide();
        $("#durango").hide();
        $("#jerry").hide();
        $("#clean").hide();
        $("#inter").hide();
    });

    $("#cfree").click(function () {
        $("#free").slideToggle(200);
        $('html, body').animate({
            scrollTop: $("#lineupDiv").offset().top
        }, 500);
        $("#daed").hide();
        // $("#free").hide();
        $("#mono").hide();
        $("#andy").hide();
        $("#franco").hide();
        $("#durango").hide();
        $("#jerry").hide();
        $("#clean").hide();
        $("#inter").hide();
    });
    $("#cmono").click(function () {
        $("#mono").slideToggle(200);
        $('html, body').animate({
            scrollTop: $("#lineupDiv").offset().top
        }, 500);
        $("#daed").hide();
        $("#free").hide();
        // $("#mono").hide();
        $("#andy").hide();
        $("#franco").hide();
        $("#durango").hide();
        $("#jerry").hide();
        $("#clean").hide();
        $("#inter").hide();

        
    });
    $("#candy").click(function () {
        $("#andy").slideToggle(200);
        $('html, body').animate({
            scrollTop: $("#lineupDiv").offset().top
        }, 500);
        $("#daed").hide();
        $("#free").hide();
        $("#mono").hide();
        // $("#andy").hide();
        $("#franco").hide();
        $("#durango").hide();
        $("#jerry").hide();
        $("#clean").hide();
        $("#inter").hide();
    });
    $("#cfranco").click(function () {
        $("#franco").slideToggle(200);
        $('html, body').animate({
            scrollTop: $("#lineupDiv").offset().top
        }, 500);
        $("#daed").hide();
        $("#free").hide();
        $("#mono").hide();
        $("#andy").hide();
        // $("#franco").hide();
        $("#durango").hide();
        $("#jerry").hide();
        $("#clean").hide();
        $("#inter").hide();
    });
    $("#cdurango").click(function () {
        $("#durango").slideToggle(200);
        $('html, body').animate({
            scrollTop: $("#lineupDiv").offset().top
        }, 500);
        $("#daed").hide();
        $("#free").hide();
        $("#mono").hide();
        $("#andy").hide();
        $("#franco").hide();
        // $("#durango").hide();
        $("#jerry").hide();
        $("#clean").hide();
        $("#inter").hide();
    });
    $("#cjerry").click(function () {
        $("#jerry").slideToggle(200);
        $('html, body').animate({
            scrollTop: $("#lineupDiv").offset().top
        }, 500);
        $("#daed").hide();
        $("#free").hide();
        $("#mono").hide();
        $("#andy").hide();
        $("#franco").hide();
        $("#durango").hide();
        // $("#jerry").hide();
        $("#clean").hide();
        $("#inter").hide();
    });
    $("#cclean").click(function () {
        $("#clean").slideToggle(200);
        $('html, body').animate({
            scrollTop: $("#lineupDiv").offset().top
        }, 500);
        $("#daed").hide();
        $("#free").hide();
        $("#mono").hide();
        $("#andy").hide();
        $("#franco").hide();
        $("#durango").hide();
        $("#jerry").hide();
        // $("#clean").hide();
        $("#inter").hide();
    });
    $("#cinter").click(function () {
        $("#inter").slideToggle(200);

        $('html, body').animate({
            scrollTop: $("#lineupDiv").offset().top
        }, 500);
        $("#daed").hide();
        $("#free").hide();
        $("#mono").hide();
        $("#andy").hide();
        $("#franco").hide();
        $("#durango").hide();
        $("#jerry").hide();
        $("#clean").hide();
        // $("#inter").hide();
    });

    //Magnific-Popup
    $('.image-link').magnificPopup({ type: 'image' });

    $('.t-1').magnificPopup({
        type: 'image'
        // other options
    });
    $('.t-2').magnificPopup({
        type: 'image'
        // other options
    });
    $('.t-3').magnificPopup({
        type: 'image'
        // other options
    });
    $('.t-4').magnificPopup({
        type: 'image'
        // other options
    });
    $('.t-5').magnificPopup({
        type: 'image'
        // other options
    });
    $('.t-6').magnificPopup({
        type: 'image'
        // other options
    });
    $('.t-7').magnificPopup({
        type: 'image'
        // other options
    });
    $('.t-8').magnificPopup({
        type: 'image'
        // other options
    });



    /*
    //Toogles de +info de artistas:

    $("#infoMakam").hide(); //Primero los esconde.
    $("#idMakam").click(function(){
        $("#infoMakam").slideToggle(200);
    });

    $("#infoKK").hide();
    $("#klikfrik").click(function(){
        $("#infoKK").slideToggle(200);
    });
    */

    $('[data-toggle="tooltip"]').tooltip();


});


/*El JS de afuera de jQuery*/

//El motor mamalón del menú sidebar - INICIO
/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
    //El moto mamalón del menú sidebar - FIN