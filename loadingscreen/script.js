const spaceFacts = [
    "On some planets, it rains real diamonds!",
    "One million Earths could fit inside the Sun.",
    "Space is very quiet because there is no air for sound to travel.",
    "There are more stars in the sky than grains of sand on all the beaches on Earth.",
    "A day on Venus is longer than a whole year on Earth!",
    "If two pieces of metal touch in space, they stick together like glue."
];

const statusNotes = [
    "CLEANING THE LENS",
    "LOOKING FOR STARS",
    "CHECKING THE SPACE MAP",
    "TALKING TO THE ROCKET",
    "OPENING THE DOORS"
];

const distanceDisplay = document.getElementById('distance-display');
const factDisplay = document.getElementById('fun-fact');
const statusDisplay = document.getElementById('status-text');
const loadingScreen = document.getElementById('loading-screen');

let isLoaded = false;
let currentProgress = 0;

// Randomized final distance in the millions of KM
const targetDistance = Math.floor(Math.random() * 190000000) + 60000000; 

function updateFact() {
    const randomFact = spaceFacts[Math.floor(Math.random() * spaceFacts.length)];
    factDisplay.innerText = randomFact;
}

function updateStatus() {
    if (!isLoaded) {
        const randomStatus = statusNotes[Math.floor(Math.random() * statusNotes.length)];
        statusDisplay.innerText = randomStatus;
    }
}

function startLoading() {
    const vid = document.getElementById('vid');
    if (vid) {
        vid.muted = true;
        vid.play().catch(() => console.log("Video waiting for user interaction."));
    }

    updateFact();
    updateStatus();

    const textTimer = setInterval(() => {
        if (!isLoaded) {
            updateFact();
            updateStatus();
        }
    }, 4000);

    const loadPulse = setInterval(() => {
        if (!isLoaded) {
            if (currentProgress < targetDistance * 0.9) {
                currentProgress += Math.floor(Math.random() * 3000000) + 1000000;
            }
        } else {
            currentProgress += 8000000;
            if (currentProgress >= targetDistance) {
                currentProgress = targetDistance;
                clearInterval(loadPulse);
                clearInterval(textTimer);
                finishSequence();
            }
        }
        distanceDisplay.innerText = `DISTANCE FROM EARTH: ${currentProgress.toLocaleString()} KM`;
    }, 100);
}

function finishSequence() {
    distanceDisplay.innerText = "TARGET FOUND!";
    statusDisplay.innerText = "CONNECTION MADE! READY FOR BLAST OFF!";
    statusDisplay.style.opacity = "1";

    setTimeout(() => {
        loadingScreen.classList.add('fade-out');
        setTimeout(() => {
            window.location.href = "../home.html"; 
        }, 1500);
    }, 1200);
}

window.addEventListener('load', () => {
    setTimeout(() => {
        isLoaded = true;
    }, 3000);
});

startLoading();