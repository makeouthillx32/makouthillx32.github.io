document.addEventListener('DOMContentLoaded', function() {
    const hero7Container = document.getElementById('hero7');

    // Create GIF Image 1 (on the right)
    const gif1 = document.createElement('img');
    gif1.src = 'images/Hero7gif1.gif'; // Adjust path as necessary
    gif1.alt = 'Creative Design 1';
    gif1.style.width = '100px';
    gif1.style.height = 'auto';
    gif1.style.position = 'absolute';
    gif1.style.top = '45%';
    gif1.style.right = '25%';  // Moved to the right
    gif1.style.transform = 'translate(50%, -50%) scaleX(-1)';  // This flips the image horizontally
    gif1.style.cursor = 'pointer';

    // Create GIF Image 2 (on the left)
    const gif2 = document.createElement('img');
    gif2.src = 'images/hero7gif2.gif'; // Adjust path as necessary
    gif2.alt = 'Creative Design 2';
    gif2.style.width = '100px';
    gif2.style.height = 'auto';
    gif2.style.position = 'absolute';
    gif2.style.top = '50%';
    gif2.style.left = '25%';  // Moved to the left
    gif2.style.transform = 'translate(-50%, -50%)';
    gif2.style.cursor = 'pointer';
    gif2.style.scale = '120%';


    // Append GIFs to the container
    hero7Container.appendChild(gif1);
    hero7Container.appendChild(gif2);

    // Create caption for GIF1
    const caption1 = document.createElement('div');
    caption1.textContent = 'No, pick me!';
    caption1.style.position = 'absolute';
    caption1.style.top = '75%';  // Lower positioning
    caption1.style.right = '25%';
    caption1.style.transform = 'translate(50%, -50%)';
    caption1.style.textAlign = 'center';
    caption1.style.color = 'white';
    caption1.style.fontSize = '16px';  // Standard font size

    // Create caption for GIF2
    const caption2 = document.createElement('div');
    caption2.textContent = 'Pick me!';
    caption2.style.position = 'absolute';
    caption2.style.top = '75%';  // Lower positioning
    caption2.style.left = '25%';
    caption2.style.transform = 'translate(-50%, -50%)';
    caption2.style.textAlign = 'center';
    caption2.style.color = 'white';
    caption2.style.fontSize = '16px';  // Standard font size

    // Append captions to the container
    hero7Container.appendChild(caption1);
    hero7Container.appendChild(caption2);

    // Create central text
    const text = document.createElement('div');
    text.textContent = 'REPOST YOURSELF TO GROW!';
    text.style.position = 'absolute';
    text.style.top = '50%';  // Adjusted for your earlier requirement
    text.style.left = '50%';
    text.style.transform = 'translateX(-50%)';
    text.style.textAlign = 'center';
    text.style.color = 'white';
    text.style.fontSize = '24px';
    text.style.fontFamily = '"Poetsen One", sans-serif';  // Apply the Poetsen One font
    
    // Append text to the container
    hero7Container.appendChild(text);


    // Event Listener for GIF Clicks
    function redirectToLink() {
        window.location.href = 'https://www.facebook.com/groups/959294042173680/';  // Replace with your URL
    }
    gif1.addEventListener('click', redirectToLink);
    gif2.addEventListener('click', redirectToLink);
});
