class Cuenta {
  constructor(numero, nombre, saldo) {
    this.numero = numero;
    this.nombre = nombre;
    this.saldo = saldo;
  }

  consignar(valor) {
    this.saldo += valor;
    console.log("Se consignó $" + valor + " a la cuenta " + this.numero);
  }

  retirar(valor) {
    if (valor <= this.saldo) {
      this.saldo -= valor;
      console.log("Se retiró $" + valor + " de la cuenta " + this.numero);
    } else {
      console.log("No hay saldo suficiente");
    }
  }

  transferir(valor, cuentaDestino) {
    if (valor <= this.saldo) {
      this.saldo -= valor;
      cuentaDestino.consignar(valor);
      console.log("Se transfirió $" + valor + " a la cuenta " + cuentaDestino.numero);
    } else {
      console.log("No alcanza para transferir");
    }
  }

  mostrar() {
    console.log("Cuenta " + this.numero + " - Saldo: $" + this.saldo);
  }
}

// crear cuentas
let c1 = new Cuenta("001", "Daniela", 2000);
let c2 = new Cuenta("002", "Carlos", 3000);

// operaciones
c1.mostrar();
c2.mostrar();

c1.consignar(500);
c1.mostrar();

c1.retirar(200);
c1.mostrar();

c1.transferir(700, c2);
c1.mostrar();
c2.mostrar();