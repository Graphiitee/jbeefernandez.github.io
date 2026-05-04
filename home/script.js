const bar = document.querySelector('.bar');
const astronaut = document.getElementById('astro');
const stage = document.querySelector('.stage');
const typeSpan = document.getElementById("typewriter");

//Makes the navigation kind of compressed when scrolled
window.onscroll = () => {
    if (window.scrollY > 50) {
        bar.classList.add('scroll');
    } else {
        bar.classList.remove('scroll');
    }
};

//Main title
const observer = new IntersectionObserver(items => {
    items.forEach(item => {
        if (item.isIntersecting) {
            item.target.classList.add('show');
            setTimeout(startType, 500); //type writer effect on "space"
            observer.unobserve(item.target); //will only show once
        }
    });
});
observer.observe(stage);

//typewriter effect
const word = "SPACE";
let charIndex = 0;

function startType() {
    if (charIndex < word.length) {
        typeSpan.innerHTML += word.charAt(charIndex);
        charIndex++;
        setTimeout(startType, 200); // Speed
    }
}

//Dragging variables
let active = false;
let x, y, timer;

//Grabbing
astronaut.onmousedown = e => {
    active = true;
    clearTimeout(timer); //Stop reset
    
    const box = astronaut.getBoundingClientRect();
    x = e.clientX - box.left;
    y = e.clientY - box.top;
    
    astronaut.style.animation = "none";
    astronaut.style.transition = "none";
    astronaut.style.transform = "none";
    astronaut.style.left = box.left + "px";
    astronaut.style.top = box.top + "px";
    astronaut.style.right = "auto";
    astronaut.style.cursor = "grabbing";
};

//Moving the astronaut
window.onmousemove = e => {
    if (!active) return;
    astronaut.style.left = (e.clientX - x) + "px";
    astronaut.style.top = (e.clientY - y) + "px";
};

//Releases the astronaut
window.onmouseup = () => {
    if (!active) return;
    active = false;
    
    astronaut.style.cursor = "grab";
    astronaut.style.transition = "0.8s cubic-bezier(0.2, 1, 0.2, 1)";
    
    //Returns the astronaut
    astronaut.style.left = "";
    astronaut.style.right = "5%";
    astronaut.style.top = "50%";
    astronaut.style.transform = "translateY(-50%)";

    //Restarts floating
    timer = setTimeout(() => {
        if (!active) {
            astronaut.style.animation = "float 6s ease-in-out infinite";
        }
    }, 800);
};