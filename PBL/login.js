// script.js
// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Show login popup after 7 seconds
    setTimeout(showLoginPopup, 7000);

    // Add click event listener to login button
    document.getElementById('loginButton').addEventListener('click', showLoginPopup);
});

function showLoginPopup() {
    const popup = document.getElementById('loginPopup');
    popup.style.display = 'flex';
}

function closeLoginPopup() {
    const popup = document.getElementById('loginPopup');
    popup.style.display = 'none';
}

function handleLogin(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Here you would typically send these credentials to your server
    console.log('Login attempt:', { username, password });
    
    // For demo purposes, show success message and close popup
    alert('Login successful!');
    closeLoginPopup();
}

// Close popup when clicking outside the login container
document.getElementById('loginPopup').addEventListener('click', (event) => {
    if (event.target.id === 'loginPopup') {
        closeLoginPopup();
    }
});