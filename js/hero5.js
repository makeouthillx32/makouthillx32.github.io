document.addEventListener('DOMContentLoaded', function() {
    const hero5Container = document.querySelector('.hero5');
    if (!hero5Container) {
        console.error('Hero5 container not found');
        return;
    }

    // Clear the hero5Container to ensure we have a clean slate
    hero5Container.innerHTML = '';

    // Main container for the Kick section
    const mainContainer = document.createElement('div');
    mainContainer.classList.add('kick-container', 'flex', 'justify-center', 'items-center', 'h-full', 'max-w-5xl', 'mx-auto', 'mt-10', 'flex-col');

    // Title section
    const titleContainer = document.createElement('div');
    titleContainer.classList.add('kick-title', 'flex', 'items-center', 'space-x-4', 'mb-6', 'mt-10');

    const unenterTitle = document.createElement('h1');
    unenterTitle.textContent = 'UNENTER';
    unenterTitle.classList.add('text-white', 'text-4xl', 'font-bold');

    const titleSeparatorBar = document.createElement('div');
    titleSeparatorBar.classList.add('title-separator-bar', 'bg-white', 'rounded-full', 'mx-4');

    const kickLogo = document.createElement('img');
    kickLogo.src = 'images/kick-icon.png'; // Update this with the correct path to your Kick logo
    kickLogo.alt = 'Kick Logo';
    kickLogo.classList.add('kick-logo', 'h-12');

    titleContainer.appendChild(unenterTitle);
    titleContainer.appendChild(titleSeparatorBar);
    titleContainer.appendChild(kickLogo);

    mainContainer.appendChild(titleContainer);

    // Main section content
    const contentContainer = document.createElement('div');
    contentContainer.classList.add('kick-content', 'flex', 'justify-center', 'items-center', 'w-full');

    // Left column for the text
    const leftColumn = document.createElement('div');
    leftColumn.classList.add('kick-left-column', 'flex', 'flex-col', 'justify-center', 'items-center', 'w-1/2', 'pr-5');

    // Description and Watch Button
    const descriptionContainer = document.createElement('div');
    descriptionContainer.classList.add('kick-description', 'flex', 'flex-col', 'justify-center', 'items-center', 'mb-10');

    const descriptionText = document.createElement('p');
    descriptionText.innerHTML = `
        I will let you witness my coding skills in real time<br> 
        and leave you inspired and in awe.
        <br><br>
        Uncut and RAW, I'm taming the software with sheer manliness. I work so hard that my clothes can't handle the sweat. I must type without attire even when it means leaving my chiseled abs exposed to your curious eyes.
        <br><br>
        Follow me if you're willing to expose yourself to high amounts of alpha particles.
    `;
    descriptionText.classList.add('text-white', 'text-center', 'text-lg', 'mb-4', 'max-w-lg');
    descriptionContainer.appendChild(descriptionText);

    const watchButton = document.createElement('a');
    watchButton.href = 'https://kick.com/unenter'; // Replace with your actual Kick URL
    watchButton.target = '_blank';
    watchButton.textContent = 'Watch me on KICK.com';
    watchButton.classList.add('kick-watch-button', 'text-lg', 'font-bold', 'rounded-md', 'p-3', 'text-white', 'bg-green-600', 'hover:bg-green-700', 'transition', 'ease-in-out', 'duration-200');
    descriptionContainer.appendChild(watchButton);

    leftColumn.appendChild(descriptionContainer);

    // Append left column to content container
    contentContainer.appendChild(leftColumn);

    // Separator bar between columns
    const separatorBar = document.createElement('div');
    separatorBar.classList.add('separator-bar', 'bg-white', 'rounded-full', 'mx-4');
    contentContainer.appendChild(separatorBar);

    // Right column for the stream image
    const rightColumn = document.createElement('div');
    rightColumn.classList.add('kick-right-column', 'flex', 'flex-col', 'justify-center', 'items-center', 'w-1/2', 'pl-5');

    const streamImageContainer = document.createElement('div');
    streamImageContainer.classList.add('kick-stream-image', 'mb-10');

    const streamImage = document.createElement('img');
    streamImage.src = 'images/kickp.png'; // Update this path to your stream image
    streamImage.alt = 'Kick Stream Example';
    streamImage.classList.add('shadow-md', 'rounded-xl', 'w-full', 'max-w-lg', 'mx-auto');
    streamImageContainer.appendChild(streamImage);

    rightColumn.appendChild(streamImageContainer);

    contentContainer.appendChild(rightColumn);

    mainContainer.appendChild(contentContainer);

    // Did You Know Section
    const didYouKnowContainer = document.createElement('div');
    didYouKnowContainer.classList.add('kick-did-you-know', 'flex', 'flex-col', 'justify-center', 'items-center', 'mt-8', 'mb-10');

    const didYouKnowTitle = document.createElement('h3');
    didYouKnowTitle.textContent = 'Did you know...';
    didYouKnowTitle.classList.add('text-white', 'text-2xl', 'font-bold', 'mb-4');
    didYouKnowContainer.appendChild(didYouKnowTitle);

    const didYouKnowList = document.createElement('ul');
    didYouKnowList.classList.add('text-white', 'text-left', 'space-y-2', 'max-w-lg', 'mx-auto');
    didYouKnowList.innerHTML = `
        <li>• You can type the name of a color in chat to change the stream and website color?</li>
        <li>• Subscribe to have my receipt printer print your profile picture.</li>
        <li>• You can run chat commands.</li>
        <li>• Show off your badges. <a href="#" class="underline">Click here to learn more.</a></li>
    `;
    didYouKnowContainer.appendChild(didYouKnowList);

    mainContainer.appendChild(didYouKnowContainer);

    // Append the main container to Hero 5
    hero5Container.appendChild(mainContainer);
});
