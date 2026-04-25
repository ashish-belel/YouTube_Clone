let allVideos = [];

fetch("videos.json")
  .then(res => res.json())
  .then(data => {
    allVideos = data;

    renderVideos(allVideos);
    initSearch(allVideos);
    initVideoClick(allVideos);
  });