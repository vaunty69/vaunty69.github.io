document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".day-btn");
    const box = document.getElementById("animatedBox");

    const colors = {
        Monday: "purple",
        Tuesday: "pink",
        Wednesday: "blue",
        Thursday: "green",
        Friday: "yellow",
        Saturday: "orange",
        Sunday: "red"
    };

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            const day = button.getAttribute("data-day");
            box.style.opacity = "1";
            box.style.transform = "translateY(100px)";
            box.style.backgroundColor = colors[day];

            // Reset after animation
            setTimeout(() => {
                box.style.transform = "translateY(0)";
            }, 1000);
        });
    });
});
