/*
ARREGLO DE OBJETOS
Debes crear una funcion llamada arregloDeObjetos que reciba un numero como
parametro y devuelva un arreglo de objetos que tengan una propiedad llamada 'valor'
que contenga el valor del numero y sus anteriores.
Ejemplo:
arregloDeObjetos(5) debe retornar [{valor: 1}, {valor: 2}, {valor: 3}, {valor: 4}, {valor: 5} ]
arregloDeObjetos(3) debe retornar [{valor: 1}, {valor: 2}, {valor: 3}]
*/ 

function arregloDeObjetos(num){
  let nuevoArray = [];
  for(let i = 1; i <= num; i++){
    nuevoArray.push({ ["valor"] : i})
  }
  return nuevoArray;
}
arregloDeObjetos(5)

/*-------------------------------------------------------*/

const arregloDeObjetos = number => {
  let nuevoArray = [];
  for( let i = 1; i <= number; i++){
    let objeto = {valor : i}
    nuevoArray.push(objeto)
  }
  return nuevoArray;
}
arregloDeObjetos(5)