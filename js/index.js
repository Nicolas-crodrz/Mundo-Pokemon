let $ = (id) => document.getElementById(id);
let url = [
  "../img/background/homeModel1.jpeg",
  "../img/background/homeModel2.png",
  "../img/background/homeModel3.png",
  "../img/background/homeModel4.jpg",
];
let species = $("species");
let fondo = $("container");
let historia = $("history");
let media = $("media");
let trancition = fondo.style.transitionDuration = "3s";

//Default
fondo.style.backgroundImage = `url(${url[0]})`;

//Species
species.addEventListener("mouseover", () => {
  fondo.style.backgroundImage = `url(${url[1]})`;
  historia.style.display = "none";
  media.style.display = "none";
});

species.addEventListener("mouseout", () => {
  fondo.style.backgroundImage = `url(${url[0]})`;
  historia.style.display = "";
  media.style.display = "";
});

//History
historia.addEventListener("mouseover", () => {
  fondo.style.backgroundImage = `url(${url[2]})`;
  species.style.display = "none";
  media.style.display = "none";
});

historia.addEventListener("mouseout", () => {
  fondo.style.backgroundImage = `url(${url[0]})`;
  species.style.display = "";
  media.style.display = "";
});

//Media
media.addEventListener("mouseover", () => {
  fondo.style.backgroundImage = `url(${url[3]})`;
  historia.style.display = "none";
  species.style.display = "none";
});

media.addEventListener("mouseout", () => {
  fondo.style.backgroundImage = `url(${url[0]})`;
  historia.style.display = "";
  species.style.display = "";
});
