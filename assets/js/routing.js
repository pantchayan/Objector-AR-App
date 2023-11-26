const loginBtnLandingPage = document.querySelector("#landing-page .login-btn");
const registerBtnLandingPage = document.querySelector(
  "#landing-page .register-btn"
);
const loginBtnLoginPage = document.querySelector("#login-page .login-btn");
const registerBtnRegisterPage = document.querySelector(
  "#register-page .register-btn"
);

const landingPageContainer = document.querySelector("#landing-page");
const loginPageContainer = document.querySelector("#login-page");
const registerPageContainer = document.querySelector("#register-page");
const mainPageContainer = document.querySelector("#main-page");
const cameraPageContainer = document.querySelector("#camera-page");
const favPageContainer = document.querySelector("#fav-page");

const homeNavBtns = document.querySelectorAll(".home-icon");
const favNavBtns = document.querySelectorAll(".fav-icon");
const cameraNavBtns = document.querySelectorAll(".camera-icon");
const captureBtns = document.querySelectorAll(".capture-icon");

let hideAllPages = () => {
  landingPageContainer.style.display = "none";
  landingPageContainer.style.display = "none";
  registerPageContainer.style.display = "none";
  loginPageContainer.style.display = "none";
  mainPageContainer.style.display = "none";
  modelViewerContainer.style.display = "none";
  cameraPageContainer.style.display = "none";
  favPageContainer.style.display = "none";
};

async function startCamera() {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });

    const video = document.getElementById("video");
    video.srcObject = stream;

    // You can also use the following line if you're using older browsers
    // video.src = window.URL.createObjectURL(stream);
  } catch (error) {
    console.error("Error accessing camera:", error);
  }
}

loginBtnLandingPage.addEventListener("click", () => {
  hideAllPages();
  loginPageContainer.style.display = "flex";
});

registerBtnLandingPage.addEventListener("click", () => {
  hideAllPages();
  registerPageContainer.style.display = "flex";
});

registerBtnRegisterPage.addEventListener("click", () => {
  hideAllPages();
  mainPageContainer.style.display = "flex";
});

loginBtnLoginPage.addEventListener("click", () => {
  hideAllPages();
  mainPageContainer.style.display = "flex";
});

homeNavBtns.forEach((homeNavBtn) => {
  homeNavBtn.addEventListener("click", () => {
    hideAllPages();
    mainPageContainer.style.display = "flex";
  });
});

favNavBtns.forEach((favNavBtn) => {
  favNavBtn.addEventListener("click", () => {
    hideAllPages();
    favPageContainer.style.display = "flex";
  });
});

cameraNavBtns.forEach((cameraNavBtn) => {
  cameraNavBtn.addEventListener("click", () => {
    hideAllPages();
    startCamera();
    cameraPageContainer.style.display = "flex";
  });
});
