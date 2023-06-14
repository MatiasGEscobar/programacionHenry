var listadeCompras = [];
listadeCompras[3]= "Tomates"
listadeCompras[1]= "lechuga"
console.log (listadeCompras)



///ver que elementos tiene guardado el arreglo
var ElementodelArrays = listadeCompras[1]
console.log (ElementodelArrays);


///como saber cuantos elementos tiene el arreglo
console.log (listadeCompras.length)


//metodos
var colores=["amarillo", "azul"];
colores.push("rojo");//se agrega el color rojo al final de la lista
colores.unshift("verde")//se agrega el color verde al principio de la lista
colores.pop()//elimina el ultimo elemento de la lista
colores.shift()//elimina el primer elemento de la lista
console.log (colores)

//includes
var pintores = ['Picasso', 'Velázquez', 'Van Gogh', 'Dalí'];
var existeDali = pintores.includes('Dalí');// nos muestra true ya que esta dentro del listado
console.log(existeDali)

//every
var numeros = [ 1, 6, 8, 9, 43 ];
var cumplenCondicion = numeros.every( ( num ) => { num > 5 } );//si existe un elemento que no cumpla la condicion retorna false
console.log(cumplenCondicion);

var palabra = "henri"
var palabraseparada = palabra.split("")//separa la palabra por cada caracter
palabraseparada.pop()//elimina la ultima letra
palabraseparada.push("y") //agrega al final
var palabraarreglada=palabraseparada.join("")

console.log (palabraarreglada)//cambiamos la i por la y

//for each
var numeros = [ 1, 2, 3, 4 ];
numeros.forEach( (num) => { console.log(num) } )//muestra un listado detallado
//si queremos ver solo los n° 3
numeros.forEach ((num)=> {
    if (num===3){
        console.log(num)}
    })

// para cambios en el arreglo
var MasUno = numeros.map(num=> {return num +1}) // suma 1 a todos los numeros del listado
console.log (MasUno)

///BUCLES
var arr = [1, 2, 3, 4, 5]
for(var i=0; i < arr.length; i++ ) /// arr.leg, se itera sobre todos los elementos, en caso de solo querer iterar sobre los primeros 3 debera ser: i<3
{console.log(arr[i])};


///construir una funcion que reciba un string y revise si alguna de las letras del string es la letra p
function EncontrarLetraP (string){
    var letras= string.split("");
    for (let i = 0; i < letras.length; i++){
        if(letras [i] === "p"){
            console.log("si contiene a P")
    }
    }
}
EncontrarLetraP("javascript")//solo muestra una vez el mensaje
EncontrarLetraP("henry")

//WHILE, agregar 5 veces la palabra boom
var arr= []
while(arr.length < 5){
arr.push("BOOM")
}
console.log(arr)

