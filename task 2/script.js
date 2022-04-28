let canvas = document.getElementById('task_canvas');
let ctx = canvas.getContext('2d');

let drawSquare = () => {
    ctx.beginPath();
    ctx.moveTo(640, 440);
    ctx.lineTo(790, 440);
    ctx.lineTo(790, 590);
    ctx.lineTo(640, 590);
    ctx.lineTo(640, 440);
    ctx.fillStyle = 'red';
    ctx.fill();
    ctx.closePath();
}

let drawRectangle = () => {
    ctx.beginPath();
    ctx.moveTo(10,380);
    ctx.lineTo(160, 380);
    ctx.lineTo(160, 590);
    ctx.lineTo(10, 590);
    ctx.lineTo(10, 380);
    ctx.fillStyle = 'blue';
    ctx.fill();
    ctx.closePath();
}

let drawTriangle = () => {
    ctx.beginPath();
    ctx.moveTo(640,160);
    ctx.lineTo(715, 10);
    ctx.lineTo(790, 160);
    ctx.lineTo(640, 160);
    ctx.fillStyle = 'violet';
    ctx.fill();
    ctx.closePath();
}

let drawCircle = () => {
    ctx.beginPath();
    ctx.arc(85,85,75,0, 2*Math.PI,true);
    ctx.fillStyle = 'black';
    ctx.fill();
    ctx.closePath();
}

let clearCanvas = () => {
    ctx.clearRect(0, 0, 800, 600);
}