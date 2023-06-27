//1. REEMPLAZANDO NUMEROS
//  recorre un arreglo de números, y reemplaza cada uno siguiendo estas reglas,
//* cuadriplica (X4) los numeros pares, * duplica (X2) los numeros impares, * y reemplaza los números menores a -50 por el número 0.
//Ejemplo: reemplazarNumeros([1, 2, 3])
//debe retornar: [2, 8, 6]

function reemplazarNumeros(arrNumbers){
    //Tu codigo aqui
}

//2.CLASE RECETA
//Para este ejercicio, deberás definir una clase Receta con sus propiedades y métodos.
//Las propiedades de la clase Receta son: nombre, ingredientes, pasos.
//El constructor de la clase recibe esos tres datos por parámetro en ese mismo orden.
//Los métodos propios de la clase Receta son: 
//·obtenerNombre: retorna  el nombre de la receta.
//·agregarIngrediente: permite agregar un nuevo elemento al arreglo de ingredientes
//·agregarPaso: permite agregar un nuevo elemento al arreglo de pasos
//·obtenerIngredientes: retorna todos los ingredientes de la receta
//·obtenerPasos: retorna todos los pasos de la receta
//Ejemplo:
// var receta1 = newReceta('Arroz cocido', ['Arroz', 'Aceite', 'Sal'], ['Hervir agua con sal y aceite', 'Agregar el arroz', 'Bajar fuego cuando seque y tapar'])
// La nueva instancia CredentialsContainer, receta1, debería tener
// receta1.obtenerNombre() //debería retornar 'Aroz cocido'
// receta1.obtenerPasos() //debería retornar 'Hervir agua con sal y aceite, Agregar arroz, Bajar fuego cuando seque y tapar'
// receta1.agregarPaso('Esperar que termine la coccion')
// receta1.obtenerPasos() //debería retornar 'Hervir agua con sal y aceite, Agregar arroz, Bajar fuego cuando seque y tapar, Esperar que termine la coccion'
// receta1.obtenerIngredientes() // debería retornar 'Arroz, Aceite, Sal'
// DESCRIPCION DE LOS METODOS
// El constructor recibe como parametro(s):
// ·nombre:String
// ·ingredientes: arreglo de Strings
// ·pasos: arreglo de Strings

// El metodo obtenerNombre retorna un String
// el metodo obtenerNombre no recibe parametros 

// El metodo agregarPaso no retorna nada
// el metodo agregarPaso recibe por parametros 
// · paso: String

// El metodo agregarIngrediente no retorna nada
// el metodo agregarIngrediente recibe por parametros 
// · ingrediente: String

// El metodo obtenerIngredientes retorna un String
// el metodo obtenerNombre no recibe parametros 

// El metodo obtenerPasos retorna un String
// el metodo obtenerPasos no recibe parametros 

//Completa la receta a constinuacion:
class Receta{
    constructor(nombre, ingredientes, pasos){
        //Inicializar las propiedades de la Receta con los valores recibidos como argumento
        //Tu código aqui 
    }

    obtenerNombre(){
        // tu código aqui
    }

    agregarPaso(paso){
        // tu código aqui
    }

    agregarIngrediente(ingrediente){
        // tu código aqui
    }

    obtenerPasos(){
        //tu código aqui
    }

    obtenerIngredientes(){
        //tu código aqui
    }
}

//3. Personajes TARGARYEN
// la funcion a construir recibe un arreglo de personajes, y crea un nuevo array con los nombres de los que pertenecen a la familia Targaryen,
// modificando cada nombre para incluir "of House Targaryen" al final y convirtiendo todo el texto a mayúsculas.
// Por ejemplo: personajesTargaryen (['Daenerys Targaryen','Jon Snow', 'Tyrion Lannister'])
// Debería retornar: [DAENERYS TARGARYEN OF HOUSE TARGARYEN]
// DESCRIPCION DE LA FUNCION
// La funcion personajesTargaryen debe retornar un arreglo de strings.
// la funcion personajesTargaryen recibe como parametro(s):
// ·personajes: un arreglo de strings

