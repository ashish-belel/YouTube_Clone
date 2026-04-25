const video = JSON.parse(localStorage.getItem("selectedVideo"));

document.getElementById("video-thumbnail").src = video.thumbnail;
document.getElementById("video-title").innerText = video.title;
document.getElementById("video-stats").innerText = video.views;
document.getElementById("channel-name").innerText = video.author;
document.getElementById("channel-img").src = video.channelImg;
document.getElementById("video-views").innerText = video.views;
document.getElementById("video-date").innerText = video.date;
document.getElementById("video-description").innerText = video.description;

const recommendedContainer = document.getElementById("recommended-container");

// remove current video
const recommendedVideos = videos.filter(v => v.id !== video.id);

recommendedVideos.forEach(v => {
  const html = `
    <div class="rec-video" onclick="openVideo(${v.id})">
      <img src="${v.thumbnail}" class="rec-thumb">
      <div>
        <p class="rec-title">${v.title}</p>
        <p class="rec-author">${v.author}</p>
      </div>
    </div>
  `;

  recommendedContainer.innerHTML += html;
});

function openVideo(id) {
  const selected = videos.find(v => v.id === id);
  localStorage.setItem("selectedVideo", JSON.stringify(selected));
  location.reload(); // reload same page
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