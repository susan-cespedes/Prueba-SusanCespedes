import {validarcampo,validarlongitud} from "./sumador.js";

describe("VALIDAR CAMPO", () => {
  it("el post deberia tener un titulo", () => {
    const dato="titulo de post"
    expect(validarcampo(dato)).toEqual(true);
  });

  it("el post deberia tener un titulo", () => {
    const dato=""
    expect(validarcampo(dato)).toEqual(false);
  });

  it("titulo deberia ser maximo de 50 caracteres", () => {
    const dato="holaaaaaaaaaaaaaaaaaaaaaaaa"
    expect(validarlongitud(dato)).toEqual(true);
  });

  

});
