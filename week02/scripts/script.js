// scripts/script.js

document.addEventListener('DOMContentLoaded', function() {
    const currentPath = window.location.pathname; // Get the current URL path
    const navLinks = document.querySelectorAll('nav ul li a'); // Select navigation links
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navUl = document.querySelector('nav ul');

    // Loop through each link and check if it matches the current path
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPath) {
            link.parentNode.classList.add('active'); // Add 'active' class to parent <li> element
        }
    });

    // Toggle nav links visibility on hamburger menu click
    hamburgerMenu.addEventListener('click', function() {
        navUl.classList.toggle('show');
        this.classList.toggle('active');
    });
});
