/*
Debes crear una funcion que reciba un arreglo de objetos como parametro y un string.
Debera retornar un nuevo arreglo de objetos, teniendo como parametro la propiedad que fue pasada como string.

Ej:
let arreglo =[{name: "diana", edad : 25}, {name: "cris", edad: 35}]

oneProperty(arreglo, 'edad') debe retornar [{edad: 25}, {edad:35}]
oneProperty(arreglo, 'nombre') debe retornar [{name: 'diana'}, {name:'cris'}]
 */

let arreglo =[{nombre: "diana", edad : 25}, {nombre: "cris", edad: 35}]

function oneProperty(arr, str){
  let newArr = []
  for (let i = 0; i < arr.length; i++){
    newArr.push({[str]:arr[i][str]})
  }
  return newArr
}

oneProperty(arreglo, "nombre")

oneProperty(arreglo, "edad")

//Usando .map

let arr = [{nombre: "diana", edad : 25}, {nombre: "cris", edad: 35}]

function oneProperty(arr, str) {
  return arr.map(objeto => ({ [str]: objeto[str] }))
}

oneProperty(arr, 'edad')