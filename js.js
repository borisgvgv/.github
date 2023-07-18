const cabecera= document.querySelector("body");
const divCabecera = document.createElement("div");
cabecera.append(divCabecera);

const logo = document.createElement("div");
divCabecera.append(logo);
const h1 = document.createElement("h1");
logo.append(h1);
h1.innerText="LOG";

const menu = document.createElement("div");
divCabecera.append(menu);

const