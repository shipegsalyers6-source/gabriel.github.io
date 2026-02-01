window.addEventListener("load", () => {

    const splash = document.getElementById("splash");
    const main = document.getElementById("main-content");

    // Show splash for 3 seconds
    setTimeout(() => {
        splash.classList.add("fade-out");

        // After fade animation finishes
        setTimeout(() => {
            splash.style.display = "none";
            main.style.display = "block";
        }, 1500);

    }, 3000);

});
