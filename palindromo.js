/*
PALINDROMO
Deben crear una funcion llamada ´palindromo´ que indique si una palabra es palindroma o no, debe
retornar true en el caso que sea, y false en el caso que no.

Ejemplo:
palindromo('Ana') debe retornar true
 */

const palindromo = palabra => {
  palabra = palabra.toLowerCase()
  let palabraRevertida = palabra.split("").reverse().join("")
  return palabra == palabraRevertida ? true : false;
}
palindromo("anilina")