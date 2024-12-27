// Dynamic replacement of placeholders
document.addEventListener("DOMContentLoaded", () => {
    const name = "Jemima"; // Replace with your girlfriend's name
    const event = "a romantic dinner";
    const date = "Saturday, 30th December";
    const time = "7:00 PM";

    const content = document.querySelector(".card p");
    content.innerHTML = content.innerHTML
        .replace("[name]", name)
        .replace("[event]", event)
        .replace("[date]", date)
        .replace("[time]", time);
});

// Button interaction
const rsvpButton = document.getElementById("rsvp-button");
rsvpButton.addEventListener("click", () => {
    alert("Yay! Can’t wait to see you there! 💖");
});
