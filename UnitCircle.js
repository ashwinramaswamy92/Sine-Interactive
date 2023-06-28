class UnitCircle {
    constructor(theAxes) {
        this.theta = 30;
        this.axes = theAxes;
        this.radiusInPixels = (axes.origin[1] - axes.YAxesToPixels(1));
        this.centreX = this.axes.origin[0];
        this.centreY = this.axes.origin[1];
    }

    resetAxes(theAxes){
        this.axes = theAxes
        this.centreX = this.axes.origin[0];
        this.centreY = this.axes.origin[1];
        this.radiusInPixels = (axes.origin[1] - axes.YAxesToPixels(1));
    }

    setTheta(theta_){
        this.theta = theta_;
    }

    show(){
        this.showCircle();
        this.showAngle();
        this.highlightPoint();
        this.highlightY();

    }
    showCircle(){
        noFill();
        strokeWeight(1);
        stroke(120);
        ellipse(this.centreX, this.centreY, 2*this.radiusInPixels, 2*this.radiusInPixels)
    }

    showAngle(){
        line(this.centreX, this.centreY, this.centreX + this.radiusInPixels * cos(radians(this.theta)),
        this.centreY - this.radiusInPixels * (sin(radians(this.theta))))
    }
    highlightPoint(){
        stroke(255, 0, 0);
        ellipse(this.centreX + this.radiusInPixels * cos(radians(this.theta)),
        this.centreY - this.radiusInPixels * (sin(radians(this.theta))), 5, 5)
    }
    highlightY(){
        strokeWeight(5);
        stroke(255, 0, 0);
        line(this.centreX + this.radiusInPixels * cos(radians(this.theta)),
        this.centreY - this.radiusInPixels * (sin(radians(this.theta))), 
        this.centreX + this.radiusInPixels * cos(radians(this.theta)), this.centreY)
    }

}