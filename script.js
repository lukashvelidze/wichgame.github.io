const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Load player images
const player1Img = new Image();
player1Img.src = "images/pinkHat.webp";

const player2Img = new Image();
player2Img.src = "images/purpleHat.webp";

let player = {
    x: 50,
    y: 100
};

let comp = {
    x: 50,
    y: 200
};

// Function to draw everything on canvas
function draw() {
    // Clear the canvas for redrawing
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw a divider line
    ctx.fillStyle = "black";
    ctx.fillRect(750, 0, 10, canvas.height);

    // Draw the player and computer images
    ctx.drawImage(player1Img, player.x, player.y);
    ctx.drawImage(player2Img, comp.x, comp.y);
}

// Wait for both images to load before drawing
let imagesLoaded = 0;
function checkImagesLoaded() {
    imagesLoaded++;
    if (imagesLoaded === 2) {
        draw();
    }
}

player1Img.onload = checkImagesLoaded;
player2Img.onload = checkImagesLoaded;

// Set up movement controls
document.onkeyup = function(e) {
    switch (e.key) {
        case "d": // Move right
            player.x += 10;
            break;
        case "a": // Move left
            player.x -= 10;
            break;
        case "w": // Move up
            player.y -= 10;
            break;
        case "s": // Move down
            player.y += 10;
            break;
    }
    draw(); // Redraw canvas after movement
};

// Draw initially when page loads
document.body.onload = function() {
    draw();
};
