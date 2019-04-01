// By Jazil and Ahmed
// Roadrunner Game

var c = document.getElementById("canvas");
var ctx = c.getContext("2d");

//The light blue color to the left. (Water)
ctx.moveTo(0, 0);
ctx.lineTo(200,0);
ctx.lineTo(200, 600);
ctx.lineTo(0, 600);
ctx.fillStyle = "lightblue";
ctx.fill();
ctx.stroke();
ctx.closePath();

//The road in the middle.
ctx.beginPath();
ctx.moveTo(200, 0);
ctx.lineTo(400, 0);
ctx.lineTo(400, 600);
ctx.lineTo(200, 600);
ctx.fillStyle = "lightgray";
ctx.fill();
ctx.stroke();
ctx.closePath();

//The light blue color on the right. (Water)
ctx.beginPath();
ctx.moveTo(400, 0);
ctx.lineTo(600, 0);
ctx.lineTo(600, 600);
ctx.lineTo(400, 600);
ctx.fillStyle = "lightblue";
ctx.fill();
ctx.stroke();
ctx.closePath();

window.addEventListener("keydown", moveSomething, false);

var pointX = 0;
var pointY = 0;



// Draw Function
function drawRect(x, y, w, h, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, w, h);
}


var blueSquare = drawRect(300, 100, 50, 50, "blue");

var orangeSquare = drawRect(294, 300, 50, 50, "orange");

var redSquare = drawRect(200, 400, 50, 50, "red");


// Circle Function
function drawCircle(x, y, r, color) {
  ctx.beginPath();
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.arc(x, y, r, 0, Math.PI * 2, false);
  ctx.closePath();
  ctx.fill();
}

// This puts the circle on the canvas.
var CircleOnCanvas = function() {
  drawCircle(300 + pointX, 520 + pointY, 40, "black");
}



//Function to move the object.
function moveSomething(e) {
  switch (e.keyCode) {
    case 37:
      //left key pressed
      pointX -= 2;
      break;

    case 38:
      // up key pressed
      pointY -= 2;
      break;

    case 39:
      // right key pressed
      pointX += 2;
      break;

    case 40:
      // down key pressed
      pointY += 2;
      break;

    default:

  }

  e.preventDefault();

  //This puts the circle on the canvas.
  CircleOnCanvas();

  //This puts the rectangle on the canvas.
  // drawRectangle();
}
