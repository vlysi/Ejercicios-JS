/*
ARREGLO DE OBJETOS 2
Debes crear una funcion llamada 'arregloDeObjetos' que reciba un numero y una
palabra como parametro y devuelva un arreglo de objetos que tenga: una propiedad 
llamada como la palabra pasada por parametro y el valor del numero y sus anteriores.
Ejemplo:
 arregloDeObjetos(5, "hola") debe retornar [{hola: 1}, {hola: 2}, {hola: 3}, {hola: 4},{hola: 5}]
 arregloDeObjetos(3, "chau") debe retornar [{chau: 1}, {chau: 2}, {chau: 3}]
*/

const arregloDeObjetos = (numero, palabra) => {
  let arr = [];
  for(let i = 1; i <= numero; i++){
    let objeto = {}
    objeto[palabra] = i
    arr.push(objeto)
  }
  return arr;
}
arregloDeObjetos(5, "hola")

/*-------------------------------------------------------------*/

function arregloDeObjetos(num, pal){
  let arr = [];
  for (let i = 1; i <= num; i++){
    arr.push({[pal] : i})
  }
  return arr;
}
arregloDeObjetos(3, "chau")
