$(document).ready(function () {

    //Esconde los artistas 2016
    $("#artistas-2016").hide();
    //Si se hace click en 'Artistas' aparecen los artistas 2016:
    $("#boton-artistas").click(function () {
        $("#artistas-2016").slideToggle(500);
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