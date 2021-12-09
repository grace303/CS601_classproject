/*jshint esversion: 6 */

// Nav bar
function toggleNavItem() {
    const hamburger = document.querySelector(".nav-bar");
    const navsub = document.querySelector(".nav-items");
    hamburger.classList.toggle("nav-bar-rotate");
    navsub.classList.toggle("nav-show");
}