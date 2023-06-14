var suma=0;
///suma=suma+1
///suma=suma+2
///suma=suma+3
///suma=suma+4
///console.log(suma) //resultado 10 ejemplo de sumar sin bucle

for (var i=0; i<10; i++) {//1° variable iterador, 2° condicion de cumplimiento(mientras que sea verdadera el bucle sigue corriendo), 3° que sucede cada vez que vuelve a arracar el bucle
suma=suma+1;
console.log(suma)}



for (var i=0; i<5; i++) {//cambio la condicion a 5
  suma=suma+i; // le sumo la variable de iteracion la cual crece de 1 en 1 por el 3° punto
 console.log('Variable de iteracion: ', i)
}
console.log('Variable Suma: ', suma)


while(suma<3){
    suma=suma+1
    console.log(suma);
}
    