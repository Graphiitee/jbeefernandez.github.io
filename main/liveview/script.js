//gets the text elements from the sidebar card
const titleDisplay = document.getElementById('telemetry-title');
const distanceDisplay = document.getElementById('val-distance');
const dayDisplay = document.getElementById('val-day');
const ageDisplay = document.getElementById('val-age');
const moonsDisplay = document.getElementById('val-moons');
const satellitesDisplay = document.getElementById('val-satellites');

//updates the sidebar information
function updateCard(element) {
    //gets the custom data values from the clicked planet
    titleDisplay.textContent = element.getAttribute('data-name');
    distanceDisplay.textContent = element.getAttribute('data-distance');
    dayDisplay.textContent = element.getAttribute('data-day');
    ageDisplay.textContent = element.getAttribute('data-age');
    moonsDisplay.textContent = element.getAttribute('data-moons');
    satellitesDisplay.textContent = element.getAttribute('data-satellites');
}

//gets all the planets
const planetButtons = document.querySelectorAll('.planet-node');

//adds click events to every planet
planetButtons.forEach(button => {
    button.addEventListener('click', () => {
        //updates the sidebar with the clicked planet data
        updateCard(button);
    });
});

//gets the sun element
const sunElement = document.querySelector('.sun');

//updates the sidebar when clicking the sun
sunElement.addEventListener('click', () => {
    updateCard(sunElement);
});