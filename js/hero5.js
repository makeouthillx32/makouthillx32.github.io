// hero5.js
document.addEventListener('DOMContentLoaded', function() {
    const hero5 = document.querySelector('.hero5');

    // Content to be added dynamically
    const content = `
        <div class="kick-container">
            <div class="kick-title">
                <h1>Unenter</h1>
                <div class="separator-bar"></div>
                <img src="images/kick-icon.png" alt="Kick Logo" class="kick-logo">
            </div>
            <div class="kick-description">
                <p>I will let you witness my coding skills in real time and leave you inspired and in awe. Uncut and RAW, I'm taming the software with sheer manliness. I work so hard that my clothes can't handle the sweat. I must type without attire even when it means leaving my chiseled abs exposed to your curious eyes. Follow me if you're willing to expose yourself to high amounts of alpha particles.</p>
            </div>
            <div class="kick-stream-image">
                <img src="images/kickp.png" alt="Stream Image">
            </div>
            <a href="https://www.kick.com" class="kick-watch-button">Watch me on KICK.com</a>
            <div class="kick-did-you-know">
                <h3>Did you know...</h3>
                <ul>
                    <li>You can type the name of a color in chat to change the stream and website color.</li>
                    <li>Subscribe to have my receipt printer print your profile picture.</li>
                    <li>You can use chat commands.</li>
                    <li>Show off your badges.</li>
                    <li><a href="#" class="underline">Click here to learn more.</a></li>
                </ul>
            </div>
        </div>
    `;

    // Insert content into hero5 div
    hero5.innerHTML = content;

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
    window.addEventListener('resize', adjustScaling);
    adjustScaling(); // Initial call on page load
});