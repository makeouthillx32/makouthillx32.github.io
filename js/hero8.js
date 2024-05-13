// hero8.js
document.addEventListener('DOMContentLoaded', function() {
    var container = document.querySelector('.hero8');
    if (!container) return;

    var content = document.createElement('div');
    content.className = 'hero8-content';

    var textContainer = document.createElement('div');
    textContainer.className = 'hero8-text';

    var imageContainer = document.createElement('div');
    imageContainer.className = 'hero8-img-container';

    var twitterHeader = document.createElement('h2');
    twitterHeader.textContent = 'Twitter';
    twitterHeader.style.color = 'white';
    twitterHeader.style.fontSize = '60px';

    var message = document.createElement('div');
    message.textContent = 'Follow me on Twitter for updates and announcements.';
    message.style.color = 'white';
    message.style.fontSize = '30px';
    message.style.textAlign = 'center';

    var profileLink = document.createElement('a');
    profileLink.href = 'https://twitter.com/UnenterLIVE';
    profileLink.textContent = 'Visit profile';
    profileLink.style.color = '#1DA1F2'; 
    profileLink.className = 'twitter-link'; // Assign class for styling

    // Appending elements to text container
    textContainer.appendChild(twitterHeader);
    textContainer.appendChild(message);
    textContainer.appendChild(profileLink);

    var twitterImage = document.createElement('img');
    twitterImage.src = 'images/path_to_your_twitter_post_image.png';
    twitterImage.style.width = '100%';
    imageContainer.appendChild(twitterImage);

    content.appendChild(textContainer);
    content.appendChild(imageContainer);
    container.appendChild(content);

    // Adding click event for ripple effect
    profileLink.addEventListener('click', function(e) {
        e.preventDefault();
        var ripple = document.createElement('span');
        ripple.className = 'ripple';
        ripple.style.left = e.clientX - this.getBoundingClientRect().left + 'px';
        ripple.style.top = e.clientY - this.getBoundingClientRect().top + 'px';
        this.appendChild(ripple);
        setTimeout(function() {
            ripple.remove();
        }, 800); // Ripple effect duration
    });
});
