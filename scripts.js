// MOBILE MENU

let menuBtn = document.getElementById("menuBtn");
let navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function() {
    navLinks.classList.toggle("active");
});


// DARK MODE

let darkBtn = document.getElementById("darkBtn");

darkBtn.addEventListener("click", function() {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        darkBtn.innerHTML = "☀️";
    } else {
        darkBtn.innerHTML = "🌙";
    }

});


// TYPING EFFECT

let words = [
    "Web Developer",
    "Frontend Developer",
    "JavaScript Learner"
];

let wordIndex = 0;
let letterIndex = 0;

function typeText() {

    let currentWord = words[wordIndex];

    document.getElementById("typing").textContent =
        currentWord.substring(0, letterIndex);

    letterIndex++;

    if (letterIndex > currentWord.length) {

        setTimeout(function() {
            letterIndex = 0;
            wordIndex++;

            if (wordIndex >= words.length) {
                wordIndex = 0;
            }
        }, 1000);
    }
}

setInterval(typeText, 120);


// ABOUT BUTTON

function showMessage() {

    alert(
        "Thanks for visiting my website! " +
        "I am learning HTML, CSS and JavaScript."
    );

}


// PROJECT BUTTON

function project(projectName) {

// ===============================
// VINX SUPER POSE ONLINE STORE
// ===============================

let products = [
    {
        name: "Smartphone",
        price: 150000
    },
    {
        name: "Laptop",
        price: 450000
    },
    {
        name: "Bluetooth Speaker",
        price: 35000
    },
    {
        name: "Headphones",
        price: 25000
    },
    {
        name: "Smart Watch",
        price: 40000
    },
    {
        name: "School Bag",
        price: 18000
    },
    {
        name: "Sneakers",
        price: 30000
    },
    {
        name: "Power Bank",
        price: 22000
    }
];

let cart = [];


// ===============================
// WELCOME
// ===============================

alert(
    "WELCOME TO VINX SUPER POSE\n\n" +
    "Your online store for quality goods and services."
);


// ===============================
// SHOW PRODUCTS
// ===============================

function showProducts() {

    let productList = "VINX SUPER POSE PRODUCTS\n\n";

    for (let i = 0; i < products.length; i++) {

        productList +=
            (i + 1) + ". " +
            products[i].name +
            " - ₦" +
            products[i].price.toLocaleString() +
            "\n";
    }

    alert(productList);
}


// ===============================
// ADD PRODUCT TO CART
// ===============================

function addToCart() {

    showProducts();

    let choice = Number(
        prompt(
            "Enter the number of the product you want to buy:"
        )
    );

    if (
        choice < 1 ||
        choice > products.length ||
        isNaN(choice)
    ) {

        alert("Invalid product number.");

        return;
    }

    let quantity = Number(
        prompt(
            "How many " +
            products[choice - 1].name +
            " do you want?"
        )
    );

    if (quantity <= 0 || isNaN(quantity)) {

        alert("Invalid quantity.");

        return;
    }

    let product = products[choice - 1];

    cart.push({
        name: product.name,
        price: product.price,
        quantity: quantity
    });

    alert(
        product.name +
        " has been added to your cart.\n\n" +
        "Quantity: " +
        quantity
    );
}


// ===============================
// VIEW CART
// ===============================

function viewCart() {

    if (cart.length === 0) {

        alert("Your shopping cart is empty.");

        return;
    }

    let cartText = "YOUR SHOPPING CART\n\n";
    let total = 0;

    for (let i = 0; i < cart.length; i++) {

        let itemTotal =
            cart[i].price *
            cart[i].quantity;

        total += itemTotal;

        cartText +=
            (i + 1) +
            ". " +
            cart[i].name +
            "\nQuantity: " +
            cart[i].quantity +
            "\nPrice: ₦" +
            cart[i].price.toLocaleString() +
            "\nSubtotal: ₦" +
            itemTotal.toLocaleString() +
            "\n\n";
    }

    cartText +=
        "----------------------\n" +
        "TOTAL: ₦" +
        total.toLocaleString();

    alert(cartText);
}


// ===============================
// CHECKOUT
// ===============================

function checkout() {

    if (cart.length === 0) {

        alert(
            "Your cart is empty.\n" +
            "Please add a product first."
        );

        return;
    }

    let total = 0;

    for (let i = 0; i < cart.length; i++) {

        total +=
            cart[i].price *
            cart[i].quantity;
    }

    alert(
        "CHECKOUT\n\n" +
        "Your total is:\n" +
        "₦" +
        total.toLocaleString()
    );

    let customerName =
        prompt("Enter your full name:");

    if (!customerName) {

        alert("Checkout cancelled.");

        return;
    }

    let phone =
        prompt("Enter your phone number:");

    if (!phone) {

        alert("Checkout cancelled.");

        return;
    }

    let address =
        prompt("Enter your delivery address:");

    if (!address) {

        alert("Checkout cancelled.");

        return;
    }

    alert(
        "ORDER CONFIRMED!\n\n" +
        "Customer: " +
        customerName +
        "\nPhone: " +
        phone +
        "\nAddress: " +
        address +
        "\nTotal: ₦" +
        total.toLocaleString() +
        "\n\nThank you for shopping with " +
        "VINX SUPER POSE!"
    );

    cart = [];
}


// ===============================
// SEARCH PRODUCT
// ===============================

function searchProduct() {

    let search =
        prompt("Enter the product you are looking for:");

    if (!search) {
        return;
    }

    search = search.toLowerCase();

    let results = "";

    for (let i = 0; i < products.length; i++) {

        if (
            products[i].name
                .toLowerCase()
                .includes(search)
        ) {

            results +=
                products[i].name +
                " - ₦" +
                products[i].price.toLocaleString() +
                "\n";
        }
    }

    if (results === "") {

        alert(
            "Sorry, we could not find:\n" +
            search
        );

    } else {

        alert(
            "SEARCH RESULTS\n\n" +
            results
        );
    }
}


// ===============================
// MAIN MENU
// ===============================

function storeMenu() {

    let choice;

    do {

        choice = prompt(
            "🛒 VINX SUPER POSE\n\n" +

            "1. View Products\n" +
            "2. Search Product\n" +
            "3. Add Product to Cart\n" +
            "4. View Cart\n" +
            "5. Checkout\n" +
            "6. Exit\n\n" +

            "Enter your choice:"
        );

        if (choice === "1") {

            showProducts();

        } else if (choice === "2") {

            searchProduct();

        } else if (choice === "3") {

            addToCart();

        } else if (choice === "4") {

            viewCart();

        } else if (choice === "5") {

            checkout();

        } else if (choice === "6") {

            alert(
                "Thank you for visiting " +
                "My site!"
            );

        } else {

            alert("Invalid choice. Please try again.");

        }

    } while (choice !== "6");
}


// ===============================
// START STORE
// ===============================

storeMenu();
}
function project1(projectName) {

    alert(projectName + " project selected!");

    let num1;
let num2;
let operation;
let answer;

alert("WELCOME TO VINX MASSIVE CALCULATOR");

num1 = Number(prompt("Enter your first number:"));

operation = prompt(
    "Choose an operation:\n" +
    "+  Addition\n" +
    "-  Subtraction\n" +
    "*  Multiplication\n" +
    "/  Division\n" +
    "%  Percentage\n" +
    "^  Power\n" +
    "√  Square Root"
);

if (operation === "√") {

    answer = Math.sqrt(num1);

    alert(
        "VINX CALCULATOR\n\n" +
        "Number: " + num1 +
        "\nSquare Root: " + answer
    );

} else {

    num2 = Number(prompt("Enter your second number:"));

    if (operation === "+") {

        answer = num1 + num2;

    } else if (operation === "-") {

        answer = num1 - num2;

    } else if (operation === "*") {

        answer = num1 * num2;

    } else if (operation === "/") {

        if (num2 === 0) {
            alert("You cannot divide by zero!");
            answer = null;
        } else {
            answer = num1 / num2;
        }

    } else if (operation === "%") {

        answer = (num1 / 100) * num2;

    } else if (operation === "^") {

        answer = Math.pow(num1, num2);

    } else {

        alert("Invalid operation!");
        answer = null;
    }

    if (answer !== null) {

        alert(
            "VINX MASSIVE CALCULATOR\n\n" +
            "First Number: " + num1 +
            "\nOperation: " + operation +
            "\nSecond Number: " + num2 +
            "\n\nANSWER = " + answer
        );
    }
}

}
function project2(projectName) {

    alert(projectName + " project selected!");
    alert("Welcome to the Love Calculator ❤️");

let yourname = prompt("What is your name?");
let lovername = prompt("What is your lover's name?");

var lovescore = Math.floor(Math.random() * 101);

alert(yourname + " ❤️ " + lovername);
alert("Your love score is " + lovescore + "%");

if (lovescore < 30) {
    alert("The love score is low. You may need to understand each other better.");
}
else if (lovescore < 50) {
    alert("There is some connection, but you still need to work on your relationship.");
}
else if (lovescore < 70) {
    alert("The love might work. Keep understanding and supporting each other.");
}
else if (lovescore < 90) {
    alert("Wow! You have a strong connection ❤️");
}
else {
    alert("Amazing! Your love score is very high! ❤️❤️");
}
}


// CONTACT FORM

let contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value;

    if (name === "") {
        alert("Please enter your name.");
    } else {
        alert("Thank you, " + name + "! Your message has been received.");

        contactForm.reset();
    }

});0 