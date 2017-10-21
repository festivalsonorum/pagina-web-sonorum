//Sketch del logo animado en p5.js

var xspacing = 5;    // Distance between each horizontal location
var w;                // Width of entire wave
var theta = 0.0;      // Start angle at 0
var amplitude = 75.0; // Height of wave
var period = 400.0;   // How many pixels before the wave repeats
var dx;               // Value for incrementing x
var yvalues;  // Using an array to store height values for the wave

var xspacing2 = 5;    // Distance between each horizontal location
var w2;                // Width of entire wave
var theta2 = 0.0;      // Start angle at 0
var amplitude2 = 75.0; // Height of wave
var period2 = 200.0;   // How many pixels before the wave repeats
var dx2;               // Value for incrementing x
var yvalues2;  // Using an array to store height values for the wave

var tamanoElipse = 13; //Tamaño de la elipse
var alphaElipse = 44;

function preload() {
  imgLogo = loadImage("js/p5js/data/logo-sonorum.png");
}

function setup() {
  var cnv = createCanvas(windowWidth, 176);
  cnv.parent("p5");

  w = width+16;
  dx = (TWO_PI / period) * xspacing;
  yvalues = new Array(floor(w/xspacing));

  w2 = width+16;
  dx2 = (TWO_PI / period2) * xspacing2;
  yvalues2 = new Array(floor(w2/xspacing2));
}

function draw() {
  background(210, 210, 210);

  calcWave();
  renderWave();

  calcWave2();
  renderWave2();
  image(imgLogo, 0, 0, 761, 176);


  var mapMouseX = map(mouseX, 0, windowWidth, 6, 8);
  var mapMouseY= map(mouseX, 0, 75, 5, 8);
  //xspacing = mapMouseX;
  xspacing2 = mapMouseX;

  amplitude = mapMouseY;
}

function windowResized() {
  resizeCanvas(windowWidth, 176);
}


function calcWave() {
  // Increment theta (try different values for 
  // 'angular velocity' here)
  theta += 0.01;

  // For every x value, calculate a y value with sine function
  var x = theta;
  for (var i = 0; i < yvalues.length; i++) {
    yvalues[i] = sin(x)*amplitude+noise(x)*2;
    x+=dx;
  }
}

function renderWave() {
  noStroke();
  fill(91, 43, 63, alphaElipse);
  // A simple way to draw the wave with an ellipse at each location
  for (var x = 0; x < yvalues.length; x++) {
    ellipse(x*xspacing, height/2+yvalues[x], tamanoElipse, tamanoElipse);
  }
}

function calcWave2() {
  // Increment theta (try different values for 
  // 'angular velocity' here)
  theta2 += 0.01;

  // For every x value, calculate a y value with sine function
  var x = theta2;
  for (var i = 0; i < yvalues2.length; i++) {
    yvalues2[i] = sin(x)*amplitude2+noise(x)*2;
    x+=dx2;
  }
}

function renderWave2() {
  noStroke();
  fill(255, 55, 75, alphaElipse);
  // A simple way to draw the wave with an ellipse at each location
  for (var x = 0; x < yvalues2.length; x++) {
    ellipse(x*xspacing2, height/2+yvalues2[x], tamanoElipse, tamanoElipse);
  }
}