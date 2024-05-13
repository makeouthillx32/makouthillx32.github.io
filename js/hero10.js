document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('hero10-container');
    if (!container) {
        console.error('Hero10 container not found');
        return;
    }

    // Create the affiliate ad block
    const affiliateAd = document.createElement('div');
    affiliateAd.className = 'affiliate-ad';
    container.appendChild(affiliateAd);

    // Add a title
    const title = document.createElement('h2');
    title.textContent = 'Unenter Discounts';
    title.className = 'affiliate-title';
    affiliateAd.appendChild(title);  // Add title to the affiliate ad block

    // Add an image
    const img = document.createElement('img');
    img.src = 'images/your-affiliate-image.png'; // Ensure this is your correct image path
    img.alt = 'Affiliate Promotion Image';
    img.className = 'affiliate-image';
    affiliateAd.appendChild(img);

    // Add the affiliate link
    const link = document.createElement('a');
    link.href = 'https://shareasale.com/r.cfm?b=2561310&u=4190696&m=114666&urllink=&afftrack=';
    link.textContent = 'Enjoy $20 OFF OBSBOT Tail Air on Mother\'s Day';
    link.className = 'affiliate-button';
    affiliateAd.appendChild(link);
});
