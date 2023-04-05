/*
LETRAS VOCALES 
Necesitamos pedirle al usuario una palabra y tenemos que mostrar por consola el numero
 de consonantes, vocales y longitud de la palabra
 */

 const palabra = prompt("Introducir una palabra").toLowerCase();

 let consonantes = 0;
 let vocales = 0;

 for (let letra of palabra){
  if(
    letra == "a"||
    letra == "e"||
    letra == "i"||
    letra == "o"||
    letra == "au"
  ){
    vocales++;
  }else {
    consonantes++;
  }
 }

 console.log(`La palabra tiene ${vocales} vocales, ${consonantes} consonantes y tiene un total
 de ${palabra.length} letras`)