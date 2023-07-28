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

// ENTRADAS -------------------------------------

const seccionEntradas = document.querySelector("body");
  const entradas = document.createElement("div");
  seccionEntradas.append(entradas);
  entradas.id="entradas";

function entrada(titulo, enlace){
  const entrada = document.createElement("div");
  entradas.append(entrada);
  entrada.classList.add("entrada");
  const txtEntrada = document.createElement("div");
  entrada.append(txtEntrada);
  txtEntrada.classList.add("txtEntrada");

  const h1 = document.createElement("h1");
  txtEntrada.append(h1);
  const a = document.createElement("a");
  h1.append(a);
  a.innerText = titulo;
  a.style.color = "#fff";
  a.target="blank";
  a.href = enlace;
}
entrada("Nuevo","#");
entrada("Pedir","#");
entrada("Detener","#");
entrada("Entrada4","#");
entrada("Entrada5","#");




