class Animal {
  constructor(tipo, sonido) {
    this.tipo = tipo;
    this.sonido = sonido;
  }

  hacerSonido() {
    console.log("Sonido: " + this.sonido);
  }
}

class Perro extends Animal {
  constructor(tipo, sonido, color) {
    super(tipo, sonido);
    this.color = color;
  }

  hacerSonido() {
    super.hacerSonido();
    console.log("Color: " + this.color);
  }
}

// crear perro
let p1 = new Perro("Perro", "Guau", "Café");

// mostrar info
console.log("Datos del perro:");
p1.hacerSonido();