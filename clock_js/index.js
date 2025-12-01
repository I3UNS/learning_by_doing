// 2pi = 360 degrees
// pi = 180 degrees

let width = 500;
let height = width;
let radius = width/2;

let canvas;
let context;
let digitalCanvas;

window.onload = function(){
    
    //Analog Clock
    canvas = document.getElementById("clock");
    canvas.width = width;
    canvas.height = height;
    context = canvas.getContext("2d");

    //Digital Clock
    digitalCanvas = document.getElementById("digital-clock");
    digitalCanvas.width = width;
    digitalCanvas.height = height/4;

    context.translate(radius, radius);
    radius *= 0.9;
    drawClock();
    drawDigitalClock();
}

function drawClock(){
    drawFace();
    drawNumbers();
    drawTime();
    setTimeout(drawClock, 1000); //Function is being recalled every second. 1000ms = 1s
}

function drawFace(){
    context.beginPath();
    context.arc(0, 0, radius, 0, 2*Math.PI);

    context.strokeStyle = "black";
    context.lineWidth = radius*0.1;
    context.stroke();

    context.fillStyle = "whitesmoke";
    context.fill();
}

function drawNumbers(){
    context.font = `${radius*0.2}px times new roman`;
    context.textBaseline = "middle";
    context.textAlign = "center";
    context.fillStyle = "black";
    
    for (let num = 1; num <= 12; num++){
        
        let angle = num * Math.PI / 6;
        context.rotate(angle);
        context.translate(0, -radius*0.85);
        context.rotate(-angle);
        
        context.fillText(num.toString(), 0, 0);
        
        context.rotate(angle);
        context.translate(0, radius*0.85);
        context.rotate(-angle);
    }
}

function drawTime(){

    let now = new Date;
    let hour = now.getHours() % 12;
    let minute = now.getMinutes();
    let second = now.getSeconds();

    //Analog Clock Format
    let secondAngle = second * Math.PI/30; //60 seconds * PI/30 = 2*PI

    context.strokeStyle = "red";
    drawHand(secondAngle, radius*0.70, radius*0.01);

    let minuteAngle = minute * Math.PI/30; //60 minutes * PI/30 = 2*PI
    context.strokeStyle = "black";
    drawHand(minuteAngle, radius*0.70, radius*0.01);

    let hourAngle = hour * Math.PI/6; //12 hours * PI/6 = 2*PI
    hourAngle += minuteAngle/12;
    context.strokeStyle = "black";
    drawHand(hourAngle, radius*0.60, radius*0.02);

    context.beginPath();
    context.arc(0,0, radius*0.03, 0, 2*Math.PI);
    context.fillStyle = "black";
    context.fill();
}

function drawHand(angle, length, width){
    context.beginPath();
    context.lineWidth = width;
    context.lineCap = "round";

    context.moveTo(0,0);
    context.rotate(angle);
    context.lineTo(0, -length);

    context.stroke();
    context.rotate(-angle);

}

function drawDigitalClock(){
    const div = document.createElement("p");
    const divContent = document.createTextNode("HI");

    div.append(divContent);

    const currDiv = document.getElementById("digital-clock");
    document.body.insertBefore(div, currDiv);
}