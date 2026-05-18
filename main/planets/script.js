var allPlanets = [
    {
        name: "Sun",
        img: "assets/solarsystem/sun.png",
        text: "The luminous star at the absolute center of our cosmic planetary system.",
        distance: "0 km",
        day: "27 Earth Days",
        moons: "0"
    },
    {
        name: "Mercury",
        img: "assets/solarsystem/mercury.png",
        text: "The smallest planet in our system and the closest neighbor to the Sun.",
        distance: "57.9M km",
        day: "59 Earth Days",
        moons: "0"
    },
    {
        name: "Venus",
        img: "assets/solarsystem/venus.png",
        text: "A scorching world shrouded in thick clouds, often called Earth's twin.",
        distance: "108.2M km",
        day: "243 Earth Days",
        moons: "0"
    },
    {
        name: "Earth",
        img: "assets/solarsystem/earth.png",
        text: "Our beautiful shared home world, oasis of life, liquid oceans and atmosphere.",
        distance: "149.6M km",
        day: "24 Hours",
        moons: "1"
    },
    {
        name: "Mars",
        img: "assets/solarsystem/mars.png",
        text: "The dusty desert red world filled with iron oxide ridges and giant ancient volcanos.",
        distance: "227.9M km",
        day: "24.6 Hours",
        moons: "2"
    },
    {
        name: "Jupiter",
        img: "assets/solarsystem/jupiter.png",
        text: "The king giant gas world protected by massive colorful storms and roaring cyclones.",
        distance: "778.5M km",
        day: "10 Hours",
        moons: "95"
    },
    {
        name: "Saturn",
        img: "assets/solarsystem/saturn.png",
        text: "A majestic jewel floating in deep space flanked by massive bright icy ring tracks.",
        distance: "1.4B km",
        day: "10.7 Hours",
        moons: "146"
    },
    {
        name: "Uranus",
        img: "assets/solarsystem/uranus.png",
        text: "An icy blue world spinning strangely completely tilted sideways on its orbital plane.",
        distance: "2.9B km",
        day: "17.2 Hours",
        moons: "28"
    },
    {
        name: "Neptune",
        img: "assets/solarsystem/neptune.png",
        text: "A freezing far world constantly battered by supersonic winds and storms.",
        distance: "4.5B km",
        day: "16 Hours",
        moons: "16"
    }
];

var activeNumber = 0;

var menuBox = document.getElementById("menu-view");
var infoBox = document.getElementById("info-view");

// Changes preview image when hovering over text
function hoverPlanet(num) {
    document.getElementById("preview-img").src = allPlanets[num].img;
}

// Fills information card data
function fillCard(num) {
    var chosen = allPlanets[num];

    document.getElementById("main-img").src = chosen.img;
    document.getElementById("info-name").innerText = chosen.name;
    document.getElementById("info-text").innerText = chosen.text;
    document.getElementById("info-distance").innerText = chosen.distance;
    document.getElementById("info-day").innerText = chosen.day;
    document.getElementById("info-moons").innerText = chosen.moons;
}
