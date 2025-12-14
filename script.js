// script.js

// Authentication state
let isLoggedIn = false;

// Demo credentials
const validCredentials = {
    username: 'admin',
    password: 'password123'
};

// Login form handler
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');

    // Validate credentials
    if (username === validCredentials.username && password === validCredentials.password) {
        // Successful login
        isLoggedIn = true;
        errorMessage.style.display = 'none';
        
        // Hide login page and show portfolio
        document.getElementById('loginPage').style.display = 'none';
        document.getElementById('portfolioContent').style.display = 'block';
        
        // Smooth scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
        // Failed login
        errorMessage.textContent = 'Invalid username or password. Please try again.';
        errorMessage.style.display = 'block';
        
        // Clear password field
        document.getElementById('password').value = '';
    }
});

// Logout function
function logout() {
    if (confirm('Are you sure you want to logout?')) {
        isLoggedIn = false;
        
        // Show success message
        alert('You have been successfully logged out.');
        
        // Hide portfolio and show login page
        document.getElementById('portfolioContent').style.display = 'none';
        document.getElementById('loginPage').style.display = 'flex';
        
        // Clear form fields
        document.getElementById('loginForm').reset();
        document.getElementById('errorMessage').style.display = 'none';
        
        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

// Contact form handler
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const successMessage = document.getElementById('successMessage');
    const name = this.name.value;
    
    // Show success message
    successMessage.textContent = `Thank you, ${name}! Your message has been sent successfully. We'll get back to you soon.`;
    successMessage.style.display = 'block';
    
    // Reset form
    this.reset();
    
    // Hide success message after 5 seconds
    setTimeout(() => {
        successMessage.style.display = 'none';
    }, 5000);
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Input validation for real-time feedback
const inputs = document.querySelectorAll('input[required], textarea[required]');
inputs.forEach(input => {
    input.addEventListener('blur', function() {
        if (!this.value.trim()) {
            this.style.borderColor = '#ff6b6b';
        } else {
            this.style.borderColor = '#48bb78';
        }
    });

    input.addEventListener('focus', function() {
        this.style.borderColor = '#667eea';
    });
});

// Email validation
const emailInputs = document.querySelectorAll('input[type="email"]');
emailInputs.forEach(input => {
    input.addEventListener('blur', function() {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (this.value && !emailRegex.test(this.value)) {
            this.style.borderColor = '#ff6b6b';
        } else if (this.value) {
            this.style.borderColor = '#48bb78';
        }
    });
});
