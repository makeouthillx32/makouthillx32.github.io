document.addEventListener('DOMContentLoaded', function () {
    const hero4Container = document.querySelector('.hero4');
    if (!hero4Container) {
        console.error('Hero4 container not found');
        return;
    }

    // Create the main container
    const youtubeContainer = document.createElement('div');
    youtubeContainer.classList.add('youtube-container');

    // Channel block
    const youtubeChannel = document.createElement('div');
    youtubeChannel.classList.add('youtube-channel');

    const mainChannelThumbnail = document.createElement('img');
    mainChannelThumbnail.id = 'main-channel-thumbnail';

    const channelInfoContainer = document.createElement('div');
    channelInfoContainer.classList.add('youtube-channel-info');

    const mainChannelName = document.createElement('h3');
    mainChannelName.id = 'main-channel-name';

    const mainChannelDescription = document.createElement('p');
    mainChannelDescription.id = 'main-channel-description';

    const mainChannelLink = document.createElement('a');
    mainChannelLink.id = 'main-channel-link';
    mainChannelLink.classList.add('youtube-channel-button');
    mainChannelLink.target = '_blank';
    mainChannelLink.textContent = 'Visit channel';

    channelInfoContainer.appendChild(mainChannelName);
    channelInfoContainer.appendChild(mainChannelDescription);
    channelInfoContainer.appendChild(mainChannelLink);

    youtubeChannel.appendChild(mainChannelThumbnail);
    youtubeChannel.appendChild(channelInfoContainer);

    // Latest video block
    const youtubeLatestVideo = document.createElement('div');
    youtubeLatestVideo.classList.add('youtube-latest-video');

    const latestVideoThumbnail = document.createElement('img');
    latestVideoThumbnail.id = 'latest-video-thumbnail';

    const videoInfoContainer = document.createElement('div');
    videoInfoContainer.classList.add('youtube-video-info');

    const latestVideoTitle = document.createElement('h3');
    latestVideoTitle.id = 'latest-video-title';

    const latestVideoDescription = document.createElement('p');
    latestVideoDescription.id = 'latest-video-description';

    const latestVideoLink = document.createElement('a');
    latestVideoLink.id = 'latest-video-link';
    latestVideoLink.classList.add('youtube-channel-button');
    latestVideoLink.target = '_blank';
    latestVideoLink.textContent = 'Watch video';

    videoInfoContainer.appendChild(latestVideoTitle);
    videoInfoContainer.appendChild(latestVideoDescription);
    videoInfoContainer.appendChild(latestVideoLink);

    youtubeLatestVideo.appendChild(latestVideoThumbnail);
    youtubeLatestVideo.appendChild(videoInfoContainer);

    // Add channel and latest video blocks to the main container
    youtubeContainer.appendChild(youtubeChannel);
    youtubeContainer.appendChild(youtubeLatestVideo);

    hero4Container.appendChild(youtubeContainer);

    // Fetch data from your Vercel serverless API
    const apiUrl = 'https://website-api-git-main-tylers-projects-e3c386db.vercel.app/api/youtube';

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const channel = data.channel;
            const latestVideo = data.latestVideo;

            // Set channel information
            mainChannelThumbnail.src = channel.thumbnail;
            mainChannelName.textContent = channel.title;
            mainChannelDescription.textContent = channel.description;
            mainChannelLink.href = channel.link;

            // Set latest video information
            latestVideoThumbnail.src = latestVideo.thumbnail;
            latestVideoTitle.textContent = latestVideo.title;
            latestVideoDescription.textContent = latestVideo.description;
            latestVideoLink.href = latestVideo.link;
        })
        .catch(error => {
            console.error('Error fetching data from API:', error);
        });
});
