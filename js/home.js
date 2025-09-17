import { movies } from './data-movie.js';

const backgroundHome = document.getElementById("header");
const growcastSection = document.getElementById("growcast-content");
const webinarSection = document.getElementById("flutter-content");
const uxuiSection = document.getElementById("uxui-content");
const othersSection = document.getElementById("other-content");
const modalContent = document.getElementById("modal-content");
const modalBox = document.getElementById("iframe-Modal");
const iframeModal = new bootstrap.Modal(modalBox);

const highlight = movies.find((movie) => movie.highlight);
const growcastContent = movies.filter((movie) => movie.category === "Growcast [Episódios]");
const flutterContent = movies.filter((movie) => movie.category === "Webinar em Flutter");
const uxuiContent = movies.filter((movie) => movie.category === "Jornada UX/UI");
const othersContent = movies.filter((movie) => movie.category === "Diversos");

function renderHighlighted(element){
  backgroundHome.innerHTML += `
    <div class="row header-content">
      <div class="col-12">
        <div class="container">
          <div class="text-white p-5">
            <p class="fw-bold text-shadow"><small>${element.highlight_category}</small></p>
            <h2 class="m-0 display-1 fw-bold text-shadow">${element.highlight_title}</h2>
            <button class="btn btn-light btn-sm mt-1 fw-bold btn-hone">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" style="margin-right:6px;vertical-align:middle;">
                <path d="M6.79 5.093a.5.5 0 0 1 .71-.454l4.5 2.7a.5.5 0 0 1 0 .842l-4.5 2.7A.5.5 0 0 1 6 10.84V5.16a.5.5 0 0 1 .79-.067z"/>
              </svg>
              Assistir
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
}


function renderMovies (element, category){
  category.forEach((movie) => {
        element.innerHTML += `
            <div class="col-12 col-md-6 col-lg-3 col-movie g-4">
              <div class="card">
                <img src="${movie.img}" class="card-img-top" alt="${movie.title}">
                <div class="card-body bg-black">
                  <p class="card-text text-white fw-bold link-card" onclick="videoModal(this)" data-iframe='${movie.iframe}' >
                    <span class="icon-video-wrapper" aria-hidden="true">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" class="icon-video-svg" aria-hidden="true">
                        <!-- triângulo play puro -->
                        <path d="M4 3.5v9l8-4.5-8-4.5z" />
                      </svg>
                    </span>
                    <span class="card-title-text">${movie.title}</span>
                  </p>
                </div>
              </div>
            </div>
        `;
    });
}

function videoModal (element){
  const iframe = element.getAttribute("data-iframe");
   modalContent.innerHTML = iframe;
   iframeModal.show();
}

window.onload = function () {
  backgroundHome.style.background = `url("${highlight.img}") center center / cover no-repeat`;
  renderHighlighted(highlight);
  renderMovies(growcastSection, growcastContent);
  renderMovies(webinarSection, flutterContent);
  renderMovies(uxuiSection, uxuiContent);
  renderMovies(othersSection, othersContent);
}
window.videoModal = videoModal;