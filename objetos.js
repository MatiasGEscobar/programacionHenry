var deportes = {
    conBalon: ['Futbol', 'Basketball', 'Golf'],
    sinBalon: ['Boxeo', 'Surf', 'Trekking'],
 };
var persona = { nombre: 'Lucas', edad: 26, estudios: { esProgramador: true } };
console.log(persona.edad)//26 (ACCEDEMOS A LA PROPIEDAD)
persona.nombre = "Martin" // ASIGNAMOS OTRO VALOR A LA PROPIEDAD 
// console.log(persona.nombre);//"martin"
persona.edad= 32;
// console.log(persona.edad)//32


////////////CREAMOS UN OBJETO Y LO BORRAMOS
var autos = {};
autos.marca = ["Ford", "Audi", "Chevrolet"];
// console.log(autos)  === {marcas = ["Ford", "Audi", "Chevrolet"]};
delete autos.marca;
// console.log(autos)  === {};


//FUNCIONES DENTRO DE LA PROPIEDAD
var misFunciones ={
    saludar : function(){
        console.log("Hola")
    }
}
misFunciones.saludar();

///DOT NOTATION
var atuendos ={manos:["Guantes","Anillos"], pies:["Zapatos","Soquetes"]}
// console.log(atuendo.manos); dot es porque se usa el punto entre atuendo (objeto) y manos (propiedad)

//BRAQUET NOTATION
atuendos["piernas"] = ["Bermudas","Pantalones"]

var comidas={}
var DiferenciaDeNotacion = function(PropUno,PropDos){
    comidas.PropUno=["Frutas", "Vegetales"]
    comidas[PropDos]= ["Hamburguesa", "Papa Frita"] // sin comillas toma el nombre de "noSaludable" por el bracket notation
}
DiferenciaDeNotacion("Saludable","noSaludable")


 