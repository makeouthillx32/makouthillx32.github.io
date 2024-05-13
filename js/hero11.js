document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('hero11-container');
    if (!container) {
        console.error('Hero11 container not found');
        return;
    }

    // Create the Ko-Fi link and block
    const koFiLink = document.createElement('a');
    koFiLink.href = 'https://ko-fi.com/unenter_   '; // Replace 'yourusername' with your actual Ko-Fi username
    koFiLink.className = 'ko-fi';
    koFiLink.style.textDecoration = 'none'; // To remove any underline from the link
    container.appendChild(koFiLink);

    // Add the title
    const title = document.createElement('span');
    title.textContent = 'Ko-Fi';
    title.style.fontSize = '24px';
    title.style.fontWeight = 'bold';
    title.style.marginRight = '10px';
    koFiLink.appendChild(title);

    // Image container for normal and hover images
    const imgContainer = document.createElement('div');
    imgContainer.className = 'image-container';
    koFiLink.appendChild(imgContainer);

    // Add the normal image inside the link
    const img = document.createElement('img');
    img.src = 'images/ko-fi-logo.png';
    img.alt = 'Ko-Fi logo';
    img.className = 'normal-image';
    imgContainer.appendChild(img);

    // Add the hover image
    const hoverImg = document.createElement('img');
    hoverImg.src = 'images/ko-fi-logo-hover.png'; // Ensure the path is correct
    hoverImg.alt = 'Ko-Fi logo';
    hoverImg.className = 'hover-image';
    imgContainer.appendChild(hoverImg);

    // Add the main text
    const text = document.createElement('p');
    text.textContent = 'You can now buy me a Water!';
    text.style.color = 'black';
    koFiLink.appendChild(text);
});
