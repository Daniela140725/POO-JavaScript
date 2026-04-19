class Figura {
  calcularArea() {
    throw new Error("Este método debe ser reemplazado");
  }
}

class Circulo extends Figura {
  constructor(radio) {
    super();
    this.radio = radio;
  }

  calcularArea() {
    return Math.PI * this.radio * this.radio;
  }
}

class Rectangulo extends Figura {
  constructor(ancho, alto) {
    super();
    this.ancho = ancho;
    this.alto = alto;
  }

  calcularArea() {
    return this.ancho * this.alto;
  }
}

// crear figuras
let c1 = new Circulo(7);
let r1 = new Rectangulo(8, 9);

// mostrar resultados
console.log("Área del círculo: " + c1.calcularArea());
console.log("Área del rectángulo: " + r1.calcularArea());