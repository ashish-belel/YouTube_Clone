let allVideos = [];

fetch("videos.json")
  .then(res => res.json())
  .then(data => {
    allVideos = data;

    const video = JSON.parse(localStorage.getItem("selectedVideo"));

    loadVideo(video);
    loadRecommendations(video, allVideos);
  });

function loadVideo(video) {
  document.getElementById("video-thumbnail").src = video.thumbnail;
  document.getElementById("video-title").innerText = video.title;
  document.getElementById("video-views").innerText = video.views;
  document.getElementById("video-date").innerText = video.date;
  document.getElementById("channel-name").innerText = video.author;
  document.getElementById("channel-img").src = video.channelImg;
  document.getElementById("video-description").innerText = video.description;
}

function loadRecommendations(currentVideo, videos) {
  const container = document.getElementById("recommended-container");

  const filtered = videos.filter(v => v.id !== currentVideo.id);

  filtered.forEach(v => {
    container.innerHTML += `
      <div class="rec-video" onclick="openVideo(${v.id})">
        <img src="${v.thumbnail}" class="rec-thumb">
        <div>
          <p class="rec-title">${v.title}</p>
          <p class="rec-author">${v.author}</p>
        </div>
      </div>
    `;
  });
}

function openVideo(id) {
  const selected = allVideos.find(v => v.id === id);
  localStorage.setItem("selectedVideo", JSON.stringify(selected));
  location.reload();
}

const subBtn = document.querySelector(".subscribe-btn");

subBtn.addEventListener("click", () => {
  if (subBtn.innerText === "Subscribe") {
    subBtn.innerText = "Subscribed";
    subBtn.style.backgroundColor = "gray";
  } else {
    subBtn.innerText = "Subscribe";
    subBtn.style.backgroundColor = "black";
  }
});