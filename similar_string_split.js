/**
 Similar String.split()
 Debes crear una funcion llamada 'split' que reciba un 'string' y simule el comportamiento
 de la funcion original. 

 No podes usar el String.split()

 ej:
 split("hola") debe retornar ["h", "o", "l", "a"]
 */

function split(str) {
  let newArr = [];
  for (let i = 0; i < str.length; i++) {
    newArr.push(str[i])
  }
  return newArr;
}
split('hola')

//----------//---------//
function split(str) {
  return [...str];
}
