/*jshint esversion: 6 */

// Nav bar
document.addEventListener("DOMContentLoaded", function (event) {
    // Nav bar
    const hamburger = document.querySelector(".nav-bar");
    const navsub = document.querySelector(".nav-items");
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle("nav-bar-rotate");
        navsub.classList.toggle("nav-show");
    });

});