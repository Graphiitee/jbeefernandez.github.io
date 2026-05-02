// Navigation scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// WATCHER: Handles the appearance animations
const watcher = new IntersectionObserver((list) => {
    list.forEach((item) => {
        if (item.isIntersecting) {
            item.target.classList.add('show');
        }
    });
}, { threshold: 0.1 });

const view = document.querySelector('.view');
watcher.observe(view);

// MOVE: Handles dragging the astronaut
const astro = document.getElementById('astro');
let move = false;
let x, y;

astro.addEventListener('mousedown', (e) => {
    move = true;
    x = e.clientX - astro.offsetLeft;
    y = e.clientY - astro.offsetTop;
    astro.style.cursor = 'grabbing';
    astro.style.transition = "none"; 
});

window.addEventListener('mousemove', (e) => {
    if (!move) return;
    astro.style.left = `${e.clientX - x}px`;
    astro.style.top = `${e.clientY - y}px`;
});

window.addEventListener('mouseup', () => {
    if (!move) return;
    move = false;
    astro.style.cursor = 'grab';
    
    // Smooth reset
    astro.style.transition = "all 1s cubic-bezier(0.19, 1, 0.22, 1)";
    astro.style.left = ""; 
    astro.style.top = "50%";
    astro.style.right = "5%";
});