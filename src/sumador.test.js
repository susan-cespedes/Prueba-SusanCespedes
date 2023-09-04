import validarcampo from "./sumador.js";

describe("VALIDAR CAMPO", () => {
  it("el post deberia tener un titulo", () => {
    const dato="titulo de post"
    expect(validarcampo(dato)).toEqual(true);
  });
});
