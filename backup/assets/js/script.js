// JavaScript for Interactive Features - script.js

document.addEventListener('DOMContentLoaded', function () {
    // Toggle Mobile Menu
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    const typingEffectElement = document.getElementById('typing-effect');

    const text = "I know, it's bad right? 😂";
    let index = 0;

    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Smooth Scroll
    const links = document.querySelectorAll('.nav-links a, .back-to-top');
    for (const link of links) {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth',
            });
        });
    }

    // Sticky Header
    const header = document.querySelector('header');
    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    });

    function typeText() {
        if (index < text.length) {
            typingEffectElement.innerHTML = <span>${text.substring(0, index + 1)}</span>;
            index++;
            setTimeout(typeText, 100);
        }
    }

    // Start typing effect immediately
    typeText();
});