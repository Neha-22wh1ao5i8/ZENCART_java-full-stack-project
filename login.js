document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const loginEmail = document.getElementById('loginEmail');
    const loginPassword = document.getElementById('loginPassword');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        let isValid = true;
        let errorMessage = '';

        // Clear previous error messages
        clearErrors();

        // Check if email is filled out
        if (!loginEmail.value) {
            isValid = false;
            errorMessage += 'Email is required.\n';
            showError(loginEmail, 'Email is required.');
        } else if (!validateEmail(loginEmail.value)) {
            isValid = false;
            errorMessage += 'Email is not valid.\n';
            showError(loginEmail, 'Email is not valid.');
        }

        // Check if password is filled out
        if (!loginPassword.value) {
            isValid = false;
            errorMessage += 'Password is required.\n';
            showError(loginPassword, 'Password is required.');
        }

        if (isValid) {
            // Submit the form
            loginForm.submit();
        } else {
            alert(errorMessage);
        }
    });

    function validateEmail(email) {
        const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return re.test(String(email).toLowerCase());
    }

    function showError(input, message) {
        const formGroup = input.parentElement;
        const errorElement = document.createElement('div');
        errorElement.className = 'error-message';
        errorElement.innerText = message;
        formGroup.appendChild(errorElement);
    }

    function clearErrors() {
        const errorMessages = document.querySelectorAll('.error-message');
        errorMessages.forEach(message => message.remove());
    }
});
