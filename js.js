const cabecera= document.querySelector("body");
const divCabecera = document.createElement("div");
cabecera.append(divCabecera);
divCabecera.id="cab";

const logo = document.createElement("div");
logo.id="logo";
divCabecera.append(logo);
const h1 = document.createElement("h1");
logo.append(h1);
h1.innerText="LOG";

const menu = document.createElement("div");
menu.id="menu_cab";
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

function entradas(titulo){
  const seccionEntradas = document.querySelector("body");
  const entradas = document.createElement("div");
  seccionEntradas.append(entradas);
  entradas.id="entradas";
  const entrada = document.createElement("div");
  entradas.append(entrada);
  entrada.classList.add("entrada");
  entrada.innerHTML=`<h1>${titulo}</h1>`;
}
entradas("Nuevo");
entradas("Pedir");
entradas("Detener");




