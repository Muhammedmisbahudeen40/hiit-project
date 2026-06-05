// --- EXISTING MOBILE MENU LOGIC (Keep this at the top) ---
const mobileMenuButton = document.getElementById('mobile-menu');
const navLinksContainer = document.getElementById('nav-links');

if (mobileMenuButton && navLinksContainer) {
    mobileMenuButton.addEventListener('click', () => {
        navLinksContainer.classList.toggle('active');
    });
}

// --- NEW JAVASCRIPT CONTACT FORM VALIDATION ---
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function (event) {
        // 1. Stop the form from submitting automatically
        event.preventDefault();

        // 2. Grab all the input values and elements
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const messageInput = document.getElementById('message');

        const nameValue = nameInput.value.trim();
        const emailValue = emailInput.value.trim();
        const messageValue = messageInput.value.trim();

        // 3. Clear out any previous error messages and styling
        clearErrors();

        let isFormValid = true;

        // 4. Validate Full Name
        if (nameValue === "") {
            showError(nameInput, 'nameError', 'Full name is required.');
            isFormValid = false;
        } else if (nameValue.length < 3) {
            showError(nameInput, 'nameError', 'Name must be at least 3 characters.');
            isFormValid = false;
        }

        // 5. Validate Email Address
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (emailValue === "") {
            showError(emailInput, 'emailError', 'Email address is required.');
            isFormValid = false;
        } else if (!emailPattern.test(emailValue)) {
            showError(emailInput, 'emailError', 'Please enter a valid email address.');
            isFormValid = false;
        }

        // 6. Validate Message Textarea
        if (messageValue === "") {
            showError(messageInput, 'messageError', 'Message context cannot be empty.');
            isFormValid = false;
        } else if (messageValue.length < 10) {
            showError(messageInput, 'messageError', 'Message must be at least 10 characters long.');
            isFormValid = false;
        }

        // 7. If everything passes validation, submit the form to the backend endpoint
        if (isFormValid) {
            contactForm.submit();
        }
    });
}

// Helper function to insert error text and add dynamic error styling
function showError(inputElement, errorSpanId, errorMessage) {
    const errorSpan = document.getElementById(errorSpanId);
    errorSpan.textContent = errorMessage;
    errorSpan.style.display = 'block';
    inputElement.classList.add('input-error'); // Adds red border
}

// Helper function to remove old validation states
function clearErrors() {
    const errorSpans = document.querySelectorAll('.error-message');
    errorSpans.forEach(span => {
        span.textContent = '';
        span.style.display = 'none';
    });

    const errorInputs = document.querySelectorAll('.form-group input, .form-group textarea');
    errorInputs.forEach(input => {
        input.classList.remove('input-error');
    });
}



