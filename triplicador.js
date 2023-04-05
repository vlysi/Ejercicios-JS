/*
TRIPLICADOR
Tenemos un arreglo de numeros y necesitamos pasar todos esos numeros elevados a su tercera potencia.
Usar metodo .map()
let numeros = [3, 10, 20, 50] => [9, 30, 60, 150]
*/

let numeros = [3, 10, 20, 50]
const triplicador = numeros.map(function(num){
  return num*3
})
console.log(triplicador)