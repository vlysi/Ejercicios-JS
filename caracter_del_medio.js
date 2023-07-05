/*debes creaar una funcion que reciba un string por parametro y devuelva sus caracteres del medio.
Ej: middleCharacter("hola") debe retornar "ol" */



function middleCharacter(str) {
  let middle = Math.floor(str.length / 2); 
  
  if (str.length % 2 === 0) {
    return str.slice(middle - 1, middle + 1);
  } else {
    return str[middle];
  }
}
middleCharacter("hola");