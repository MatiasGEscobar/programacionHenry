//funcion constructora
function Auto (puertas, color, marca, año, ruedas){// estos datos son recibidos como parametros
    this.puertas = puertas;
    this.color = color;
    this.marca = marca;
    this.año = año;
    this.ruedas = ruedas;

    //metodo
    this.information = function(){
        console.log("Este es un " + this.marca + " de color " + this.color);
    }
}

var miPrimerAuto = new Auto(2, "rojo", "ferrari", 2018, 4)
miPrimerAuto.information(); // imprime el mensaje
console.log(miPrimerAuto);
console.log(miPrimerAuto.marca);


//expresion de class
class Auto{             ///para asociar metodos lo realizamos por fuera del constructor
    constructor(puertas, color, marca, año, ruedas){
        this.puertas = puertas;
    this.color = color;
    this.marca = marca;
    this.año = año;
    this.ruedas = ruedas;
    }
    information(){
        console.log("Este es un " + this.marca + " de color " + this.color);
    }
}
var miSegundoAuto = new Auto (4, "Blanco", "Fiat", 2015, 4)



///ej
class football{
    constructor(jugador){
this.jugador = jugador
    }
    obtenerNombre(){
        console.log(this.jugador);
    }
}

var argentina = new football ("Messi")  
var brasil = new football ("Pele")

argentina.obtenerNombre()
brasil.obtenerNombre()