class MovingSinewave{
    constructor(theAxes, sizeFactor){
        this.axes = theAxes;
        this.lowLimit = -185; //Need to generalise this after rewriting Axes class to return limits
        this.highLimit = 185; //Need to generalise this after rewriting Axes class to return limits
        this.arraySize = (this.highLimit - this.lowLimit) * sizeFactor;
        this.xValues = new Array(this.arraySize);
        this.yValues = new Array(this.arraySize);


    }
    getValues(){
        for(let i = 0; i< this.arraySize; i++){
            this.xValues[i] = this.lowLimit + (this.highLimit - this.lowLimit)/this.arraySize*i
            this.yValues[i] = sin(radians(this.xValues[i]))
        }
    }


    show(){
        stroke(150);
        for(let i = 0; i< this.arraySize; i++){
            ellipse(axes.XAxesToPixels(this.xValues[i]), axes.YAxesToPixels(this.yValues[i]), 1, 1)
        }

    }

}