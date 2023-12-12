//validate of the form to fill every bolck is filled
// Get form element
const registrationForm = document.getElementById('registration-form');

// Add submit event listener 
registrationForm.addEventListener('submit', (e) => {

    // Prevent default form submission
    e.preventDefault();

    // Validate form
    if (validateForm()) {

        // Get form values  
        const name = registrationForm['name'].value;
        const rollNo = registrationForm['rollNo'].value;
        const section = registrationForm['section'].value;
        const department = registrationForm['department'].value;

        // Create user object
        const user = {
            name,
            rollNo,
            section,
            department
        };

        // Make POST request to API to register user 
        registerUser(user);

    }

});

// Validate form
function validateForm() {
    // Validate all inputs
    // Return true if valid otherwise false
}

// API register function 
async function registerUser(user) {

    const apiURL = '/register';

    const response = await fetch(apiURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    });

    const data = await response.json();
    console.log(data);
}
