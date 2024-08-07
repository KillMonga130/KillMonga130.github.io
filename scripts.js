// script.js

document.querySelector('.info_more-btn').addEventListener('click', function() {
    document.querySelector('.sidebar-info_more').classList.toggle('active');
});

// Smooth scrolling for navigation links
document.querySelectorAll('.navbar-link').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelectorAll('.navbar-link').forEach(link => link.classList.remove('active'));
        this.classList.add('active');
        document.querySelector(this.getAttribute('data-nav-link')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
