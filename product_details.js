document.addEventListener('DOMContentLoaded', () => {
    // Wishlist button event listener
    const addToWishlistButton = document.getElementById('addToWishlistButton');
    const wishlistIcon = document.querySelector('.header-icons a[href="wishlist.html"]');
    
    let wishlistCount = 0;

    addToWishlistButton.addEventListener('click', () => {
        wishlistCount += 1;
        // Update the wishlist icon with the count
        wishlistIcon.innerHTML = `<i class="fa-regular fa-heart"></i> (${wishlistCount})`;
        // Redirect to wishlist page
        window.location.href = 'wishlist.html';
    });

    // Buy Now button event listener
    const buyNowButton = document.getElementById('buyNowButton');
    buyNowButton.addEventListener('click', () => {
        // Redirect to the desired page
        window.location.href = 'checkout.html'; // Change 'checkout.html' to your desired URL
    });
});

function checkPreview() {
    alert('Preview functionality is not yet implemented.');
}

function addToCart() {
    alert('Item added to cart.');
}

function openModal() {
    document.getElementById('reviewModal').style.display = "block";
}

function closeModal() {
    document.getElementById('reviewModal').style.display = "none";
}

document.getElementById('reviewForm').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Review submitted.');
    closeModal();
});

window.onclick = function (event) {
    var modal = document.getElementById('reviewModal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
