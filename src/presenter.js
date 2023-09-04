import {validarcampo,validarlongitud,validarlongituddetalle} from "./sumador";

const titulo = document.querySelector("#titulo");
const detalle = document.querySelector("#detalle");
const boton = document.querySelector("#publicar-button");
const div = document.querySelector("#resultado-div");

let postnumero1='';
let postnumero2='';

boton.addEventListener("click", (event) => {
  event.preventDefault();

  const titulopost=titulo.value;
  const detallepost=detalle.value;
  const resultado=validarcampo(titulopost);
  const longitudMensaje=validarlongitud(titulopost);
  const longituddetalle=validarlongituddetalle(detallepost);
  

  if(resultado==false || longitudMensaje==false || longituddetalle==false){
    div.innerHTML = `<p>No puedes ingresar un mensaje sin un titulo/ El texto tiene que ser menor a 50 caracteres/ El detalle tiene que ser menor a 150 caracteres</p>
  `;
  }
  else{
    if(postnumero1===""){
      postnumero1=titulopost;
    }
    else if(postnumero2===""){
      postnumero2=titulopost;
    }
    div.innerHTML = `<p>TITULO1:${postnumero1}</p>
    <p>TITULO2:${postnumero2}</p>
    <p>CONTENIDO:${detallepost}</p>
    `;
  }

  
});
