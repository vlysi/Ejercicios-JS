/*
FINDSHORT
Crea una funcion findshort() que tome como argumento un string
La funcion debe devolver la longitud de la palabra mas corta
Si se escribe un string vacio, retornar 0.
Ejemplo:

findShort("Hola OTOÑO") ===> 4
 */

function findShort(string){
  let palabra = string.split(" ")
  let menorValor = palabra[0]
  for(let i = 0; i < palabra.length; i++){
    if(palabra[i].length < menorValor.length){
      monorValor = palabra[i]
    }
  }
  return menorValor.length
}
findShort("Hola OTOÑO")