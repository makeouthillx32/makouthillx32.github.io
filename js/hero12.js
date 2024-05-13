document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('hero12-container');
    if (!container) {
        console.error('Hero12 container not found');
        return; // Exit if container is not found
    }

    const icons = document.createElement('div');
    icons.className = 'social-icons';
    container.appendChild(icons);

    const socialLinks = [
        { href: 'https://youtube.com/@unenter', imgSrc: 'images/youtube-icon.png', alt: 'YouTube', action: 'Subscribe' },
        { href: 'https://twitter.com/UnenterLIVE', imgSrc: 'images/twitter-icon.png', alt: 'Twitter', action: 'Follow us' },
        { href: 'https://kick.com/unenter', imgSrc: 'images/kick-icon.png', alt: 'Kick', action: 'Follow Me!' },
        { href: 'https://discord.gg/yVZT2tGW96', imgSrc: 'images/discord-icon.png', alt: 'Discord', action: 'Join the Discord' },
        { href: 'https://github.com/makeouthillx32', imgSrc: 'images/github-icon.png', alt: 'GitHub', action: 'Contribute' },
        { href: 'https://ko-fi.com/unenter_', imgSrc: 'images/ko-fi-icon.png', alt: 'Ko-Fi', action: 'Support us' }
    ];

    socialLinks.forEach(link => {
        const a = document.createElement('a');
        a.href = link.href;
        a.className = 'social-icon';

        const img = document.createElement('img');
        img.src = link.imgSrc;
        img.alt = link.alt;

        const actionText = document.createElement('span');
        actionText.textContent = link.action;
        actionText.className = 'action-text';

        a.appendChild(img);
        a.appendChild(actionText);
        icons.appendChild(a);
    });

});