// Simulating dynamic content for placeholders
const namePlaceholder = "[name]";
const eventPlaceholder = "[event]";
const datePlaceholder = "[date]";
const timePlaceholder = "[time]";

// Replace placeholders with dynamic values
document.addEventListener("DOMContentLoaded", () => {
    const cardText = document.querySelector(".card p");

    // Replace with your own values
    const name = "Jemima";
    const event = "a romantic dinner";
    const date = "Saturday, 30th December";
    const time = "7:00 PM";

    cardText.innerHTML = cardText.innerHTML
        .replace(namePlaceholder, name)
        .replace(eventPlaceholder, event)
        .replace(datePlaceholder, date)
        .replace(timePlaceholder, time);
});

// Button interaction
document.getElementById("rsvp-button").addEventListener("click", () => {
    alert("Yay! Can't wait to see you there! ❤️");
});

document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("rsvp-button");

    button.addEventListener("click", () => {
        alert("Yay! Can’t wait to see you there! 💖");
    });
});

