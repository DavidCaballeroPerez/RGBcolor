// elementos input
const rojoS = document.getElementById("rojo");
const verdeS = document.getElementById("verde");
const azulS = document.getElementById("azul");
console.log(rojoS);

// elementos text
const rojoT = document.querySelector("#textoRojo");
const verdeT = document.querySelector("#textoVerde");
const azulT = document.querySelector("#textoAzul");

//
rojoT.textContent = rojoS.value;
azulT.textContent = azulS.value;
verdeT.textContent = verdeS.value;
let rojoV = rojoS.value;
let azulV = azulS.value;
let verdeV = verdeS.value;

//actualiza texto de color

rojoS.addEventListener("change", () => {
  rojoV = rojoS.value;
  rojoT.textContent = rojoV;
  actualizarcolor(rojoS, verdeS, azulS);
});
verdeS.addEventListener("change", () => {
  verdeV = verdeS.value;
  verdeT.textContent = verdeV;
  actualizarcolor(rojoS, verdeS, azulS);
})
azulS.addEventListener("change", () => {
  azulV = azulS.value;
  azulT.textContent = azulV;
  actualizarcolor(rojoS, verdeS, azulS);
});


//acualizar color background
const actualizarcolor = (rojoS, verdeS, azulS) => {
  const colorRGB = `rgb(${rojoS.value},${verdeS.value},${azulS.value})`;
  document.body.style.backgroundColor = colorRGB;
  console.log(`rgb(${rojoS.value},${verdeS.value},${azulS.value})`);
}

//