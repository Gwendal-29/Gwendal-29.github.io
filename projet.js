//constante

const cursor = document.getElementById("pointor");
const footer = document.querySelector("footer");
const contact = document.querySelector(".contact");
const imgCv = document.getElementById("img-cv");

const textContainer = document.querySelector(".text-container");
const originalText = textContainer.textContent;

const scroll = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true,
  tablet: { smooth: true },
  smartphone: { smooth: true },
});

// avoir un beau curseur
document.addEventListener("mousemove", (e) => {
  cursor.style.top = e.pageY-10 + "px";
  cursor.style.left = e.pageX-10 + "px";
});

// Changer la couleur de fond
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

let index = 1;
setInterval(() => {
  if (index <= originalText.length) {
    textContainer.textContent = originalText.slice(0, index);
    index++;
  } else {
    index = 1;
  }
}, 300);
