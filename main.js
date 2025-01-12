//constante
// import LocomotiveScroll from "locomotive-scroll";
// import "swiper/swiper-bundle.css";
// import Swiper, { Navigation, Pagination, Autoplay, EffectCoverflow } from "swiper";
// import Swal from "sweetalert2";

const swiper = new Swiper('.swiper', {
  
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  effect: 'coverflow',
  coverflowEffect: {
    rotate: 30,
    stretch: 10,
    depth: 200,
    modifier: 1.5,
    slideShadows: true,
  },
  spaceBetween: 30,
  centeredSlides: true,
  slidesPerView: 'auto',
  grabCursor: true,
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    1024: {
      slidesPerView: 3,
    },
  },
})


const contact = document.querySelector(".contact")
const imgCv = document.getElementById("img-cv")
const scroll = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true,
  tablet: { smooth: true },
  smartphone: { smooth: true },

})

// Changer la couleur de fond
scroll.on("scroll", () => {
  if (document.querySelector("#color.is-inview")) {
    document.body.style.backgroundColor = "#000101"
    document.body.style.color = "#fefeff"
  } else {
    document.body.style.backgroundColor = "#fefeff"
    document.body.style.color = "#000101"
  }
})

// Retirer la margine lors du rétrécissement de l'écrans
window.addEventListener("resize", () => {
  if (getComputedStyle(contact).flexWrap === "wrap") {
    imgCv.style.marginBottom = 20 + "px"
  }
})




document.querySelectorAll('.swiper-slide').forEach((slide) => {
  slide.addEventListener('click', () => {
      fetch('projects.json')
          .then(response => response.json())
          .then(data => {
              const title = slide.getAttribute('data-title');
              const project = data.find(project => project.title === title);
              

              if (!project) {
                  console.error('Projet non trouvé');
                  return;
              }

            
              
              
              // Création dynamique du carrousel Swiper avec les images du projet
              const carouselHtml = project.images && project.images.length > 0 ? `
                  <div class="swiper project-carousel">
                      <div class="swiper-wrapper">
                          ${project.images.map(image => `
                              <div class="swiper-slide">
                                  <img src="${image.url}" alt="${image.alt}" style="width: 80%; height: auto; border-radius: 8px;">
                                 
                              </div>
                          `).join('')}
                      </div>
                      <div class="swiper-pagination"></div>
                      <div class="swiper-button-next"></div>
                      <div class="swiper-button-prev"></div>
                  </div>
              ` : ''

              // Création de la liste des compétences
              const competencesHtml = project.competences.map(c => `
                  <li style="color: #555; font-size: 16px; line-height: 1.6;">
                      <strong>${c.name}:</strong> ${c.details}
                  </li>
              `).join('')

              // Création de la liste des technologies utilisées
              const toolsHtml = project.tools && project.tools.length > 0 ? `
                  <h3 style="text-align: left;font-size: calc(0.8em + 0.8vw);margin-top: 20px;">Technologies utilisées :</h3>
                  <ul style="color: #555; font-size: 16px; line-height: 1.6;">
                      ${project.tools.map(tool => `<li>${tool.name}</li>`).join('')}
                  </ul>
              ` : ''

              Swal.fire({
                  title: `<span style=" font-size: calc(0.8em + 0.8vw); font-weight: bold;">${project.title}</span>`,
                  html: `
                      <div style="text-align: left; max-height: 500px; overflow-y: auto; padding-right: 10px;">
                          <h3 style="text-align: left;font-size: calc(0.7em + 0.8vw);">Compétences mobilisées :</h3>
                          <ul>
                              ${competencesHtml}
                          </ul>
                          ${carouselHtml}
                          <h3 style="text-align: left;font-size: calc(0.8em + 0.8vw); margin-top: 20px;">Description :</h3>
                          <p style="color: #555; font-size: 18px; line-height: 1.6;">${project.description}</p>
                          ${toolsHtml}
                      </div>
                  `,
                  width: '900px',
                  showCloseButton: true,
                  showConfirmButton: false
                  
              })

              // Initialiser Swiper avec la même configuration que sur la page principale
              setTimeout(() => {
                  if (project.images && project.images.length > 0) {
                      new Swiper('.project-carousel', {
                          modules: [Navigation, Pagination, Autoplay, EffectCoverflow],
                          loop: true,
                          autoplay: {
                              delay: 3000,
                              disableOnInteraction: false,
                          },
                          navigation: {
                              nextEl: '.swiper-button-next',
                              prevEl: '.swiper-button-prev',
                          },
                          pagination: {
                              el: '.swiper-pagination',
                              clickable: true,
                          },
                          effect: 'coverflow',
                          coverflowEffect: {
                              rotate: 30,
                              stretch: 10,
                              depth: 200,
                              modifier: 1.5,
                              slideShadows: true,
                          },
                          spaceBetween: 30,
                          centeredSlides: true,
                          slidesPerView: 'auto',
                          grabCursor: true,
                          breakpoints: {
                              640: {
                                  slidesPerView: 1,
                              },
                              1024: {
                                  slidesPerView: 1,
                              },
                          },
                      });
                  }
              }, 100)
          })
          .catch(error => console.error('Erreur lors du chargement des projets:', error))
  })
})
