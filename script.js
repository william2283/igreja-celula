var videoPlayer = document.getElementById('VideoPlayer');
var videoSources = [
  'video/celula.mp4',
  'video/breno.mp4',
  'video/matheus.mp4',
  'video/piu.mp4',
  'video/william.mp4'
];
var currentIndex = 0;

videoPlayer.addEventListener('ended', function() {
  currentIndex = (currentIndex + 1) % videoSources.length;

  
  if (currentIndex === 0) {
    videoPlayer.src = videoSources[currentIndex];
    videoPlayer.pause();
  } else {
    videoPlayer.src = videoSources[currentIndex];
    videoPlayer.play();
  }
});
chrome.runtime.sendMessage({message: "get_data"}, function(response) {
    // Trate a resposta aqui de forma síncrona
    console.log(response);
  });
  