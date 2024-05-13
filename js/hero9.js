document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('hero9-container');
    if (!container) {
        console.error('Hero9 container not found');
        return;
    }

    // Image or GIF
    const imageDiv = document.createElement('div');
    imageDiv.className = 'discord-image';
    const image = document.createElement('img');
    image.src = '/images/dissycord.gif';
    image.alt = 'Discord Community';
    image.style.cursor = 'pointer';
    imageDiv.appendChild(image);
    image.onmouseenter = function() {
        this.classList.add('hover-effect');
    };
    image.onmouseleave = function() {
        this.classList.remove('hover-effect');
    };

    // Append the image to the container
    container.appendChild(imageDiv);

    // Button
    const button = document.createElement('button');
    button.textContent = 'Join Now';
    button.className = 'join-button';
    button.onclick = function() { window.location.href = 'https://discord.gg/yVZT2tGW96'; };
    button.onmouseenter = function() {
        this.classList.add('hover-effect');
    };
    button.onmouseleave = function() {
        this.classList.remove('hover-effect');
    };
    container.appendChild(button);
});
