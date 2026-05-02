const box = document.getElementById("box");
const topPart = document.getElementById("top");
let active = false, startX, startY;

// Activating dragging with mouse when the sign in box is held
topPart.addEventListener("mousedown", (e) => {
    active = true;
    startX = e.clientX - box.offsetLeft;
    startY = e.clientY - box.offsetTop;
    topPart.style.cursor = "grabbing";
});

// Makes the sign in box stay in the screen
document.addEventListener("mousemove", (e) => {
    if (active) {
        let x = e.clientX - startX;
        let y = e.clientY - startY;
        
        const wide = window.innerWidth, high = window.innerHeight;
        const w = box.offsetWidth, h = box.offsetHeight;
        
        if (x < 0) x = 0; 
        if (y < 0) y = 0; 
        if (x + w > wide) x = wide - w; 
        if (y + h > high) y = high - h; 
        
        box.style.left = x + "px"; 
        box.style.top = y + "px"; 
        box.style.margin = "0"; 
    }
});

// Deactivates dragging with mouse when let go so the sign in box can be clicked on again to put details
document.addEventListener("mouseup", () => { 
    active = false; 
    topPart.style.cursor = "grab"; 
});