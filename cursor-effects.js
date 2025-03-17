document.addEventListener('DOMContentLoaded', () => {
    // Create cursor glow element
    const cursorGlow = document.createElement('div');
    cursorGlow.className = 'cursor-glow';
    document.body.appendChild(cursorGlow);

    // Variables for smooth cursor movement
    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    let isHovering = false;

    // Track cursor movement with smooth animation
    function updateCursorPosition() {
        // Smooth interpolation
        cursorX += (mouseX - cursorX) * 0.1;
        cursorY += (mouseY - cursorY) * 0.1;

        // Update cursor position
        cursorGlow.style.left = `${cursorX}px`;
        cursorGlow.style.top = `${cursorY}px`;

        // Continue animation
        requestAnimationFrame(updateCursorPosition);
    }

    // Handle mouse movement
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    // Add hover effect to containers
    const containers = document.querySelectorAll('.feature-card, .data-card, .request-card');
    
    containers.forEach(container => {
        container.addEventListener('mouseenter', () => {
            isHovering = true;
            cursorGlow.classList.add('active');
            
            // Add hover effect to container
            container.style.transform = 'translateY(-5px)';
            container.style.boxShadow = '0 10px 30px rgba(43, 255, 255, 0.2)';
            container.style.borderColor = '#2bffff';
        });

        container.addEventListener('mouseleave', () => {
            isHovering = false;
            cursorGlow.classList.remove('active');
            
            // Remove hover effect from container
            container.style.transform = 'translateY(0)';
            container.style.boxShadow = 'none';
            container.style.borderColor = '';
        });

        container.addEventListener('mousemove', (e) => {
            if (!isHovering) return;

            const rect = container.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            // Update container's glow position
            container.style.setProperty('--glow-x', `${x}px`);
            container.style.setProperty('--glow-y', `${y}px`);

            // Add subtle rotation based on cursor position
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;
            
            container.style.transform = `translateY(-5px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });
    });

    // Start cursor animation
    updateCursorPosition();
}); 