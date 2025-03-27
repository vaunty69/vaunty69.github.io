document.addEventListener("DOMContentLoaded", function () {
    const foodCards = document.querySelectorAll(".food-card");
    const modal = new bootstrap.Modal(document.getElementById("foodModal"));
    const modalTitle = document.getElementById("modalTitle");
    const modalBody = document.getElementById("modalBody");

    const foodData = {
        "Sinigang": {
            description: "A sour and savory tamarind-based soup with pork.",
            image: "sinigang.jpg",
            price: "₱250",
            category: "Filipino Soup",
            hours: "10AM - 10PM"
        },
        "Kare-Kare": {
            description: "A rich peanut stew with oxtail, tripe, and vegetables.",
            image: "kare-kare.jpg",
            price: "₱350",
            category: "Filipino Stew",
            hours: "11AM - 9PM"
        },
        "Pork Binagoongan": {
            description: "Pork cooked in a savory and salty shrimp paste sauce.",
            image: "binagoongan.jpg",
            price: "₱280",
            category: "Filipino Dish",
            hours: "10AM - 9PM"
        },
        "Lechon Paksiw": {
            description: "Roasted pork stew in a sweet and tangy sauce.",
            image: "lechon-paksiw.jpg",
            price: "₱300",
            category: "Filipino Specialty",
            hours: "12PM - 10PM"
        }
    };

    // Open modal when food card is clicked
    foodCards.forEach(card => {
        card.addEventListener("click", function () {
            let foodName = this.querySelector(".card-title").innerText;

            if (foodData[foodName]) {
                let data = foodData[foodName];
                modalTitle.innerText = foodName;
                modalBody.innerHTML = `
                    <img src="${data.image}" class="img-fluid mb-3" alt="${foodName}">
                    <p><strong>Category:</strong> ${data.category}</p>
                    <p><strong>Price:</strong> ${data.price}</p>
                    <p><strong>Available Hours:</strong> ${data.hours}</p>
                    <p>${data.description}</p>
                `;
                modal.show();
            }
        });
    });

    // Hide modal when Main Menu button is clicked
    document.getElementById("mainMenu").addEventListener("click", function () {
        modal.hide();
    });
});
