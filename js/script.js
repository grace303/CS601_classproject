/*jshint esversion: 6 */

//Welcome page
function displayCounter() {
    const indexCounter = document.getElementById("index-counter");
    setTimeout(function () { indexCounter.innerHTML = '3'; }, 1000);
    setTimeout(function () { indexCounter.innerHTML = '2'; }, 2000);
    setTimeout(function () { indexCounter.innerHTML = '1'; }, 3000);
    setTimeout(function () { indexCounter.innerHTML = '0'; }, 4000);
}

// Nav bar
function toggleNavItem() {
    const hamburger = document.querySelector(".nav-bar");
    const navsub = document.querySelector(".nav-items");
    hamburger.classList.toggle("nav-bar-rotate");
    navsub.classList.toggle("nav-show");
}

//Contact form
function submitContact() {
    //validate input
    let inputArrs = document.getElementsByClassName("contact-item");
    for (let input of inputArrs) {
        if (input.value == '') {
            document.getElementById("contact-alert").innerHTML = "<p>Please fill in all fields. Thank you!</p>";
            return;
        }
    }
    //If all fields filled
    document.getElementById("contact-alert").innerHTML = "";
    document.getElementById("contact-form").innerHTML = "<p style='color:#fad07a; margin-top: 1rem;'>Your message has been submitted. Thank you!</p>";

}