function renderVideos(videoList) {
  const container = document.getElementById("video-container");

  container.innerHTML = "";

  if (videoList.length === 0) {
    container.innerHTML = "<p>No results found</p>";
  }

  videoList.forEach(video => {
    const videoHTML = `
      <div class="v-preview">
        <div class="thumb-row">
          <img class="thumb" src="${video.thumbnail}">
          <div class="v-time">${video.time}</div>
        </div>

        <div class="v-info-grid">
          <div class="logo">
            <img class="pfp" src="${video.channelImg}">
          </div>

          <div class="v-info">
            <p class="v-title">${video.title}</p>
            <p class="v-author">${video.author}</p>
            <p class="v-stats">${video.views}</p>
          </div>
        </div>
      </div>
    `;

    container.innerHTML += videoHTML;
  });
}