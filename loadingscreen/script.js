const spaceFacts = ["On some planets, it rains real diamonds!", "One million Earths could fit inside the Sun.", "Space is very quiet.", "Stars outnumber sand grains.", "Venus days are longer than years.", "Metal sticks together in space."];
const statusNotes = ["CLEANING THE LENS", "LOOKING FOR STARS", "CHECKING THE SPACE MAP", "TALKING TO THE ROCKET", "OPENING THE DOORS"];

const distanceDisplay = document.getElementById('distance-display');
const factDisplay = document.getElementById('fun-fact');
const statusDisplay = document.getElementById('status-text');
const loadingScreen = document.getElementById('loading-screen');

let isLoaded = false;
let currentProgress = 0;
const targetDistance = Math.floor(Math.random() * 190000000) + 60000000; 

function startLoading() {
    const textTimer = setInterval(() => { if (!isLoaded) { factDisplay.innerText = spaceFacts[Math.floor(Math.random() * spaceFacts.length)]; statusDisplay.innerText = statusNotes[Math.floor(Math.random() * statusNotes.length)]; } }, 4000);

    const loadPulse = setInterval(() => {
        if (!isLoaded) {
            if (currentProgress < targetDistance * 0.9) currentProgress += Math.floor(Math.random() * 3000000) + 1000000;
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
    setTimeout(() => {
        loadingScreen.classList.add('fade-out');
        setTimeout(() => { window.location.href = "../signin/index.html"; }, 1500);
    }, 1200);
}

window.addEventListener('load', () => { setTimeout(() => { isLoaded = true; }, 3000); });
startLoading();
