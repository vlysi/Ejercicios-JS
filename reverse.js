/*
Debes crear una funcion llamada ´reverseKeys' que reciba un objeto como parametro. Si esee parametro no es un
objeto, debra devolver un string que indique que tipo de dato fue ingresado como input y pir que no es valido.
So el parametro es un objeto, la funcion debera devolver otro objeto. Debera tener todas las propidades que sean un
string puestas como key y el value debera ser el key anterior

Ejemplo:
reverseKeys(344) deberia devolver "error, input can't be a number"
reverseKeys([]) deberia devolver "error, input can't be a Array"
reverseKeys('hola') deberia devolver "error, input can't be a string"

let prueba = {
  nombre: "ema",
  edad: 26,
  nacionalidad: "de otro planeta",
  documento: 22222222
}

reverseKeys(prueba) deberia devolver:

{
  ema:'nombre',
  edad: 26,
  'de otro planeta': nacionalidad,
  documento: 22222222
}
 */

let prueba = {
  nombre: "ema",
  edad: 26,
  nacionalidad: "de otro planeta",
  documento: 22222222
}

function reverseKeys(obj){
  //validaciones
  if(typeof obj == "number"){
    return "error, input can't be a number"
  }
  if(typeof obj == "string"){
    return "error, input can't be a string"
  }
  if(Array.isArray(obj)){
    return "error, input can't be an array"
  }

  let newObj = {}
  for(let key in obj){
      if(typeof obj[key] == "string"){
        newObj[obj[key]] = key
      }else{
        newObj[key] = obj[key]
      }   
  }
  return newObj  
}
reverseKeys(prueba)