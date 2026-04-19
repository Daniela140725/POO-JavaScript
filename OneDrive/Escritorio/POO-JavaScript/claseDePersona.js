//Escribe un programa en JavaScript para crear una clase llamada "Persona" con propiedades para nombre, edad y país. I
//incluye un método para mostrar los datos de la persona. Crea dos instancias de la clase 'Persona' y muestra sus datos.
class Persona {constructor(nombre,edad,pais){
    this.nombre=nombre;
    this.edad=edad;
    this.pais=pais;
}
mostrarInfo(){
    console.log("nombre:"+this.nombre);
    console.log("edad:"+this.edad);
    console.log("pais:"+this.pais);
}
}
//crear personas
let p1 = new Persona("Daniela", 18, "Colombia");
let p2 = new Persona("Carlos", 22, "México");
//mostrar datos
console.log("datos de la persona1:");
p1.mostrarInfo();
console.log("-----------------")
console.log("datos de la persona2:");
p2.mostrarInfo();