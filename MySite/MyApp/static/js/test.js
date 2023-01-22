// Get the canvas element
var canvas = document.getElementById("test");

// Get the canvas context
var ctx = canvas.getContext("2d");

canvas.width = window.innerWidth
canvas.height = window.innerHeight

// Set the background color
ctx.fillStyle = "white";
ctx.fillRect(0, 0, canvas.width, canvas.height);

// Create an empty array to hold the stars
var stars = [];

// Set the number of stars to generate
var numStars = 100;

// Set the minimum distance between stars
var minDistance = 30;

canvas.addEventListener("click", function (event) {
  var x = event.clientX;
  var y = event.clientY;

  var dx = (Math.random() - 0.5) * 3; // random horizontal speed
  var dy = (Math.random() - 0.5) * 3; // random vertical speed
  var newStar = { x: x, y: y, dx: dx, dy: dy };
  var newStar2 = { x: x, y: y, dx: dx, dy: dy };
  var newStar3 = { x: x, y: y, dx: dx, dy: dy };
  stars.push(newStar, newStar2, newStar3);
})

// Generate random star coordinates and speeds
for (var i = 0; i < numStars; i++) {
  var x = Math.random() * canvas.width;
  var y = Math.random() * canvas.height;
  var dx = (Math.random() - 0.5) * 3; // random horizontal speed
  var dy = (Math.random() - 0.5) * 3; // random vertical speed
  var newStar = { x: x, y: y, dx: dx, dy: dy };

  // Check if the new star is too close to any existing stars
  var tooClose = false;
  for (var j = 0; j < stars.length; j++) {
    var distance = getDistance({ x: x, y: y }, { x: stars[j].x, y: stars[j].y });
    if (distance < minDistance) {
      tooClose = true;
      break;
    }
  }

  // If the new star is not too close to any existing stars, add it to the array
  if (!tooClose) {
    stars.push(newStar);
  }
}

// Draw the stars
function draw() {
  ctx.fillStyle = "#202124";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  for (var i = 0; i < stars.length; i++) {
    ctx.beginPath();
    ctx.arc(stars[i].x, stars[i].y, 5, 0, 2 * Math.PI);
    ctx.fillStyle = "#35363A";
    ctx.fill();
  }
  // Connect the closest stars
  for (var i = 0; i < stars.length; i++) {
    for (var j = i + 1; j < stars.length; j++) {
      var distance = getDistance(stars[i], stars[j]);
      if (distance < 100) {
        ctx.beginPath();
        ctx.moveTo(stars[i][0], stars[i][1]);
        ctx.lineTo(stars[j][0], stars[j][1]);
        ctx.strokeStyle = "#35363A";
        ctx.stroke();
      }
    }


    // Update the star's position
    stars[i].x += stars[i].dx;
    stars[i].y += stars[i].dy;

    // Check if the star has gone off the canvas
    if (stars[i].x < 0 || stars[i].x > canvas.width) {
      stars[i].dx = -stars[i].dx;
    }
    if (stars[i].y < 0 || stars[i].y > canvas.height) {
      stars[i].dy = -stars[i].dy;
    }
  }
  for (var i = 0; i < stars.length; i++) {
    for (var j = i + 1; j < stars.length; j++) {
      var distance = getDistance(stars[i], stars[j]);
      if (distance < 100) {
        ctx.beginPath();
        ctx.moveTo(stars[i][0], stars[i][1]);
        ctx.lineTo(stars[j][0], stars[j][1]);
        ctx.strokeStyle = "white";
        ctx.stroke();
      }
    }
  }

  // Repeat the animation
  requestAnimationFrame(draw);
}
function getDistance(star1, star2) {
  var xDistance = star1[0] - star2[0];
  var yDistance = star1[1] - star2[1];
  return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
}

draw();

