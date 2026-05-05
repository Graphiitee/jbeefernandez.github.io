const stage = document.querySelector('.stage');
const bar = document.querySelector('.bar');
const typewriter = document.getElementById('typewriter');
const astro = document.getElementById('astro');

window.addEventListener('load', () => {
    stage.classList.add('show');
    startTypewriter();
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        bar.classList.add('scroll');
    } else {
        bar.classList.remove('scroll');
    }
});

const words = ["THE VOID", "SPACE", "GALAXY", "PLANETS"];
let wordIdx = 0;
let charIdx = 0;
let isDeleting = false;

function startTypewriter() {
    const currentWord = words[wordIdx];
    
    if (isDeleting) {
        typewriter.textContent = currentWord.substring(0, charIdx - 1);
        charIdx--;
    } else {
        typewriter.textContent = currentWord.substring(0, charIdx + 1);
        charIdx++;
    }

    let speed = isDeleting ? 100 : 200;

    if (!isDeleting && charIdx === currentWord.length) {
        isDeleting = true;
        speed = 2000;
    } else if (isDeleting && charIdx === 0) {
        isDeleting = false;
        wordIdx = (wordIdx + 1) % words.length;
        speed = 500;
    }

    setTimeout(startTypewriter, speed);
}

let active = false, startX, startY;

astro.addEventListener("mousedown", (e) => {
    e.preventDefault();
    active = true;
    
    const rect = astro.getBoundingClientRect();
    startX = e.clientX - rect.left;
    startY = e.clientY - rect.top;

    astro.style.transition = "none"; 
    astro.style.animation = "none";
    astro.style.cursor = "grabbing";
});

document.addEventListener("mousemove", (e) => {
    if (!active) return;
    
    const stageRect = stage.getBoundingClientRect();
    
    let x = e.clientX - startX - stageRect.left;
    let y = e.clientY - startY - stageRect.top;
    
    astro.style.right = "auto";
    astro.style.bottom = "auto";
    astro.style.transform = "none";
    astro.style.left = x + "px";
    astro.style.top = y + "px";
});

document.addEventListener("mouseup", () => {
    if (active) {
        active = false;
        astro.style.cursor = "grab";
        astro.style.transition = "all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)";
        
        astro.style.left = "";       
        astro.style.top = "50%";     
        astro.style.right = "5%";    
        astro.style.transform = "translateY(-50%)"; 
        astro.style.animation = "float 6s ease-in-out infinite"; 
    }
});