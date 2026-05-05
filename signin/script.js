const box = document.getElementById("box");
const topPart = document.getElementById("top");
const video = document.getElementById("video");
let active = false, startX, startY;

const playVideo = () => {
    if (video) {
        video.muted = true;
        video.play().catch(() => {});
    }
};

window.addEventListener('load', playVideo);
document.addEventListener('mousedown', playVideo, { once: true });

box.addEventListener('dblclick', (e) => e.preventDefault());

//waits on pressing down on the top handle of the sign in box
topPart.addEventListener("mousedown", (e) => {
    active = true;
    //calculates the mouse position so it doesnt go off the pointer
    startX = e.clientX - box.offsetLeft;
    startY = e.clientY - box.offsetTop;
    topPart.style.cursor = "grabbing";
});

//tracks mouse movement
document.addEventListener("mousemove", (e) => {
    if (active) {
        let x = e.clientX - startX;
        let y = e.clientY - startY;
        
        const wide = window.innerWidth;
        const high = window.innerHeight;
        const w = box.offsetWidth;
        const h = box.offsetHeight;
        
        if (x < 0) x = 0; 
        if (y < 0) y = 0; 
        if (x + w > wide) x = wide - w; 
        if (y + h > high) y = high - h; 
        
        box.style.left = x + "px"; 
        box.style.top = y + "px"; 
        box.style.margin = "0"; 
    }
});

document.addEventListener("mouseup", () => { 
    active = false; 
    topPart.style.cursor = "grab"; 
});