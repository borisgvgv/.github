const cabecera= document.querySelector("body");
const divCabecera = document.createElement("div");
cabecera.append(divCabecera);

const logo = document.createElement("div");
logo.id="logo";
divCabecera.append(logo);
const h1 = document.createElement("h1");
logo.append(h1);
h1.innerText="LOG";

const menu = document.createElement("div");
divCabecera.append(menu);

const ul = document.createElement("ul");
menu.append(ul);

const li =[];
const txtEnlaces = ["Nuevo", "Pedir", "Detener"];
for(let i = 0; i < txtEnlaces.length; i++){
  li[i] = document.createElement("li");
  ul.append(li[i]);
  li[i].innerHTML=`<a href="#">${txtEnlaces[i]}</a>`;
};