// Get DOM elements  
const form = document.getElementById('signin');
const username = document.getElementById('username');
const password = document.getElementById('password');

// Form submit event
form.addEventListener('submit', e => {
    // Prevent default
    e.preventDefault();

    // Validate form  
    if (username.value === '') {
        alert('Please enter username');
    }
    else if (password.value === '') {
        alert('Please enter password');
    }
    else {
        // AJAX code to submit form data to backend
        console.log('Form submitted');

        // Clear inputs
        username.value = '';
        password.value = '';
    }

});

// Username input event for validation
username.addEventListener('keyup', e => {
    if (username.value === '') {
        // Show error  
    } else {
        // Remove error 
    }
})

// Password input event  
password.addEventListener('keyup', e => {

    // Validate password  
    if (password.value === '') {
        // Show error 
    } else {
        // Remove error
    }

});
