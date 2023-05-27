//constante 

const cursor = document.getElementById("pointor");
const footer = document.querySelector("footer");
const contact = document.querySelector(".contact");
const imgCv = document.getElementById("img-cv");
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

// 

