document.addEventListener('DOMContentLoaded', function() {
    const hero6Container = document.querySelector('.hero6');
    if (!hero6Container) {
        console.error('Hero6 container not found');
        return;
    }

    // Create title and subtitle at the top
    const title = document.createElement('h2');
    title.classList.add('text-white', 'text-center', 'mt-10', 'text-3xl', 'font-bold');
    title.textContent = 'Twitch';
    hero6Container.appendChild(title);

    const subtitle = document.createElement('p');
    subtitle.classList.add('text-white', 'text-center', 'mb-5');
    subtitle.textContent = 'Come watch me in my artificial habitat.';
    hero6Container.appendChild(subtitle);

    // Create container for the fallback image with rounded corners
    const videoContainer = document.createElement('div');
    videoContainer.id = 'video-container';
    videoContainer.classList.add('rounded-xl', 'shadow-md', 'mx-auto', 'p-4', 'bg-transparent', 'relative');
    videoContainer.style.width = '80%';
    videoContainer.style.maxWidth = '800px';
    hero6Container.appendChild(videoContainer);

    // Create fallback image for the "not live" state
    const fallbackContainer = document.createElement('div');
    fallbackContainer.id = 'fallback-container';
    fallbackContainer.classList.add('relative');
    videoContainer.appendChild(fallbackContainer);

    const fallbackImage = document.createElement('img');
    fallbackImage.src = 'images/NOIRL.webp'; // Path to your placeholder image
    fallbackImage.alt = 'Fallback Image';
    fallbackImage.classList.add('rounded-xl', 'w-full');
    fallbackContainer.appendChild(fallbackImage);

    // Create the "Visit my channel on Twitch!" button below the image
    const visitChannelButtonContainer = document.createElement('div');
    visitChannelButtonContainer.classList.add('text-center', 'mt-4');
    hero6Container.appendChild(visitChannelButtonContainer);

    const visitChannelButton = document.createElement('a');
    visitChannelButton.href = 'https://www.twitch.tv/unenter'; // Replace with your channel
    visitChannelButton.target = '_blank';
    visitChannelButton.classList.add('visit-channel-button', 'text-xl', 'font-bold', 'rounded-md', 'p-3');
    visitChannelButton.textContent = 'Visit my channel on Twitch!';
    visitChannelButtonContainer.appendChild(visitChannelButton);

    // Create "Did you know" list under the fallback image
    const didYouKnowContainer = document.createElement('div');
    didYouKnowContainer.classList.add('flex', 'flex-col', 'items-center', 'mt-5');
    hero6Container.appendChild(didYouKnowContainer);

    const didYouKnowList = document.createElement('ul');
    didYouKnowList.classList.add('text-white', 'w-3/4', 'text-left', 'max-w-xl');
    didYouKnowList.innerHTML = `
        <li>• You can feed the streamer a cookie?</li>
        <li>• You can type the name of a color in chat to change the stream and website color.</li>
        <li>• 50 bits - cause a thunder bolt</li>
        <li>• 500 bits - make it rain in the stream</li>
        <li>• 700 bits - turn stream black and white</li>
        <li>• 40000 bits - pay for hypercam2</li>
        <li>• Display badges in my chat overlay. <a href="#" class="underline">Click here to learn more.</a></li>
    `;
    didYouKnowContainer.appendChild(didYouKnowList);

    // Calculate the remaining space for the fallback image
    const remainingHeight = 1000 - title.offsetHeight - subtitle.offsetHeight - visitChannelButtonContainer.offsetHeight - didYouKnowContainer.offsetHeight - 100;
    videoContainer.style.maxHeight = `${remainingHeight}px`;
    fallbackImage.style.maxHeight = `${remainingHeight}px`;

    // Adjust Hero 6 height based on the total content, keeping within 1000px
    hero6Container.style.height = '1000px';
});
