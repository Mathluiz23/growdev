import { movies } from './movies';

// const growcastRow = document.getElementById("growcast-items");
// const webinarRow = document.getElementById("webinar-items");
// const uxUiRow = document.getElementById("ux-ui-items");
// const geralRow = document.getElementById("geral-items");
// const iframeMovie = document.getElementById("iframe-movie");
// const movieModal = new bootstrap.Modal("#movie-modal", {
//   keyboard: false,
// });

// const growcastItems = movies.filter((movie) => movie.category === "growcast");
// const webinarItems = movies.filter((movie) => movie.category === "webinar");
// const uxUiItems = movies.filter((movie) => movie.category === "ux-ui");
// const geralItems = movies.filter((movie) => movie.category === "geral");

// Função para renderizar cards de vídeo numa seção específica
function renderMoviesByCategory(category, containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = ""; // limpa antes
  
    // Filtra os filmes da categoria
    const filteredMovies = movies.filter(movie => movie.category === category);
  
    filteredMovies.forEach(movie => {
      // Cria o card
      const col = document.createElement("div");
      col.className = "col-6 col-md-4 col-lg-3 col-movie";
  
      col.innerHTML = `
        <div class="item-hover" data-link="${movie.link}" tabindex="0" role="button" aria-label="Assistir ${movie.title}">
          <img src="${movie.img}" alt="Thumbnail do vídeo ${movie.title}" />
          <div class="detail-movie">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
              <path d="M11.596 8.697L6.343 11.3a.75.75 0 0 1-1.14-.64V5.34a.75.75 0 0 1 1.14-.64l5.253 2.6a.75.75 0 0 1 0 1.314z"/>
            </svg>
            <span>${movie.title}</span>
          </div>
        </div>
      `;
  
      // Adiciona evento de clique para abrir modal
      col.querySelector(".item-hover").addEventListener("click", function () {
        openModal(movie.link);
      });
  
      // Permite abrir o modal também via teclado (Enter)
      col.querySelector(".item-hover").addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          openModal(movie.link);
        }
      });
  
      container.appendChild(col);
    });
  }
  
  // Função para abrir modal com iframe do vídeo
  function openModal(videoLink) {
    const modal = new bootstrap.Modal(document.getElementById("movie-modal"));
    const iframeContainer = document.getElementById("iframe-movie");
  
    // Insere o iframe com autoplay
    iframeContainer.innerHTML = `<iframe width="100%" height="100%" src="${videoLink}?autoplay=1" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>`;
  
    modal.show();
  
    // Salva referência para fechar depois
    document.getElementById("movie-modal").addEventListener("hidden.bs.modal", () => {
      iframeContainer.innerHTML = ""; // limpa iframe pra parar vídeo
    }, { once: true });
  }
  
  // Inicializa o app
  function init() {
    renderMoviesByCategory("growcast", "growcast-items");
    renderMoviesByCategory("webinar", "webinar-items");
    renderMoviesByCategory("ux-ui", "ux-ui-items");
    renderMoviesByCategory("geral", "geral-items");
  }
  
  window.addEventListener("DOMContentLoaded", init);
  

// function renderMoviesByCategory(category, containerId) {
//     const container = document.getElementById(containerId);
//     container.innerHTML = ""; // limpa antes
  
//     // Filtra os filmes da categoria
//     const filteredMovies = movies.filter(movie => movie.category === category);
  
//     filteredMovies.forEach(movie => {
//       // Cria o card
//       const col = document.createElement("div");
//       col.className = "col-6 col-md-4 col-lg-3 col-movie";
  
//       col.innerHTML = `
//         <div class="item-hover" data-link="${movie.link}" tabindex="0" role="button" aria-label="Assistir ${movie.title}">
//           <img src="${movie.img}" alt="Thumbnail do vídeo ${movie.title}" />
//           <div class="detail-movie">
//             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
//               <path d="M11.596 8.697L6.343 11.3a.75.75 0 0 1-1.14-.64V5.34a.75.75 0 0 1 1.14-.64l5.253 2.6a.75.75 0 0 1 0 1.314z"/>
//             </svg>
//             <span>${movie.title}</span>
//           </div>
//         </div>
//       `;
  
//       // Adiciona evento de clique para abrir modal
//       col.querySelector(".item-hover").addEventListener("click", function () {
//         openModal(movie.link);
//       });
  
//       // Permite abrir o modal também via teclado (Enter)
//       col.querySelector(".item-hover").addEventListener("keydown", function (e) {
//         if (e.key === "Enter" || e.key === " ") {
//           e.preventDefault();
//           openModal(movie.link);
//         }
//       });
  
//       container.appendChild(col);
//     });
// }
  
// // Função para abrir modal com iframe do vídeo
// function openModal(videoLink) {
// const modal = new bootstrap.Modal(document.getElementById("movie-modal"));
// const iframeContainer = document.getElementById("iframe-movie");

// // Insere o iframe com autoplay
// iframeContainer.innerHTML = `<iframe width="100%" height="100%" src="${videoLink}?autoplay=1" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>`;

// modal.show();

// // Salva referência para fechar depois
// document.getElementById("movie-modal").addEventListener("hidden.bs.modal", () => {
//     iframeContainer.innerHTML = ""; // limpa iframe pra parar vídeo
// }, { once: true });
// }

