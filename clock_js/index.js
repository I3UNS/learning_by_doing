// 2pi = 360 degrees
// pi = 180 degrees

let width = 500;
let height = width;
let radius = width/2;

let canvas;
let context;

window.onload = function(){
    canvas = document.getElementById("canvas");
    canvas.width = width;
    canvas.height = height;
    context = canvas.getContext("2d");

    context.translate(radius, radius);
    drawClock();
}

function drawClock(){
    drawFace();
}

function drawFace(){
    context.beginPath();
    context.arc(0, 0, radius, 0, 2*Math.PI);

    context.strokeStyle = "#058743";
    context.lineWidth = radius*0.1;
    context.stroke();
}

