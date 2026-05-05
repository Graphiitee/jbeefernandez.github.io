const facts = [
    "Sound cannot travel in space, so a supernova would be completely silent.",
    "On Saturn and Jupiter, the extreme pressure creates literal diamond rain.",
    "The water in your glass is actually billions of years older than the Sun.",
    "If two pieces of the same metal touch in space, they bond together forever.",
    "There is a massive 'void' in space that is 330 million light-years of nothing.",
    "It is so hot on Venus that it 'snows' metallic lead and bismuth.",
    "Venus rotates so slowly that its day is longer than its entire year.",
    "Saturn is less dense than water; it would float in a giant bathtub.",
    "Sunsets on Mars appear blue to the human eye due to Martian dust.",
    "The Moon is slowly shrinking, causing 'moonquakes' across its surface.",
    "The Sun makes up 99.86% of the total mass in our solar system.",
    "Over 1.3 million Earths could fit inside a hollowed-out Sun.",
    "If space had air, the Sun’s roar would be as loud as a rock concert on Earth.",
    "Pluto has a massive, heart-shaped glacier made of nitrogen ice.",
    "Mercury has a literal tail like a comet, made of sodium atoms.",
    "A single teaspoon of a neutron star would weigh 6 billion tons.",
    "Space smells like a mix of seared steak, hot metal, and welding fumes.",
    "The Andromeda Galaxy is heading toward us at 250,000 miles per hour.",
    "There are billions of 'rogue' planets wandering the dark without a star.",
    "At light speed, you could circle the Earth 7.5 times in one second.",
    "There are more stars in the sky than grains of sand on all of Earth.",
    "Voyager 1 carries a golden record for aliens to find in millions of years.",
    "Earth’s atmosphere weighs 5.5 quadrillion tons, held down by gravity.",
    "The universe is expanding faster than the speed of light.",
    "The static on old TVs is actually radiation left over from the Big Bang."
];
const notes = ["CLEANING THE LENS", "LOOKING FOR STARS", "CHECKING THE SPACE MAP", "TALKING TO THE ROCKET", "OPENING THE DOORS"];

const kmDisplay = document.getElementById('km');
const factDisplay = document.getElementById('fact');
const statusDisplay = document.getElementById('status');
const screen = document.getElementById('screen');

let ready = false;
let finished = false; //track when its done
let progress = 0;
const goal = Math.floor(Math.random() * 190000000) + 60000000; 

function start() {
    //timer runs as long as the page hasntt finished its transition
    const textTimer = setInterval(() => { 
        if (!finished) { 
            factDisplay.innerText = facts[Math.floor(Math.random() * facts.length)]; 
            statusDisplay.innerText = notes[Math.floor(Math.random() * notes.length)]; 
        } 
    }, 4000);

    const loadPulse = setInterval(() => {
        if (!ready) {
            //loading phase
            if (progress < goal * 0.9) progress += Math.floor(Math.random() * 3000000) + 1000000;
        } else {
            //completion phase once window is loaded
            progress += 8000000;
            if (progress >= goal) {
                progress = goal;
                finished = true; //stops the text from changing
                clearInterval(loadPulse);
                clearInterval(textTimer);
                finish();
            }
        }
        kmDisplay.innerText = `DISTANCE FROM EARTH: ${progress.toLocaleString()} KM`;
    }, 100);
}

function finish() {
    kmDisplay.innerText = "TARGET FOUND!";
    statusDisplay.innerText = "CONNECTION MADE! READY FOR BLAST OFF!";
    setTimeout(() => {
        screen.classList.add('hide');
        setTimeout(() => { window.location.href = "../signin/index.html"; }, 1500);
    }, 1200);
}

window.addEventListener('load', () => { 
    setTimeout(() => { ready = true; }, 3000); 
});

start();