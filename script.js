document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const hamburgerMenu = document.getElementById('hamburger-menu');

    hamburger.addEventListener('click', function() {
        hamburgerMenu.classList.toggle('show');
    });
});
