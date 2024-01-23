/*
Similar string.split()
Debes crear una funcion llamada 'split' que reciba una 'string' y simule el comportamiento
de la funcioon original.
No debes usar el string.split()

ej:
split('hola') debe retornar ['h', 'o', 'l', 'a']
 */

function split(str){
  let newArr = [];
  for(let i = 0; i < str.length; i++){
    newArr.push(str[i])
  }
  return newArr;
}
split('hola')