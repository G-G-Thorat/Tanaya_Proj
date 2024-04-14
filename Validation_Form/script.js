document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the traditional form submission which causes page reload
    validateForm();
});

function validateForm() {
    // Perform all field validations
    const isValidFullName = validateFullName();
    const isValidEmail = validateEmail();
    const isValidPhone = validatePhone();
    const isValidPassword = validatePassword();
    const isValidConfirmPassword = validateConfirmPassword();

    // Check if all validations passed
    if (isValidFullName && isValidEmail && isValidPhone && isValidPassword && isValidConfirmPassword) {
        document.getElementById('successMessage').style.display = 'block'; // Show the success message
        return true; // Allow form submission if form is for real backend submission
    } else {
        document.getElementById('successMessage').style.display = 'none'; // Hide the success message
        return false; // Prevent form submission
    }
}

function addAnotherUser() {
    location.reload(); // Reload the page to start a new registration
    document.getElementById('registrationForm').reset();
}

function validateFullName() {
    const fullName = document.getElementById('fullName');
    if (fullName.value.length < 5) {
        showError(fullName, 'Name must not be less than 5 characters');
        return false;
    } else {
        clearError(fullName);
        return true;
    }
}

function validateEmail() {
    const email = document.getElementById('email');
    if (!email.value.includes('@')) {
        showError(email, 'Enter a correct email');
        return false;
    } else {
        clearError(email);
        return true;
    }
}

function validatePhone() {
    const phone = document.getElementById('phone');
    if (phone.value === '123456789' || phone.value.length !== 10) {
        showError(phone, 'Enter a valid 10-digit phone number');
        return false;
    } else {
        clearError(phone);
        return true;
    }
}

function validatePassword() {
    const password = document.getElementById('password');
    if (password.value.toLowerCase() === 'password' || password.value.length < 8 || password.value.includes(document.getElementById('fullName').value)) {
        showError(password, 'Password is not strong');
        return false;
    } else {
        clearError(password);
        return true;
    }
}

function validateConfirmPassword() {
    const confirmPassword = document.getElementById('confirmPassword');
    if (confirmPassword.value !== document.getElementById('password').value) {
        showError(confirmPassword, 'Passwords do not match');
        return false;
    } else {
        clearError(confirmPassword);
        return true;
    }
}

function showError(input, message) {
    const small = input.nextElementSibling;
    small.style.display = 'block';
    small.innerText = message;
}

function clearError(input) {
    const small = input.nextElementSibling;
    small.style.display = 'none';
}

window.onload = function() {
    document.getElementById('registrationForm').reset();
}

