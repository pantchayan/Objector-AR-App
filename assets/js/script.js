const modelViewer = document.querySelector("model-viewer");
const mainPageContainer2 = document.querySelector('#main-page');
const favPageContainer2 = document.querySelector('#fav-page');
const modelViewerContainer = document.querySelector('#model-view-page');

window.switchSrc = (element, name) => {
  mainPageContainer2.style.display = 'none';
  favPageContainer2.style.display = 'none';
  modelViewerContainer.style.display = 'flex';
  const base = "./assets/models/" + name;
  modelViewer.src = base + ".glb";
  modelViewer.poster = base + ".webp";
  const slides = document.querySelectorAll(".slide");
  slides.forEach((element) => {
    element.classList.remove("selected");
  });
  element.classList.add("selected");
};

// document.querySelector(".slider").addEventListener("beforexrselect", (ev) => {
//   // Keep slider interactions from affecting the XR scene.
//   ev.preventDefault();
// });