const box = document.getElementById("signin-box");
const handle = document.getElementById("handle");
let isDragging = false, offsetX, offsetY;

handle.addEventListener("mousedown", (e) => {
    isDragging = true;
    offsetX = e.clientX - box.offsetLeft;
    offsetY = e.clientY - box.offsetTop;
    handle.style.cursor = "grabbing";
});

document.addEventListener("mousemove", (e) => {
    if (isDragging) {
        let newX = e.clientX - offsetX, newY = e.clientY - offsetY;
        const screenW = window.innerWidth, screenH = window.innerHeight, boxW = box.offsetWidth, boxH = box.offsetHeight;
        if (newX < 0) newX = 0; if (newY < 0) newY = 0; 
        if (newX + boxW > screenW) newX = screenW - boxW; if (newY + boxH > screenH) newY = screenH - boxH; 
        box.style.left = newX + "px"; box.style.top = newY + "px"; box.style.margin = "0"; 
    }
});

document.addEventListener("mouseup", () => { isDragging = false; handle.style.cursor = "grab"; });
