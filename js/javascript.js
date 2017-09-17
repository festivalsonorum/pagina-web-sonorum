$(document).ready(function () {
    //Toogles de +info de artistas:
    $("#infoMakam").hide(); //Primero los esconde.
    $("#idMakam").click(function(){
        $("#infoMakam").slideToggle(200);
    });

    $("#infoKK").hide();
    $("#klikfrik").click(function(){
        $("#infoKK").slideToggle(200);
    });
});