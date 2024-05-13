document.addEventListener('DOMContentLoaded', function () {
    const youtubeText = document.getElementById('youtube-animated');
    const text = 'YouTube';
    
    // Clear the original text
    youtubeText.textContent = '';
    
    // Split the text into individual characters
    text.split('').forEach((char, index) => {
        const span = document.createElement('span');
        span.textContent = char;
        span.classList.add('letter');
        
        // Apply different delays to each letter
        span.style.animationDelay = `${index * 0.1}s`;
        
        youtubeText.appendChild(span);
    });
});
