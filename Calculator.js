const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");
const body = document.body; // Select body to change the full background color

let currentInput = "";
let operator = "";
let previousInput = "";

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.textContent;

        if (button.classList.contains("clear")) {
            currentInput = "";
            previousInput = "";
            operator = "";
            display.value = "";
            body.style.background = "linear-gradient(to right, #6dd5fa, #2980b9)"; // Reset background
        } else if (button.classList.contains("operator")) {
            if (currentInput !== "") {
                operator = value === "X" ? "*" : value; // Convert X to *
                previousInput = currentInput;
                currentInput = "";

                // Change background based on the selected operation
                switch (value) {
                    case "+": body.style.background = "lightblue"; break;
                    case "-": body.style.background = "lightcoral"; break;
                    case "X": body.style.background = "lightyellow"; break;
                    case "/": body.style.background = "lightpurple"; break;
                }
            }
        } else if (button.classList.contains("equals")) {
            if (previousInput !== "" && currentInput !== "") {
                currentInput = eval(previousInput + operator + currentInput);
                display.value = currentInput;

                // Change background when result is displayed
                body.style.background = "lightgreen";
            }
        } else {
            currentInput += value;
            display.value = currentInput;
            body.style.background = "linear-gradient(to right, #6dd5fa, #2980b9)"; // Reset background when typing
        }
    });
});
