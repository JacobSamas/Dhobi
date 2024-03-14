document.addEventListener('DOMContentLoaded', function() {
    const signupForm = document.getElementById('signupForm');

    signupForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Collect form data
        const formData = new FormData(signupForm);
        const userData = {
            username: formData.get('username'),
            email: formData.get('email'),
            password: formData.get('password')
        };

        // Basic front-end validation (can be expanded)
        if (!userData.username || !userData.email || !userData.password) {
            alert('Please fill in all fields.');
            return;
        }

        // Send request to the Flask backend
        fetch('/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            // Redirect to the login page or show success message
            window.location.href = '/login';
        })
        .catch((error) => {
            console.error('Error:', error);
            // Handle errors, e.g., display error message to the user
        });
    });
});
