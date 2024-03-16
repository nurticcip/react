const myButton = document.querySelector('#camera-button')
const video = document.getElementById("myVideo");


myButton.addEventListener('click', () => {
    video.style.display = "block";
})

function handleVideoStream(stream) {
    video.srcObject = stream;
    video.play();
  }
  navigator.mediaDevices
    .getUserMedia({ video: true })
    .then((stream) => {
      handleVideoStream(stream);
    })
    .catch((error) => {
      console.error("Error accessing camera:", error);
});