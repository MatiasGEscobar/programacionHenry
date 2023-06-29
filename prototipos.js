///transformar en un arreglo todos los n° mayores a 3 que tenga un arreglo (false)
Array.prototype.mayoresQueTres = function() {
var arregloModificado = [];
for (i=0; i<this.length;i++){
    if(this[i]>3){
        arregloModificado.push(false);
    }else {
        arregloModificado.push(this[i]);
    }
}
return arregloModificado
}

var arreglo = [1, 2, 3, 4, 5]
var nuevoArreglo = arreglo.mayoresQueTres();

console.log(nuevoArreglo);

///2do ejemplo 
class latinoamerica {
    constructor(){ 
        this.paises = []
    }
}/// mediante el prototipo de esta clase agregaremos el nombre de un pais

latinoamerica.prototype.agregarPais = function(pais){ //agregarPais es el METODO / pais es el PARAMETRO
    this.paises.push(pais) // paises es la PROPIEDAD
}

var continente = new latinoamerica();
continente.agregarPais("Argentina") // argentina es el parametro
console.log(continente.paises)

