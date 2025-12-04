 // Hamburger Menu
        const hamburger = document.getElementById('hamburger');
        const navLinks = document.getElementById('navLinks');

        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Close menu when clicking on a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });

        // Smooth Scroll
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Scroll to Top Button
        const scrollBtn = document.getElementById('scrollTop');
        
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                scrollBtn.classList.add('visible');
            } else {
                scrollBtn.classList.remove('visible');
            }
        });

        function scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }

        // Animated Counter for Stats
        function animateCounter(id, start, end, duration) {
            let obj = document.getElementById(id);
            let startTime = null;
            let step = (timestamp) => {
                if (!startTime) startTime = timestamp;
                const progress = Math.min((timestamp - startTime) / duration, 1);
                obj.innerHTML = Math.floor(progress * (end - start) + start);
                if (progress < 1) {
                    window.requestAnimationFrame(step);
                }
            };
            window.requestAnimationFrame(step);
        }

        // Initialize counters when in view
        const statsSection = document.getElementById('stats');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounter('stat1', 0, 140, 2000);
                    animateCounter('stat2', 0, 7, 2000);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        observer.observe(statsSection);

        // Form Submission
        document.getElementById('contactForm').addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('name').value;
            
            // Create a more attractive success message
            const form = e.target;
            const originalBtn = form.querySelector('.submit-btn');
            const originalText = originalBtn.innerHTML;
            
            originalBtn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
            originalBtn.style.background = 'linear-gradient(135deg, #25D366, #128C7E)';
            
            setTimeout(() => {
                originalBtn.innerHTML = originalText;
                originalBtn.style.background = 'linear-gradient(135deg, var(--accent), var(--purple))';
                alert(`Thank you ${name}! Our luxury concierge will contact you within 24 hours.`);
                form.reset();
            }, 2000);
        });

        // Parallax Effect on Home Section
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallax = document.querySelector('.parallax-bg');
            if (parallax) {
                parallax.style.transform = `translateY(${scrolled * 0.5}px)`;
            }
        });

        // Enhanced Scroll Animation
        const fadeObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animated');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.detail-card, .amenity-item, .stat-item').forEach(el => {
            fadeObserver.observe(el);
        });

        // Add floating particles
        function createParticles() {
            const container = document.querySelector('.floating-elements');
            for (let i = 0; i < 5; i++) {
                const particle = document.createElement('div');
                particle.classList.add('float-element');
                particle.style.width = `${Math.random() * 60 + 30}px`;
                particle.style.height = particle.style.width;
                particle.style.top = `${Math.random() * 100}%`;
                particle.style.left = `${Math.random() * 100}%`;
                particle.style.animationDelay = `${Math.random() * 10}s`;
                particle.style.animationDuration = `${Math.random() * 10 + 15}s`;
                container.appendChild(particle);
            }
        }

        createParticles();