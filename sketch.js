var axes = new Axes()
var knob = new Knob( 200, 400, 100, 100)
var circ = new UnitCircle(axes) 
var ms = new MovingSinewave(axes, 1);
var currentTheta;
function setup() {
  createCanvas(1080, 720);
  axes.setLocation(100,100);
  axes.setSize(width/2, height/2);
  axes.setXLimits(-185, 185)
  axes.setYLimits(-1.1, 1.1)
  axes.setTickSizes(60, 0.5);
  circ.resetAxes(axes);
  ms.getValues();
  // p1 = createP("Theta is" + currentTheta)
}

function draw() {
  background(255);

  knob.show();
  knob.update();  
  currentTheta = knob.getTheta();

  axes.show();
  axes.showTicks();
  ms.show();

  circ.setTheta(currentTheta);
  circ.show();
  shiftOrigin();
  // axes.setOrigin(mouseX, axes.origin[1])
  // p1.html("Theta is" + circ.theta)
}


function shiftOrigin(){
  var c = circ.centreX;
  var r = circ.radiusInPixels;
  delThetaInPixels = axes.XAxesToPixels(currentTheta) - axes.origin[0];
  axes.setOrigin(c + r*cos(radians(currentTheta)) - delThetaInPixels, axes.origin[1]);

}