// hero5.js
document.addEventListener('DOMContentLoaded', function() {
    // Watch button interaction
    const watchButton = document.querySelector('.kick-watch-button');
    if (watchButton) {
        watchButton.addEventListener('click', function() {
            window.location.href = 'https://www.kick.com';
        });
    }

    // Apply scaling effect to images on hover
    const streamImage = document.querySelector('.kick-stream-image img');
    if (streamImage) {
        streamImage.addEventListener('mouseenter', function() {
            streamImage.style.transform = 'scale(1.05)';
        });
        streamImage.addEventListener('mouseleave', function() {
            streamImage.style.transform = 'scale(1)';
        });
    }

    // Ensure proper scaling on load and resize
    function adjustScaling() {
        const kickLogo = document.querySelector('.kick-logo');
        const kickContainer = document.querySelector('.kick-container');
        if (kickLogo && kickContainer) {
            const containerWidth = kickContainer.offsetWidth;
            if (containerWidth < 600) {
                kickLogo.style.height = '100px';
            } else if (containerWidth < 800) {
                kickLogo.style.height = '150px';
            } else {
                kickLogo.style.height = '200px';
            }
        }
    }

    // Adjust scaling on window resize
    window.addEvent