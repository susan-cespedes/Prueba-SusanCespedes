import validarcampo from "./sumador";

const titulo = document.querySelector("#titulo");
const detalle = document.querySelector("#detalle");
const boton = document.querySelector("#publicar-button");
const div = document.querySelector("#resultado-div");

boton.addEventListener("click", (event) => {
  event.preventDefault();

  const titulopost=titulo.value;
  const detallepost=detalle.value;
  const resultado=validarcampo(titulopost);
  if(resultado===true){
    div.innerHTML = `<p>TITULO:${titulopost}</p>
  <p>CONTENIDO:${detallepost}</p>
  `;
  }
  else{
    div.innerHTML = `<p>No puedes ingresar un mensaje sin un titulo</p>
  `;
  }

  
});
