// Function to toggle the navigation menu
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

// Close the menu when clicking outside or on a menu item
document.addEventListener('click', (event) => {
    const navLinks = document.querySelector('.nav-links');
    const hamburger = document.querySelector('.hamburger');

    // Check if the click is outside the menu and hamburger
    if (!navLinks.contains(event.target) && !hamburger.contains(event.target)) {
        navLinks.classList.remove('active');
    }
});

// Close the menu when clicking on a menu item
document.querySelectorAll('.nav-links a').forEach((link) => {
    link.addEventListener('click', () => {
        const navLinks = document.querySelector('.nav-links');
        navLinks.classList.remove('active');
    });
});