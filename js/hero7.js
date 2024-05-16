// hero7.js
document.addEventListener('DOMContentLoaded', function() {
    const hero7 = document.getElementById('hero7');

    // Create the container for GIFs and text
    const container = document.createElement('div');
    container.className = 'hero7-container';
    hero7.appendChild(container);

    // Create wrapper for GIF Image 1 (on the left)
    const gifWrapper1 = document.createElement('div');
    gifWrapper1.className = 'gif-wrapper';

    // Create GIF Image 1
    const gif1 = document.createElement('img');
    gif1.src = 'images/Hero7gif1.gif'; // Adjust path as necessary
    gif1.alt = 'Creative Design 1';
    gif1.style.cursor = 'pointer';

    // Create caption for GIF1
    const caption1 = document.createElement('div');
    caption1.textContent = 'Pick me!';
    caption1.className = 'hero7-caption';

    // Append GIF and caption to wrapper
    gifWrapper1.appendChild(gif1);
    gifWrapper1.appendChild(caption1);

    // Create central text
    const text = document.createElement('div');
    text.textContent = 'REPOST YOURSELF TO GROW!';
    text.className = 'hero7-text';

    // Create wrapper for GIF Image 2 (on the right)
    const gifWrapper2 = document.createElement('div');
    gifWrapper2.className = 'gif-wrapper';

    // Create GIF Image 2 (mirrored)
    const gif2 = document.createElement('img');
    gif2.src = 'images/hero7gif2.gif'; // Adjust path as necessary
    gif2.alt = 'Creative Design 2';
    gif2.style.cursor = 'pointer';
    gif2.style.transform = 'scaleX(-1)'; // Mirror the second GIF

    // Create caption for GIF2
    const caption2 = document.createElement('div');
    caption2.textContent = 'No, pick me!';
    caption2.className = 'hero7-caption';

    // Append GIF and caption to wrapper
    gifWrapper2.appendChild(gif2);
    gifWrapper2.appendChild(caption2);

    // Append wrappers and text to container
    container.appendChild(gifWrapper1);
    container.appendChild(text);
    container.appendChild(gifWrapper2);

    // Event Listener for GIF Clicks
    function redirectToLink() {
        window.location.href = 'https://www.facebook.com/groups/959294042173680/';  // Replace with your URL
    }
    gif1.addEventListener('click', redirectToLink);
    gif2.addEventListener('click', redirectToLink);
});
