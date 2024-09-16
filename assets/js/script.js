document.addEventListener('DOMContentLoaded', function () {

    // Initialize Particle Background
    particlesJS('hero', {
        "particles": {
            "number": {
                "value": 100,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#ffcc00"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 5
                }
            },
            "opacity": {
                "value": 0.5,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 5,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#ffcc00",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 6,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "repulse"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 400,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    });

    // ScrollReveal Animations
    ScrollReveal().reveal('.about-section, .skills-section, .projects-section, .contact-section', {
        delay: 200,
        distance: '50px',
        origin: 'bottom',
        duration: 1000
    });

    // Custom Cursor
    const customCursor = document.querySelector('.custom-cursor');
    document.addEventListener('mousemove', (e) => {
        customCursor.style.top = `${e.clientY}px`;
        customCursor.style.left = `${e.clientX}px`;
    });

    // Hover Effect for Links
    document.querySelectorAll('a').forEach(link => {
        link.addEventListener('mouseover', () => {
            customCursor.style.transform = 'scale(1.5)';
        });
        link.addEventListener('mouseleave', () => {
            customCursor.style.transform = 'scale(1)';
        });
    });

    // Theme Toggle with LocalStorage
    const themeToggle = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        document.body.classList.add(currentTheme);
        themeToggle.textContent = currentTheme === 'dark-mode' ? 'Light Mode' : 'Dark Mode';
    }

    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const theme = document.body.classList.contains('dark-mode') ? 'dark-mode' : 'light-mode';
        localStorage.setItem('theme', theme);
        themeToggle.textContent = theme === 'dark-mode' ? 'Light Mode' : 'Dark Mode';
    });

    // Toggle Mobile Menu
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('nav-active');
    });

    // Close mobile menu when a link is clicked
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('nav-active');
        });
    });

    // Smooth Scroll for navigation links
    const links = document.querySelectorAll('.nav-links a, .back-to-top');
    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50, // Adjust for fixed header
                    behavior: 'smooth'
                });
            }
        });
    });

    // Sticky Header on Scroll
    const header = document.querySelector('header');
    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    });

    // Typing Effect Function
    const typingEffectElement = document.getElementById('typing-effect').querySelector('span');
    const text = "Aspiring AI Engineer | Innovator | Data Enthusiast.";
    let index = 0;

    function typeText() {
        if (index < text.length) {
            typingEffectElement.innerHTML = `${text.substring(0, index + 1)}`;
            index++;
            setTimeout(typeText, 100);
        }
    }

    // Start typing effect immediately
    typeText();
});
