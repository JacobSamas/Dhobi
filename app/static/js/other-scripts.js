// other-scripts.js

document.addEventListener('DOMContentLoaded', function() {
    // Example of a function to toggle a navigation menu
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('hidden');
        });
    }

    // Function to handle form data for other forms (like order placement)
    function handleFormSubmission(formId, endpoint) {
        const form = document.getElementById(formId);
        if (!form) return;

        form.addEventListener('submit', function(event) {
            event.preventDefault();

            const formData = new FormData(form);
            const data = Object.fromEntries(formData.entries());

            fetch(endpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                // Handle success (like showing a confirmation message)
            })
            .catch(error => {
                console.error('Error:', error);
                // Handle errors (like displaying an error message to the user)
            });
        });
    }

    // Example usage of handleFormSubmission for an order form
    handleFormSubmission('orderForm', '/order');
});