//COMPLETA LA FUNCION 'personajesTargaryen'a continuacion.
function personajesTargaryen(personajes){
    //tu código aqui
}

// 4.Escribe una funcion que, a partir de una lista de personas, identifique cuáles de ellas vinieron a la fiesta disfrazadas de algún personaje,
// y retorne nombres en una nueva lista. Para lograrlo, deberás verificar en cada una si cuenta con la propiedad disfraz en "true" y si tiene a la propiedad "personaje definida"
// EJEMPLO: let personas = [{nombre: "Juan Manuel", disfraz: true, personaje: "Wally"}, {nombre: "Mariana", disfraz: true, personaje:"La momia"}, {nombre: "Pedro", disfraz: false}]
// fiestadeDisfraces(personas)
// DEBERIA RETORNAR: ["Juan Manuel", "Mariana"]
// DESCRIPCION DE LA FUNCION
// la funcion debe retornar un arreglo de strings, donde cada string es el nombre de una persona. La funcion recibe un arreglo de objetos.
// El arreglo retornado debe contener los nombres de todas las personas que cumplen con los siguientes criterios:
// · Tiene una propiedad "disfraz" en "true".
// · Tiene una propiedad "personaje".
function FiestaDeDisfraces(personas) {
    //tu codigo aqui
}



// 5. la funcion deberia retornar un NUMERO
// la funcion acepta un ARREGLO de OBJETOS como parametro.

function totalMonedas(jugadores) {
//tu codigo aqui    
}

// 6. Mayor: Par o Impar
// Escribe una funcion llamada "mayorPar" que reciba como parametro un arreglo de numeros enteros. La funcion debe identificar el numero Mayor
// en el arreglo y determinar si es par o impar. Si el numero mayor es par, la funcion debe devolver un arreglo con el numero mayor y un booleano true, 
// en caso contrario, si el numero mayor es impar, la funcion debe devolver un arreglo con el numero mayor y el valor booleano false.
// EJEMPLO: let numbers = [15, 85, 64, 32, 22, 74, 98, 21, 67]
// mayorPar(numbers)
// DEBERIA RETORNAR: [98, true]

// *debe retornar un ARREGLO.
// *recibe un ARREGLO DE NUMEROS como parametro.

function mayorPar(numbers) {
//tu codigo aqui    
}



// 7. HEROE, MILITAR O CIVIL
// crea una funcion llamada verificarHeroe que reciba como parametro un objeto con informacion sobre un heroe.
// la funcion verificarHeroe que verifique si un heroe es militar y ha participardo en batallas, y muestre un mensaje correspondiente dependiendo 
// de la condicion. Las reglas son:
// · si el heroe es un militar y ha participado en batallas, la funcion debe retornar el siguiente mensaje: ${nombre}, es héroe militar y ha 
// participado en batallas.
// · si el heroe es un militar pero no ha participado en batallas, la funcion debe retornar el siguiente mensaje: ${nombre}, aunque es héroe militar,
// no ha participado en batallas.
// · si el heroe no es militar y tampoco ha participado en batallas, la funcion debe retornar el siguiente mensaje: ${nombre}, no es militar y tampoco
// ha participado en batallas.
// · si el heroe no es militar pero ha participado en batallas, la funcion debe retornar el siguiente mensaje: ${nombre}, aunque no es héroe militar,
// ha participado en batallas.
// EJEMPLO: const heroe = {
//     nombre: "John Doe",
//     fechaNacimiento: "10 de Enero de 1980",
//     lugarNacimiento: "Ciudad X",
//     logros: "Ganador de múltiples medallas",
//     esMilitar: true,
//     batalla: true,
// };
// verificarHeroe(heroe);
// DEBERIA RETORNAR:
// 'John Doe, es héroe militar y ha participado en batallas'.

function verificarHeroe(heroe) {
    //tu código aqui
}