const bar = document.querySelector('.bar');
const el = document.getElementById('astro');
const hero = document.querySelector('.hero');

window.onscroll = () => {
    window.scrollY > 50 ? bar.classList.add('scroll') : bar.classList.remove('scroll');
};

const view = new IntersectionObserver(items => {
    items.forEach(item => item.isIntersecting && item.target.classList.add('show'));
});
view.observe(hero);

let active = false;
let x, y, timer;

el.onmousedown = e => {
    active = true;
    clearTimeout(timer);
    const box = el.getBoundingClientRect();
    x = e.clientX - box.left;
    y = e.clientY - box.top;
    el.style.animation = el.style.transition = el.style.transform = "none";
    el.style.left = box.left + "px";
    el.style.top = box.top + "px";
    el.style.right = "auto";
    el.style.cursor = "grabbing";
};

window.onmousemove = e => {
    if (!active) return;
    el.style.left = (e.clientX - x) + "px";
    el.style.top = (e.clientY - y) + "px";
};

window.onmouseup = () => {
    if (!active) return;
    active = false;
    el.style.cursor = "grab";
    el.style.transition = "0.8s cubic-bezier(0.2, 1, 0.2, 1)";
    el.style.left = "";
    el.style.right = "5%";
    el.style.top = "50%";
    el.style.transform = "translateY(-50%)";
    timer = setTimeout(() => {
        if (!active) el.style.animation = "float 6s ease-in-out infinite";
    }, 800);
};