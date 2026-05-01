// Reference for screen boundaries: https://www.w3schools.com/jsref/prop_win_innerheight.asp
// https://www.w3schools.com/cssref/css3_pr_backdrop-filter.php


const box = document.getElementById("signin-box");
const handle = document.getElementById("handle");

let isDragging = false;
let offsetX, offsetY;

handle.addEventListener("mousedown", (e) => {
    isDragging = true;
    offsetX = e.clientX - box.offsetLeft;
    offsetY = e.clientY - box.offsetTop;
    handle.style.cursor = "grabbing";
});

document.addEventListener("mousemove", (e) => {
    if (isDragging) {
        // Calculate the new position
        let newX = e.clientX - offsetX;
        let newY = e.clientY - offsetY;

        // Get the screen limits (Window width and height)
        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;

        // Get the box size so we know where the right and bottom edges are
        const boxWidth = box.offsetWidth;
        const boxHeight = box.offsetHeight;
        
        // Left & Right walls
        if (newX < 0) newX = 0;
        if (newX + boxWidth > screenWidth) newX = screenWidth - boxWidth;

        // Top & Bottom walls
        if (newY < 0) newY = 0;
        if (newY + boxHeight > screenHeight) newY = screenHeight - boxHeight;

        // Apply the safe coordinates
        box.style.left = newX + "px";
        box.style.top = newY + "px";
        box.style.margin = "0"; 
    }
});

document.addEventListener("mouseup", () => {
    isDragging = false;
    handle.style.cursor = "grab";
});