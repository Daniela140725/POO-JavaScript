class Rectangulo {
  constructor(ancho, alto) {
    this.ancho = ancho;
    this.alto = alto;
  }

  area() {
    return this.ancho * this.alto;
  }

  perimetro() {
    return 2 * (this.ancho + this.alto);
  }
}

// crear rectángulo
let r1 = new Rectangulo(12, 10);

// mostrar resultados
console.log("Área: " + r1.area());
console.log("Perímetro: " + r1.perimetro());