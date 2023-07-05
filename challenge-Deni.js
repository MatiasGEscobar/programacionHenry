// #1: Mayor menor
//Escribe una función que reciba un arreglo de números y retorne un nuevo arreglo conteniendo
//solamente el mayor y el menor valor, en ese orden.
//Ejemplo: mayorMenor ([9, 17, 6, 2, 4]); Debería retornar: [17, 2] dado que el 17 es el
//mayor valor del arreglo recibido, y 2 es el menor.
// * La función debería retornar un ARREGLO DE ENTEROS
// * La función acepta un ARREGLO DE ENTEROS como parámetro.

function mayorMenor (numeros){

}



// #2: Palabra más larga
// La función palabraMasLarga recibe un arreglo de frases y debe devolver la palabra más larga
//entre todas las frases. Es decir, debe devolver la palabra con mayor cantidad de caracteres
//Ejemplo: palabraMasLarga (['hola esto es un string', 'frase con palabra'])
//Debería retornar: 'palabra'
//*La función debe retornar un STRING
//* La función recibe un ARRAY DE STRINGS "frases" como parámetro

function palabraMasLarga (frases){

}

//#3: Clase Emprendedor
//Para este ejercicio, deberás definir una clase Emprendedor con sus propiedades y métodos.
//Las propiedades de la clase Emprendedor son: nombre, apellido, libros, mascotas.
//El constructor de la clase recibe esos cuatro datos por parámetro en ese mismo orden.
//Los métodos propios de la clase Emprendedor son:
//1. getNombreCompleto: retorna un string conteniendo nombre y apellido del emprendedor
//2. addMascota: permite agregar un nuevo elemento al arreglo de mascotas
//3. countMascotas: retorna la cantidad de mascotas del emprendedor.
//4. addLibro: permite agregar un nuevo elemento al arreglo de libros
//5. getLibros: retorna un arreglo con los títulos de todos los libros del emprendedor.

class Emprendedor {
    constructor (nombre, apellido, libros, mascotas) {
    //Inicializar las propiedades del emprendedor con los valores recibidos como argumento

    }


    getNombreCompleto(){
        //Retorna un string conteniendo nombre y apellido del emprendedor

    }

    addMascota () {
        //Agrega una mascota al arreglo de mascotas

    }

    countMascotas(){
        //Retorna la cantidad de mascotas del emprendedor

    }

    addLibro (){
        //Agregar un objeto: {titulo: titulo, autor: autor} al arreglo de libros

    }

    getLibros (){
        //Retorna un arreglo con los títulos de todos los libros en el arreglo de libros

    }
}


//#4. Cuántos online:
//Imagina que estas desarrollando una aplicación para jugar videojuegos en línea, y quieres
//que, al momento de ingresar a la aplicación, un usuario pueda saber cuántas personas hay
//conectadas.
//Escribe una función que, a parir de un objeto donde cada propiedad representa un usuario,
//permita identificar cuántos de esos usuarios están online (es decir, cuya propiedad online
//tiene como valor true).
//*La función debería retornar un booleano
//*La función acepta un objeto como parámetro.

function cuantosOnline (usuarios){

}


//7. El próximo fin de semana se celebrará una competencia de fútbol entre dos equipos. 
//Los resultados de los partidos se registrarán a lo largo del día con formato 
//golesDelEquipoA:golesDelEquipoB; por ejemplo, 3:1, indicando que el equipo A anotó 3 goles, 
//y el B anotó 1. Al finalizar la competencia, los organizadores deberán calcular cuántos 
//puntos ha obtenido cada equipo. Para hacer más simple una parte de esta tarea.
//Escribe una función que reciba los resultados de todos los partidos en un arreglo, 
//y retorne el puntaje total obtenido por el equipo A, teniendo en cuenta que: 
//un equipo suma 3 puntos por partido ganado, y 1 punto por partido empatado; 
//los partidos perdidos no suman ni restan puntos; y la cantidad de goles del equipo A 
//es el primer número de cada par. 

function puntosDelEquipo(resultados){

}

//#8. Buscando a Wally
//Como en los clásicos libros de nuestra infancia, hoy necesitamos encontrar a Wally entre
//muchos otros personajes. Deberás escribir una función que encuentre al string "Wally" dentro
//de un arreglo, y retorne el string "He encontrado a Wally en la posición X" donde X sea el 
//índice del arreglo que ocupa "Wally".
//Por ejemplo: buscandoAWally (['Dobby'], ['Harry'], ['Dementor'], ['Wally']. ['Sirius'])
//Debería retornar: "He encontrado a Wally en la posición 3"
//*La función debe retornar un string
//*La función acepta un ARREGLO DE STRINGS como parámetro

function buscandoAWally (personajes) {

}

//10. Selecciona un plan
//Descripción del ejercicio: Diseña una lista de precios con diferentes planes o paquetes
//de servicio. Podrás aplicar cuantos estilos creas necesarios para resaltar el plan
//recomendado y mostrar las características de cada uno.
//Para tener en cuenta: No se evaluará el criterio estético: el objetivo del ejercicio es
//estructurar el documento correctamente con etiquetas de HTML y de estilos con selectores
//y las propiedades correctas de CSS.
//Debes escribir tu código en las pestañas HTML Y CSS (no es necesario que escribas código
//Javascript)
