// Draggable logic with boundaries: https://www.w3schools.com/howto/howto_js_draggable.asp

const box = document.getElementById("signin-box");
const handle = document.getElementById("handle");

let isDragging = false;
let offsetX, offsetY;

handle.addEventListener("mousedown", (e) => {
    isDragging = true;
    // Find where the mouse is relative to the box
    offsetX = e.clientX - box.offsetLeft;
    offsetY = e.clientY - box.offsetTop;
    handle.style.cursor = "grabbing";
});

document.addEventListener("mousemove", (e) => {
    if (isDragging) {
        let newX = e.clientX - offsetX;
        let newY = e.clientY - offsetY;

        // Screen and Box dimensions
        const screenW = window.innerWidth;
        const screenH = window.innerHeight;
        const boxW = box.offsetWidth;
        const boxH = box.offsetHeight;

        // STOP box from going off screen
        if (newX < 0) newX = 0; // Left wall
        if (newY < 0) newY = 0; // Top wall
        if (newX + boxW > screenW) newX = screenW - boxW; // Right wall
        if (newY + boxH > screenH) newY = screenH - boxH; // Bottom wall

        box.style.left = newX + "px";
        box.style.top = newY + "px";
        box.style.margin = "0"; 
    }
});

document.addEventListener("mouseup", () => {
    isDragging = false;
    handle.style.cursor = "grab";
});