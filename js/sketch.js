var ancho = window.innerWidth - 17;
var altura = 150;

var fuente;

function preload() {
    fuente = loadFont("js/OpenSans-Regular.ttf");
}

function setup() {
    var cnv = createCanvas(ancho, altura); //El -17 es para que se acomode bien al ancho de la pantalla
    cnv.parent("p5");

    frameRate(24);

    smooth();
    textFont(fuente);
    textSize(200);
    textAlign(CENTER);

}

function draw() {
    background(255);
    var mausX = map(mouseX, 0, 50, 0, 50);
    textSize(mausX);
    fill(0);
    text("algo interactivo", ancho / 2, (altura / 2) + 40);
}