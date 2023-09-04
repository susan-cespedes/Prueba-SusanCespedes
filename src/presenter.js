import sumar from "./sumador";

const titulo = document.querySelector("#titulo");
const detalle = document.querySelector("#detalle");
const boton = document.querySelector("#publicar-button");
const div = document.querySelector("#resultado-div");

boton.addEventListener("click", (event) => {
  event.preventDefault();

  const titulopost=titulo.value;
  const detallepost=detalle.value;

  div.innerHTML = `<p>TITULO:${titulopost}</p>
  <p>CONTENIDO:${detallepost}</p>
  `;
});
