// register.js

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    
    // Get form elements
    const fullname = document.getElementById('fullname');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const password = document.getElementById('password');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission
  
      let valid = true;
      let errorMessage = '';
  
      // Validate Full Name
      if (fullname.value.trim() === '') {
        valid = false;
        errorMessage = 'Full Name is required.';
        showError(fullname, errorMessage);
      } else {
        removeError(fullname);
      }
  
      // Validate Email
      if (email.value.trim() === '') {
        valid = false;
        errorMessage = 'Email is required.';
        showError(email, errorMessage);
      } else if (!validateEmail(email.value.trim())) {
        valid = false;
        errorMessage = 'Please enter a valid email address.';
        showError(email, errorMessage);
      } else {
        removeError(email);
      }
  
      // Validate Phone Number
      if (phone.value.trim() === '') {
        valid = false;
        errorMessage = 'Phone Number is required.';
        showError(phone, errorMessage);
      } else if (!/^\d{10}$/.test(phone.value.trim())) {
        valid = false;
        errorMessage = 'Phone Number must be 10 digits.';
        showError(phone, errorMessage);
      } else {
        removeError(phone);
      }
  
      // Validate Password
      if (password.value.trim() === '') {
        valid = false;
        errorMessage = 'Password is required.';
        showError(password, errorMessage);
      } else if (password.value.length < 6) {
        valid = false;
        errorMessage = 'Password must be at least 6 characters long.';
        showError(password, errorMessage);
      } else {
        removeError(password);
      }
  
      // If all fields are valid, display success message
      if (valid) {
        form.reset(); // Reset the form for a fresh start
        showSuccessMessage(); // Display success message
      }
    });
  
    // Function to show error message
    function showError(input, message) {
      let formGroup = input.closest('.mb-3');
      let errorSpan = formGroup.querySelector('.error-message');
  
      if (!errorSpan) {
        errorSpan = document.createElement('span');
        errorSpan.classList.add('text-danger', 'error-message');
        formGroup.appendChild(errorSpan);
      }
  
      errorSpan.textContent = message;
    }
  
    // Function to remove error message
    function removeError(input) {
      let formGroup = input.closest('.mb-3');
      let errorSpan = formGroup.querySelector('.error-message');
      
      if (errorSpan) {
        errorSpan.remove();
      }
    }
  
    // Email validation helper function
    function validateEmail(email) {
      const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      return regex.test(email);
    }

    // Function to show success message
    function showSuccessMessage() {
      // Create success message div
      const successMessageDiv = document.createElement('div');
      successMessageDiv.classList.add('alert', 'alert-success', 'mt-3');
      successMessageDiv.textContent = 'Registration Successful!';
      
      // Insert the success message after the form
      const formContainer = document.querySelector('.card');
      formContainer.appendChild(successMessageDiv);
    }
});
