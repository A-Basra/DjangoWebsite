// Get the canvas element
var canvas = document.getElementById("constellation");

// Get the canvas context
var ctx = canvas.getContext("2d");

canvas.width = window.innerWidth
canvas.height = window.innerHeight

// Set the background color
ctx.fillStyle = "#202124";
ctx.fillRect(0, 0, canvas.width, canvas.height);

// Create an empty array to hold the stars
var stars = [];

// Set the number of stars to generate
var numStars = 500;

// Set the minimum distance between stars
var minDistance = 35;

// Generate random star coordinates
for (var i = 0; i < numStars; i++) {
    var x = Math.random() * canvas.width;
    var y = Math.random() * canvas.height;
    var newStar = [x, y];

    // Check if the new star is too close to any existing stars
    var tooClose = false;
    for (var j = 0; j < stars.length; j++) {
        var distance = getDistance(newStar, stars[j]);
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
for (var i = 0; i < stars.length; i++) {
    ctx.beginPath();
    ctx.arc(stars[i][0], stars[i][1], 2, 0, 2 * Math.PI);
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
}


// Function to calculate the distance between two points
function getDistance(star1, star2) {
    var xDistance = star1[0] - star2[0];
    var yDistance = star1[1] - star2[1];
    return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
}
