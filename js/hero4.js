document.addEventListener('DOMContentLoaded', function () {
    const API_KEY = 'AIzaSyCBCnOp3FiWhmyjMPAQfFriL58zv_A-gtY'; // Replace with your API key
    const CHANNEL_ID = 'UCvuBk9XEgxn1WUkVvKzTd7g'; // Replace with your channel ID
    const MAX_RESULTS = 1;

    const hero4Container = document.querySelector('.hero4');
    if (!hero4Container) {
        console.error('Hero4 container not found');
        return
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

  // Helper function to handle API fetch and response
    function fetchYouTubeAPI(url, handleData, handleError) {
        fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.items && data.items.length > 0) {
                handleData(data);
            } else {
                console.log('No data found.');
                handleError('No items found in response.');
            }
        })
        .catch(error => {
            console.error('API request failed:', error);
            handleError(error);
        });
    }

    // Fetch Channel Info
    const channelInfoURL = `https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${CHANNEL_ID}&key=${API_KEY}`;
    fetchYouTubeAPI(channelInfoURL, data => {
        const channelInfo = data.items[0].snippet;
        mainChannelThumbnail.src = channelInfo.thumbnails.high.url;
        mainChannelName.textContent = channelInfo.title;
        mainChannelDescription.textContent = channelInfo.description;
        mainChannelLink.href = `https://www.youtube.com/channel/${CHANNEL_ID}`;
    }, error => {
        console.log('Error fetching channel info:', error);
    });

    // Fetch Latest Video
    const latestVideoURL = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANNEL_ID}&maxResults=${MAX_RESULTS}&order=date&type=video&key=${API_KEY}`;
    fetchYouTubeAPI(latestVideoURL, data => {
        const videoInfo = data.items[0].snippet;
        const videoId = data.items[0].id.videoId;
        latestVideoThumbnail.src = videoInfo.thumbnails.high.url;
        latestVideoTitle.textContent = videoInfo.title;
        latestVideoDescription.textContent = videoInfo.description;
        latestVideoLink.href = `https://www.youtube.com/watch?v=${videoId}`;
    }, error => {
        console.log('Error fetching latest video:', error);
    });
});