// // Inicializa o app
// function init() {
// renderMoviesByCategory("growcast", "growcast-items");
// renderMoviesByCategory("webinar", "webinar-items");
// renderMoviesByCategory("ux-ui", "ux-ui-items");
// renderMoviesByCategory("geral", "geral-items");
// }
  
// window.addEventListener("DOMContentLoaded", init);


// function renderItems(element, items) {
//   element.innerHTML += `
//     <div class="col-12 pt-2">
//     <p class="fw-bold mb-0 fs-1">
//         <a href="#${items}" class="link-growdev text-uppercase">
//         ${items[0].category}
//         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
//             <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"></path>
//         </svg>
//         </a>
//     </p>
//     </div>
//   `;
//   movies.forEach((movie) => {
//     element.innerHTML += `
//     <div class="item-hover" data-link="${movie.link}" tabindex="0" role="button" aria-label="Assistir ${movie.title}">
//            <img src="${movie.img}" alt="Thumbnail do vídeo ${movie.title}" />
//            <div class="detail-movie">
//              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
//                <path d="M11.596 8.697L6.343 11.3a.75.75 0 0 1-1.14-.64V5.34a.75.75 0 0 1 1.14-.64l5.253 2.6a.75.75 0 0 1 0 1.314z"/>
//              </svg>
//              <span>${movie.title}</span>
//            </div>
//          </div>
//        `;
//   });
// }

// function stopIframe() {
//   const iframeVideo = document.getElementById('iframe-video').src = "no-link";
// }

// function openMovie(element) {
//   const link = element.getAttribute("data-link");
//   iframeMovie.innerHTML = `
//   <iframe src="${link}" id="iframe-video" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
//   `;
//   movieModal.show();
// }

// renderItems(growcastRow, growcastItems);
// renderItems(webinarRow, webinarItems);
// renderItems(uxUiRow, uxUiItems);
// renderItems(geralRow, geralItems);

// document.addEventListener("DOMContentLoaded", () => {
//     const map = {
//       growcast: document.getElementById("growcast-items"),
//       webinar: document.getElementById("webinar-items"),
//       "ux-ui": document.getElementById("ux-ui-items"),
//       geral: document.getElementById("geral-items"),
//     };
  
//     const iframeMovie = document.getElementById("iframe-movie");
//     const modalMovie = new bootstrap.Modal("#movie-modal");
  
//     movies.forEach(({ img, title, link, category }) => {
//       const card = document.createElement("div");
//       card.className = "col-12 col-sm-6 col-md-4 col-lg-3 col-movie";
//       card.innerHTML = `
//         <figure>
//             <img src="${movies.img}" class="img-fluid" alt="${movies.title}">
//         </figure>
//         <p class="detail-movie" data-link="${movies.link}" onclick="openMovie(this)">
//             <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="white" class="bi bi-play-circle" viewBox="0 0 16 16">
//                 <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path>                                            </path>
//                 <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"></path> 
//             </svg>
//             <span>
//                 ${movies.title}
//             </span>
//         </p>
//       `;
//       card.addEventListener("click", () => {
//         iframeMovie.innerHTML = `<iframe src="${movies.link}" frameborder="0" allow="autoplay" style="width:100%; height:100vh;"></iframe>`;
//         modalMovie.show();
//       });
//       map[category].appendChild(card);
//     });
//   });
  




// const growcast = document.getElementById("growcast-items");
// const webinar = document.getElementById("webinar-items");
// const uxUi = document.getElementById("ux-ui-items");
// const geral = document.getElementById("geral-items");
// const iframeMovie = document.getElementById("iframe-movie");
// const modalMovie = new bootstrap.Modal("#movie-modal", {
//   keyboard: false,
// });

// const growcastItems = movies.filter((item) => item.category === "growcast");
// const webinarItems = movies.filter((item) => item.category === "webinar");
// const uxUiItems = movies.filter((item) => item.category === "ux-ui");
// const geralItems = movies.filter((item) => item.category === "geral");

// function renderItems(element, items) {
//   items.forEach((item) => {
//     element.innerHTML += `
//     <div class="col-12 col-sm-6 col-md-3 col-movie">
//     <div class="item-hover">
//       <img
//         src="${item.img}"
//         class="img-fluid"
//         alt=""
//       />
//       <p class="detail-movie" data-link="${item.link}" onclick="openMovie(this)">
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           width="45"
//           height="45"
//           fill="white"
//           class="bi bi-play-circle"
//           viewBox="0 0 16 16"
//         >
//           <path
//             d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
//           />
//           <path
//             d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"
//           />
//         </svg>
//         <span>${item.title}</span>
//       </p>
//     </div>
//   </div>
//           `;
//   });
// }

// function openMovie(element) {
//   const link = element.getAttribute("data-link");
//   console.log(link);
//   iframeMovie.innerHTML = `
//     <iframe src="${link}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
//   `;
//   modalMovie.show();
// }

// renderItems(growcast, growcastItems);
// renderItems(webinar, webinarItems);
// renderItems(uxUi, uxUiItems);
// renderItems(geral, geralItems);
