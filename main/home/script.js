// gets the astronaut image by its id
const astronaut = document.getElementById('draggableAstronaut');

// tracks whether the mouse is currently held down on the astronaut
let isHolding = false;

// stores where the mouse was when the click started
// needed so the astronaut doesn't jump to the cursor position on pickup
let startX = 0;
let startY = 0;

// stores how far the astronaut has moved from its original position
let moveX = 0;
let moveY = 0;

// runs when the mouse is pressed down on the astronaut
astronaut.addEventListener('mousedown', (e) => {
    isHolding = true;

    // adds the dragging class which removes the smooth transition
    // so the astronaut follows the mouse instantly
    astronaut.classList.add('dragging');

    // calculates the offset between the mouse and the astronaut's current position
    // without this the astronaut would snap to the cursor tip on pickup
    startX = e.clientX - moveX;
    startY = e.clientY - moveY;

    // prevents the default browser drag behavior on images
    e.preventDefault();
});

// runs on every mouse movement across the whole page
// using document so it still works if the mouse moves off the astronaut quickly
document.addEventListener('mousemove', (e) => {

    // only moves the astronaut if it's actually being held
    if (!isHolding) return;

    // calculates the new position based on how far the mouse has moved
    moveX = e.clientX - startX;
    moveY = e.clientY - startY;

    // applies the movement using css transform
    // https://www.w3schools.com/cssref/css3_pr_transform.php
    astronaut.style.transform = `translate(${moveX}px, ${moveY}px)`;
});

// runs when the mouse button is released anywhere on the page
document.addEventListener('mouseup', () => {

    // only triggers if the astronaut was actually being held
    if (!isHolding) return;

    isHolding = false;

    // removes the dragging class which re-enables the smooth css transition
    astronaut.classList.remove('dragging');

    // resets the movement values so the next drag starts clean
    moveX = 0;
    moveY = 0;

    // snaps the astronaut back — the css transition will animate this smoothly
    astronaut.style.transform = `translate(0, 0)`;
});