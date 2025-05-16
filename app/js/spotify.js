async function loadSpotifyWidget() {
  try {
    
    const widgetOuterBox = document.querySelector('.widget_outer_box');
    
    const res = await axios.get('https://spotify-widget-api.netlify.app/api');
    const data = res.data;
    
    if(data.isPlaying === false) {
      widgetOuterBox.innerHTML = `<p style="display: flex;width: 100%; justify-content: center; align-items: center; font-weight: bolder; font-size: 30px;"> No Song Is Being Played </p>`
      return;
    };
    
    const progress = data.progress;
    const duration = data.duration;
    
    const percentage = (progress / duration) * 100;
    
    const songInfo = `<div class="songInfoContainer"> 
      <div class="spotifyIcon"> 
        <sl-tooltip content="Open In Spotify">   
          <sl-icon-button class="openInSpotify" name="spotify" label="Open in Spotify" href="${data.songUrl}"></sl-icon> 
        </sl-tooltip>
      </div>
      <div class="songInfo">
        <h1>${data.title}</h1> 
        <p>Artist: ${data.artist}</p>
      </div>
      <div class="progressBar"> 
        <sl-progress-bar class="progress-bar" value="${percentage}" style="--height: 10px;"></sl-progress-bar>
        <p class="progressInNum">${millisToMinutesAndSeconds(progress)} / ${millisToMinutesAndSeconds(duration)}</p>
      </div>
    </div>`;
    
    widgetOuterBox.innerHTML = `<img class="songImg" src="${data.albumImageUrl}" alt="Album Image">`;
    widgetOuterBox.innerHTML += `${songInfo}`;
  
    // Update progress bar and text every second
    if (data.isPlaying === true) {
      let currentProgress = progress; // Track current progress
      const interval = setInterval(() => {
        currentProgress = Math.min(currentProgress + 1000, duration); // Increment progress
        const newPercentage = (currentProgress / duration) * 100;
        document.querySelector('.progress-bar').setAttribute("value", newPercentage);
        document.querySelector('.progressInNum').innerHTML = `${millisToMinutesAndSeconds(currentProgress)} / ${millisToMinutesAndSeconds(duration)}`;
        
        if (currentProgress >= duration) {
          clearInterval(interval); // Stop when song ends
          loadSpotifyWidget(); // Reload the widget
        }
      }, 1000);
    }
  
    document.querySelector('.songImg').addEventListener('click', () => {
      window.location.href = data.artist_url; // Assign URL to navigate
    });
  } catch(err) {
    console.log(err);
  }
}

// Initialize the widget on page load
document.addEventListener("DOMContentLoaded", loadSpotifyWidget);

function millisToMinutesAndSeconds(millis) {
  const minutes = Math.floor(millis / 60000);
  const seconds = Math.floor((millis % 60000) / 1000);
  return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}
