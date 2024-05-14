// This file is optional and can be used to add interactivity to your website, like toggling menus or animations.

// Example: Add a click event listener to the navigation links

const navLinks = document.querySelectorAll('header nav a');

navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    // Handle link click here
  });
});