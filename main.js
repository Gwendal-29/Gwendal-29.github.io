//constante

const cursor = document.getElementById("pointor");
const footer = document.querySelector("footer");
const contact = document.querySelector(".contact");
const imgCv = document.getElementById("img-cv");
const disapear = document.querySelector("disapear");
const projet = document.querySelector("project");

const scroll = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true,
  tablet: { smooth: true },
  smartphone: { smooth: true },
});

// avoir un beau curseur
document.addEventListener("mousemove", (e) => {
  cursor.style.top = e.pageY + "px";
  cursor.style.left = e.pageX + "px";
});

// Changer la couleur de fond
scroll.on("scroll", () => {
  if (document.querySelector("#color.is-inview")) {
    document.body.style.backgroundColor = "#000101";
    document.body.style.color = "#fefeff";
  } else {
    document.body.style.backgroundColor = "#fefeff";
    document.body.style.color = "#000101";
  }
});

// Retirer la margine lors du rétrécissement de l'écrans
window.addEventListener("resize", () => {
  if (getComputedStyle(contact).flexWrap === "wrap") {
    imgCv.style.marginBottom = 20 + "px";
  }
});

// Fenetre modale

const modalTrigger1 = document.querySelector(".modal-trigger1");
const modal1 = document.getElementById("modal-1");

const modalTrigger2 = document.querySelector(".modal-trigger2");
const modal2 = document.getElementById("modal-2");

const modalTrigger3 = document.querySelector(".modal-trigger3");
const modal3 = document.getElementById("modal-3");

const modalTrigger4 = document.querySelector(".modal-trigger4");
const modal4 = document.getElementById("modal-4");

const modalTrigger5 = document.querySelector(".modal-trigger5");
const modal5 = document.getElementById("modal-5");

const modalTrigger6 = document.querySelector(".modal-trigger6");
const modal6 = document.getElementById("modal-6");

const buttonModal = document.querySelectorAll(".button-modal");
const modalContainer = document.querySelectorAll(".modal-container");

modalTrigger1.addEventListener("click", () => {
  modal1.classList.add("modal-container-toggle");
});
modalTrigger2.addEventListener("click", () =>
  modal2.classList.add("modal-container-toggle")
);

modalTrigger3.addEventListener("click", () =>
  modal3.classList.add("modal-container-toggle")
);
modalTrigger4.addEventListener("click", () =>
  modal4.classList.add("modal-container-toggle")
);
modalTrigger5.addEventListener("click", () =>
  modal5.classList.add("modal-container-toggle")
);
modalTrigger6.addEventListener("click", () =>
  modal6.classList.add("modal-container-toggle")
);

buttonModal.forEach((element) =>
  element.addEventListener("click", () => {
    modalContainer.forEach((element) =>
      element.classList.remove("modal-container-toggle")
    );
  })
);
