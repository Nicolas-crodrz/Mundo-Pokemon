const videoThumbnails = document.querySelectorAll(
  ".video-gallery .all-videos .thumbnail"
);
const videoPlayer = document.querySelector(
  ".video-gallery .featured-video iframe"
);
const videoTitle = document.querySelector(".video-gallery .video-title");

const showVideo = (videoId, title) => {
  let videoUrl = `https://www.youtube.com/embed/${videoId}?rel=0`;
  videoPlayer.setAttribute("src", videoUrl);
  videoTitle.innerHTML = title;
};

videoThumbnails.forEach((v) => {
  v.addEventListener("click", () => {
    showVideo(v.dataset.id, v.dataset.title);
  });
});
