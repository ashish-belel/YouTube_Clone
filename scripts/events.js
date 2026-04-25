function initSearch(videos) {
  const searchInput = document.querySelector(".search-bar");

  searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase();

    const filteredVideos = videos.filter(video =>
      video.title.toLowerCase().includes(query) ||
      video.author.toLowerCase().includes(query)
    );

    renderVideos(filteredVideos);
  });
}

function initVideoClick(videos) {
  const container = document.getElementById("video-container");

  container.addEventListener("click", (e) => {
    const card = e.target.closest(".v-preview");

    if (!card) return;

    const videoId = card.dataset.id;

    const selectedVideo = videos.find(v => v.id == videoId);

    localStorage.setItem("selectedVideo", JSON.stringify(selectedVideo));

    window.location.href = "watch.html";
  });
}