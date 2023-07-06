/*
Debes crear una funcion que reciba un arreglo como parametro y devuelva otro con los numeros
"0" ordenados al final.
Ej: moverCeros([false,1,0,1,2,0,5,3,"n"]) debe retornar [(false,1,1,2,5,3,"n",0,0)]
 */

function moverCeros(arr){
  let conCeros = []
  let sinCeros = []
  for(let i = 0; i < arr.length; i++){
    if(arr[i] === 0){
      conCeros.push(arr[i])
    }else{
      sinCeros.push(arr[i])
    }
  }
  return sinCeros.concat(conCeros)
}

moverCeros([false, 1, 0, 1, 2, 0, 5, 3, "n"])

moverCeros([false,1,0,1,2,0,5,3,"n"])

//Resover con el metodo .filter

function moverCeros(arr) {
  const sinCeros = arr.filter((e) => e !== 0)
  const conCeros = arr.filter((e) => e === 0)
  return sinCeros.concat(conCeros)
}

moverCeros([false, 1, 0, 1, 2, 0, 5, 3, "n"])