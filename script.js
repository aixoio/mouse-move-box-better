var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var boxs = [];
var colors = [
  'rgba(255, 0, 0, 0.5)',
  'rgba(0, 255, 0, 0.5)',
  'rgba(0, 0, 255, 0.5)',
];
var colorsMouse = [
  'rgba(255, 0, 0, 0.3)',
  'rgba(0, 255, 0, 0.3)',
  'rgba(0, 0, 255, 0.3)',
];
let mx = 0;
let my = 0;
var color = 1;
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
document.body.onmousemove = function (event) {
  mx = event.clientX;
  my = event.clientY;
  draw();
};
document.body.onmousedown = function (event) {
  boxs.push({
    x: event.clientX,
    y: event.clientY,
    width: 100,
    height: 100,
    color: colors[color],
  });
};
document.onkeydown = function (event) {
  if (event.keyCode == 82) {
    // r
    color = 0;
  } else if (event.keyCode == 71) {
    // g
    color = 1;
  } else if (event.keyCode == 66) {
    // b
    color = 2;
  } else if (event.keyCode == 32) {
    // space
    boxs = [];
  }
  draw();
};
function draw() {
  context.fillStyle = '#ffffff';
  context.fillRect(0, 0, canvas.width, canvas.height);
  context.fillStyle = colorsMouse[color];
  context.fillRect(mx, my, 100, 100);
  for (let i = 0; i < boxs.length; i++) {
    context.fillStyle = boxs[i].color;
    context.fillRect(boxs[i].x, boxs[i].y, boxs[i].width, boxs[i].height);
  }
}
