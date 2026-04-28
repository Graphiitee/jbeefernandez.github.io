function startLoading() {
    // 1. Wait 10 seconds (10000ms)
    setTimeout(function() {
        var earth = document.getElementById("earth");
        var loader = document.getElementById("loader");
        var content = document.getElementById("main-content");

        // 2. Trigger the CSS animation
        earth.classList.add("exit-animation");

        // 3. Wait for the 2-second animation to finish, then show the header
        setTimeout(function() {
            loader.style.display = "none";
            content.classList.remove("hidden");
        }, 2000); 

    }, 10000); 
}