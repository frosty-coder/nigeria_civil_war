
        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
        
        // Animate elements when they come into view
        const observerOptions = {
            threshold: 0.1
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);
        
        // Observe all elements that should be animated
        document.querySelectorAll('.image-container, .timeline-item, .fact-card, .involvement-column, .legacy-content').forEach(el => {
            observer.observe(el);
        });
        
        // Add animation delay to stagger timeline items and fact cards
        document.querySelectorAll('.timeline-item').forEach((item, index) => {
            item.style.transitionDelay = `${index * 0.2}s`;
        });
        
        document.querySelectorAll('.fact-card').forEach((card, index) => {
            card.style.transitionDelay = `${index * 0.15}s`;
        });
        
        document.querySelectorAll('.involvement-column').forEach((column, index) => {
            column.style.transitionDelay = `${index * 0.2}s`;
        });