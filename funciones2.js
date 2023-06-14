function cuidadoConElConsoleLog(nombre){
    console.log(nombre);
    return nombre;
}

function otraFuncion(){
    return(
        "el nombre retornado por la funcion'cuidadoConElConsoleLog'es:  "+
        cuidadoConElConsoleLog('Matias')
    )
}


function cuidadoConElReturn (nombre) {
    return nombre;
    console.log(nombre);// no se ejecuta nada despues del return, solo se usa para una ayuda visual
}