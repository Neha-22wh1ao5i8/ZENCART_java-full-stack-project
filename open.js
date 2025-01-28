// Delivery Location Modal
var locationModal = document.getElementById("locationModal");
var locationBtn = document.getElementById("delivery-location");
var closeLocationModal = locationModal.getElementsByClassName("close")[0];
var saveLocationBtn = document.getElementById("saveLocation");
var locationInput = document.getElementById("locationInput");
var addSec = document.querySelector(".add_sec");

locationBtn.addEventListener("click", function() {
    locationModal.style.display = "block";
});
function redirectToDetailPage(url) {
    window.location.href = url;
}

closeLocationModal.addEventListener("click", function() {
    locationModal.style.display = "none";
});

window.addEventListener("click", function(event) {
    if (event.target == locationModal) {
        locationModal.style.display = "none";
    }
});

saveLocationBtn.addEventListener("click", function() {
    var location = locationInput.value;
    if (location) {
        addSec.textContent = location;
        locationModal.style.display = "none";
    }
});

// Login and Sign-Up Modals
var loginModal = document.getElementById("loginModal");
var signUpModal = document.getElementById("signUpModal");
var loginIcon = document.getElementById("login-icon");
var closeLoginModal = loginModal.getElementsByClassName("close")[0];
var closeSignUpModal = signUpModal.getElementsByClassName("close")[0];
var showSignUpLink = document.getElementById("showSignUp");
var showLoginLink = document.getElementById("showLogin");

loginIcon.addEventListener("click", function() {
    loginModal.style.display = "block";
});

closeLoginModal.addEventListener("click", function() {
    loginModal.style.display = "none";
});

closeSignUpModal.addEventListener("click", function() {
    signUpModal.style.display = "none";
});

window.addEventListener("click", function(event) {
    if (event.target == loginModal) {
        loginModal.style.display = "none";
    }
    if (event.target == signUpModal) {
        signUpModal.style.display = "none";
    }
});

showSignUpLink.addEventListener("click", function() {
    loginModal.style.display = "none";
    signUpModal.style.display = "block";
});

showLoginLink.addEventListener("click", function() {
    signUpModal.style.display = "none";
    loginModal.style.display = "block";
});
document.addEventListener('DOMContentLoaded', function() {
    const yesButton = document.getElementById('yesButton');
    const noButton = document.getElementById('noButton');
    const feedbackForm = document.getElementById('feedbackForm');

    yesButton.addEventListener('click', function() {
        // Disable the "Did you find what you were looking for?" section
        document.querySelector('.feedback-section').style.display = 'none';
    });

    noButton.addEventListener('click', function() {
        // Show the feedback form
        feedbackForm.style.display = 'block';

        // Optionally, you can hide the "Did you find what you were looking for?" section
        document.querySelector('.feedback-section').style.display = 'none';
    });
});
// Select the sorting dropdown
const sortByDropdown = document.getElementById('sort-by');

// Select all product cards
const productCards = document.querySelectorAll('.card');

// Function to compare prices for sorting
function comparePrices(a, b) {
    const priceA = parseFloat(a.querySelector('.price').innerText.replace('₹', '').trim());
    const priceB = parseFloat(b.querySelector('.price').innerText.replace('₹', '').trim());
    return priceA - priceB;
}

// Function to sort and update DOM based on selected option
function sortProducts() {
    const selectedOption = sortByDropdown.value;
    let sortedCards = Array.from(productCards);

    if (selectedOption === 'Price: Low to High') {
        sortedCards.sort(comparePrices);
    } else if (selectedOption === 'Price: High to Low') {
        sortedCards.sort((a, b) => comparePrices(b, a));
    }

    // Remove existing cards
    const productsContainer = document.querySelector('.products');
    productsContainer.innerHTML = '';

    // Append sorted cards back to DOM
    sortedCards.forEach(card => {
        productsContainer.appendChild(card);
    });
}

// Event listener for sorting dropdown change
sortByDropdown.addEventListener('change', sortProducts);

// Initial sorting when the page loads (optional)
sortProducts();
document.addEventListener('DOMContentLoaded', function() {
    const sortBySelect = document.getElementById('sort-by');
    const productsContainer = document.querySelector('.products');

    sortBySelect.addEventListener('change', function() {
        const sortBy = sortBySelect.value;

        if (sortBy === 'popularity') {
            sortByPopularity();
        } else if (sortBy === 'price-low') {
            sortByPriceLowToHigh();
        } else if (sortBy === 'price-high') {
            sortByPriceHighToLow();
        }
    });

    function sortByPopularity() {
        const cards = Array.from(productsContainer.querySelectorAll('.card'));
        cards.sort((a, b) => {
            const popularityA = parseFloat(a.getAttribute('data-popularity'));
            const popularityB = parseFloat(b.getAttribute('data-popularity'));
            return popularityB - popularityA; // Sort descending by popularity
        });

        // Clear and re-append sorted cards
        productsContainer.innerHTML = '';
        cards.forEach(card => productsContainer.appendChild(card));
    }

    function sortByPriceLowToHigh() {
        // Implementation for price sorting ascending
    }

    function sortByPriceHighToLow() {
        // Implementation for price sorting descending
    }

    // Initial sort by popularity
    sortByPopularity();
});