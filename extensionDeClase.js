class persona {
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }
    saludar(){
        console.log("Hola, mi nombre es " + this.nombre + ". Tengo " + this.edad);
    } 
}

//EXTENSION DE CLASE, creamos una clase llamada programador
class Programador extends persona{
    constructor(nombre, edad, añosDeExperiencia){                          //indicamos que propiedades queremos que tenga la clase
        super(nombre, edad);                                                    //recibe las propiedades heredades sino que tambien que su nuevo contexto es la clase programador
        this.añosDeExperiencia = añosDeExperiencia
    }   
    codear(){
        console.log("Soy " + this.nombre + ". Codeo desde hace " + this.añosDeExperiencia + " años.");
    }

}

var Martin = new persona("Martin", 26);
var programador = new Programador("Maria", 37, 4)                                          // creamos una instancia de la clase programador
Martin.saludar();
programador.codear();
programador.saludar();             // porque se heredan los metodos


