function validarcampo(dato) {
  if (dato ===''){
    return false
  }
  return true;
}

function validarlongitud(dato) {
  const longitudtexto=dato.length;
  if (longitudtexto <=50){
    return true
  }
  return false;
}

export {validarcampo,validarlongitud};
