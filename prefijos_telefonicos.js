/*Debes crear una funcion llamada 'validarPrefijo' que reciba un numero por parametro. Debera:

Generar un objeto desde dos arreglos dados. Debera tener como propirdades, los numeros de prefijos, y como valor, el
pais correspondiente a cada prefijo

ejemplo:

{
  54: "argentina",
  55: "brasil",
  56: "chile",
  57: "colombia",
  58: "venezuela"
  
}

Validar si dos primeros numeros del pasado por parametro existen en el objeto de prefijos telefonicos. 
En caso de ser correcto, debera retornar "Este numero pertenece a X"
En caso de ser icorrecto debera retornar "El numero no pertenece a nuestros paises"

Ejemplo:

validarPrefijo("5412345678" debe retornar "Este numero pertenece a Argentina")
validarPrefijo("5712345678" debe retornar "Este numero pertenece a Colombia")
validarPrefijo("8012345678" debe retornar "Este numero no pertenece a nuestros numeros")
*/

let prefijos = [54, 55, 56, 57, 58];
let paises = ['argentina', 'brasil', 'chile', 'colombia', 'venezuela'];

function validarPrefijo (num) {
  let newObj = {};
  for (let i = 0; prefijos.length; i++){
    newObj[prefijos[i]] = paises[i]
  }
  console.log(newObj)
}

validarPrefijo('5412345678')