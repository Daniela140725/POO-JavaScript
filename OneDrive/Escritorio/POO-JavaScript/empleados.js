class Empleado {
  constructor(nombre, salario) {
    this.nombre = nombre;
    this.salario = salario;
  }

  salarioAnual() {
    return this.salario * 12;
  }
}

class Gerente extends Empleado {
  constructor(nombre, salario, area) {
    super(nombre, salario);
    this.area = area;
  }

  salarioAnual() {
    let base = super.salarioAnual();
    let bono = base * 0.1; // 10%
    return base + bono;
  }
}

// crear empleados
let g1 = new Gerente("Daniela", 5000, "Marketing");
let g2 = new Gerente("Carlos", 5500, "Ventas");

// mostrar datos
console.log("Gerente: " + g1.nombre);
console.log("Área: " + g1.area);
console.log("Salario anual: $" + g1.salarioAnual());

console.log("-------------");

console.log("Gerente: " + g2.nombre);
console.log("Área: " + g2.area);
console.log("Salario anual: $" + g2.salarioAnual());