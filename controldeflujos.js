function viajar (destino){
    if(destino==="Brasil"){
        console.log("gire a la izquierda");
    } else if (destino==="Argentina"){
        console.log("gire a la derecha");
    } else     
        console.log ("nos perdimos") ///en caso que se ingrese otro pais 
}


function puedeManejar(edad) {
  if(edad >= 18) {
           console.log( true );
  } 
  console.log( false );
}

puedeManejar(17);