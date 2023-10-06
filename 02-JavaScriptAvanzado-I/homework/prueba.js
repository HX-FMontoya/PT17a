function discoteca(props) {
  // { name: "Alejo",}
  try {
    if (!props.edad) throw Error("Edad no existe");
    if (props.edad < 18) throw Error("Edad es menor a 18");
    if (!props.name) throw Error("No existe nombre");
  } catch (error) {
    alert(error);
  } finally {
    console.log("hola");
  }
}

class Persona {
  constructor(props) {
    this.nombre = props.name;
  }
  saludar() {
    return "Hola";
  }
}

/* function Persona(props) {
  this.nombre = props.name;
}

Persona.prototype.saludar = function () {
  return "hola";
}; */

const persona1 = new Persona({ name: "Feli" });
console.log(persona1.saludar());

const personas = [
  {
    name: "Alejo",
    edad: 18,
  },
  {
    name: "Cris",
    edad: 18,
  },
];

personas.forEach(function (persona) {
  return discoteca(persona);
});

/* console.log("hola");
console.error("este es un error");
console.warn("este es un warning"); */
