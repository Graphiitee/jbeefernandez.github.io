//https://www.w3schools.com/js/js_const.asp

//GOALS:
//Fun Facts - https://www.w3schools.com/js/js_random.asp
//Loading Status - https://www.w3schools.com/js/js_random.asp
//Randomized number loader

const spaceFacts = [
    "Sound cannot travel in space, so a supernova would be completely silent.",
    "On Saturn and Jupiter, extreme pressure creates literal diamond rain.",
    "Space smells like a mix of seared steak and hot metal.",
    "Venus rotates so slowly that its day is longer than its year.",
    "Sunsets on Mars appear blue due to the specific way dust scatters light."
];

const loadingStatuses = [
    "CLEANING THE LENS", 
    "LOOKING FOR STARS", 
    "CHECKING SPACE MAPS", 
    "TALKING TO ROCKETS"
];

//HTML id
const distanceText = document.getElementById('distanceText');
const factText = document.getElementById('factText');
const statusText = document.getElementById('statusText');
const loadingScreen = document.getElementById('loadingScreen');

//starting the distance counter at 0
let currentDistance = 0;
//gets randomized target distance number between 60m and 250m KM
const maxDistance = Math.floor(Math.random() * 190000000) + 60000000; 

//tracks if the pages is ready or not
let pageIsReady = false;
let loadingIsDone = false;

//Change the fact and status every 4 seconds
const factTimer = setInterval(function() {
    //if the page is not done loading, it'll keep changing the texts for fact and status
    if (loadingIsDone === false) { 
        //https://www.w3schools.com/js/js_random.asp
        //chooses randomly in our facts and status
        const randomFactIndex = Math.floor(Math.random() * spaceFacts.length);
        const randomStatusIndex = Math.floor(Math.random() * loadingStatuses.length);
        
        //changing the texts
        factText.innerText = spaceFacts[randomFactIndex]; 
        statusText.innerText = loadingStatuses[randomStatusIndex]; 
    } 
}, 4000);

//changes the distance every 100 miliseconds
const distanceTimer = setInterval(function() {
    
    //checks if the page still loading
    if (pageIsReady === false) {
        //lowers the random big numbers when the loading reaches 90%
        if (currentDistance < maxDistance * 0.9) {
            //adds random amounts of km in the current distance
            currentDistance += Math.floor(Math.random() * 3000000) + 1000000;
        }
    } 
    //if the browser is fully loaded, it'll speed up the distance
    else {
        currentDistance += 8000000;
        
        //checks if the distance reached its goal
        if (currentDistance >= maxDistance) {
            currentDistance = maxDistance; //will stop the number at the goal
            loadingIsDone = true; //will turn loadingisdone on
            
            //stops the loop
            clearInterval(distanceTimer);
            clearInterval(factTimer);
            
            //will get to the sign in page
            runExitTransition();
        }
    }
    
    //shows the locked in distance numbers
    distanceText.innerText = "DISTANCE FROM EARTH: " + currentDistance.toLocaleString() + " KM";
    
}, 100);

//hides the loading screen and load into the sign in page
function runExitTransition() {
    distanceText.innerText = "TARGET LOCKED";
    statusText.innerText = "PLEASE SIGN IN TO PROCEED...";
    
    //waits for 1.2 seconds, then will have the fade out effect
    setTimeout(function() {
        loadingScreen.classList.add('hide');
        
        //waits for 1.5 seconds for the fade effect to finsih then go into signin folder
        setTimeout(function() { 
            window.location.href = "signin/index.html"; 
        }, 1500);
        
    }, 1200);
}

//will check if the website is loaded
window.addEventListener('load', function() { 
    //wait 3 seconds after the website loads
    setTimeout(function() { 
        pageIsReady = true; 
    }, 3000); 
});