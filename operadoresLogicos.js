function mayorYmenor(num){
    if (num>5 && num<10)console.log(true);
    else console.log (false)
}    


mayorYmenor(2)//false
mayorYmenor(7)//true


//otro
function mayorYmenorYpar(num){
    if (num>5 && num<10 && num%2===0)console.log(true);
    else console.log (false)
}    


mayorYmenorYpar(7)//false
mayorYmenorYpar(8)//true

//otro
function operadorOr(str) {
    if (str === 'Henry' || str.length < 2) //tiene que cumplir una u otra condicion
     console.log(true);
    else console.log(false);
 }
 operadorOr('Henry'); //true
 operadorOr('Javascript'); //false
 operadorOr('H'); // true




//otro
 function negacion(permiso) {//permiso ya es boleano
    if (permiso) console.log('Tiene permiso');
 }
 negacion(true);// en este caso imprime cuando permiso es true (permiso === true)
 negacion(false);


 function negacion(permiso) {
    if (!permiso) console.log('Tiene permiso');
 }
 negacion(true);
 negacion(false);//en este caso imprime cuando permiso es false por el signo! que se agrego (permiso !== true)





 //otro
 function condicionCompleja(num)
 if (num>9 && num % 2 === 0 || num === 3) console.log(true)
 else console.log(false)

 condicionCompleja(10)// mayor a 9 y par TRUE
 condicionCompleja(6) // no cumple ninguna condicion FALSE
 condicionCompleja(3) // es 3 TRUE
 condicionCompleja(5) // no cumple ninguna condicion FALSE 