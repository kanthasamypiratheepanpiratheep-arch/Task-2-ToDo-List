
/* =========================
   1. SHOPPING CART
========================= */

// Cart count
let cartCount = 0;

// Cart items
let cartItems = [];

// Add to Cart buttons
const addCartButtons = document.querySelectorAll(".add-cart");

const cartCountElement = document.getElementById("cartCount");

// Add product to cart
addCartButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const productName = button.dataset.name;
        const productPrice = Number(button.dataset.price);

        // Add product
        cartItems.push({
            name: productName,
            price: productPrice
        });

        // Update cart count
        cartCount++;

        cartCountElement.textContent = cartCount;

        // Success message
        alert(productName + " added to cart successfully!");

    });

});


/* =========================
   2. CART BUTTON
========================= */

const cartButton = document.getElementById("cartButton");

cartButton.addEventListener("click", function () {

    if (cartItems.length === 0) {

        alert("Your cart is empty!");

    } else {

        let cartMessage = "Your Shopping Cart:\n\n";

        let total = 0;

        cartItems.forEach(function (item, index) {

            cartMessage += (index + 1) + ". " +
                item.name + " - Rs. " +
                item.price.toLocaleString("en-US") + "\n";

            total += item.price;

        });

        cartMessage += "\nTotal: Rs. " +
            total.toLocaleString("en-US");

        alert(cartMessage);

    }

});


/* =========================
   3. CONTACT FORM VALIDATION
========================= */

const contactForm = document.getElementById("contactForm");

const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function (event) {

    // Stop page refresh
    event.preventDefault();

    // Get input values
    const name = document.getElementById("name").value.trim();

    const email = document.getElementById("email").value.trim();

    const message = document.getElementById("message").value.trim();

    // Check empty fields
    if (name === "" || email === "" || message === "") {

        formMessage.textContent = "Please fill in all fields.";

        formMessage.style.color = "red";

        return;

    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {

        formMessage.textContent = "Please enter a valid email address.";

        formMessage.style.color = "red";

        return;

    }

    // Success message
    formMessage.textContent =
        "Thank you, " + name +
        "! Your message has been submitted successfully.";

    formMessage.style.color = "green";

    // Clear form
    contactForm.reset();

});
