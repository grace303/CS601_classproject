/*jshint esversion: 6 */

function showNav() {
    let navItems = document.getElementById("nav-items");
    if (navItems.style.display === "block") {
        navItems.style.display = "none";
    } else {
        navItems.style.display = "block";
    }

}