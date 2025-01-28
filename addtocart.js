document.addEventListener("DOMContentLoaded", function() {
    // Get all remove buttons
    const removeButtons = document.querySelectorAll('.remove-btn');

    // Add event listener to each remove button
    removeButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            // Get the parent cart item element
            const cartItem = button.closest('.cart-item');
            
            // Remove the cart item from the DOM
            cartItem.remove();

            // Enable the edit button
            const editButton = cartItem.querySelector('.edit-btn');
            editButton.disabled = false;

            // Enable the change pincode button
            const changePincodeButton = document.querySelector('.change-pincode');
            changePincodeButton.disabled = false;

            // Enable the continue to checkout button
            const continueCheckoutButton = document.querySelector('.checkout-btn');
            continueCheckoutButton.disabled = false;

            // Enable the continue shopping button
            const continueShoppingButton = document.querySelector('.continue-shopping-btn');
            continueShoppingButton.disabled = false;

            // Recalculate price details
            updatePriceDetails();
        });
    });

    // Function to update price details
    function updatePriceDetails() {
        const cartItems = document.querySelectorAll('.cart-item');
        const totalPrice = Array.from(cartItems).reduce((total, cartItem) => {
            const price = parseFloat(cartItem.querySelector('.price span').innerText.slice(1));
            return total + price;
        }, 0);

        // Update price details
        const priceElements = document.querySelectorAll('.price-details span');
        priceElements[0].innerText = `₹${totalPrice}`;
        priceElements[1].innerText = `₹${totalPrice - 503}`; // Assuming the discount is ₹503
        priceElements[2].innerText = `₹${totalPrice}`;
        
        // Update shopping cart count
        const cartCount = document.querySelector('.cart h1');
        cartCount.innerText = `Shopping Cart (${cartItems.length})`;

        // Remove the savings message
        const savingsMessage = document.querySelector('.savings');
        savingsMessage.innerText = '';
    }

    // Add event listener to continue shopping button
    const continueShoppingButton = document.querySelector('.continue-shopping-btn');
    continueShoppingButton.addEventListener('click', function() {
        // Redirect to another page for continuing shopping
        window.location.href = 'open.html';
    });

    // Add event listener to continue to checkout button
    const continueCheckoutButton = document.querySelector('.checkout-btn');
    continueCheckoutButton.addEventListener('click', function() {
        // Redirect to another page for checkout
        window.location.href = 'checkoutpage';
    });

    // Add event listener to change pincode button
    const changePincodeButton = document.querySelector('.change-pincode');
    changePincodeButton.addEventListener('click', function() {
        // Clear the input field value
        const pincodeInput = document.querySelector('.delivery input[type="text"]');
        pincodeInput.value = '';
    });

    // Initial update of price details
    updatePriceDetails();
});
function updatePriceDetails() {
    const cartItems = document.querySelectorAll('.cart-item');
    const totalPrice = Array.from(cartItems).reduce((total, cartItem) => {
        const price = parseFloat(cartItem.querySelector('.price span').innerText.slice(1));
        return total + price;
    }, 0);

    // Update shopping cart count
    const cartCount = document.querySelector('.cart h1');
    cartCount.innerText = `Shopping Cart (${cartItems.length})`;

    // Hide the price details section
    const priceDetailsSection = document.querySelector('.price-details');
    priceDetailsSection.style.display = 'none';
}