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