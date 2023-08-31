/*
Consecutivos similares
Debes crear una funcion que reciba un string y retorne cuantos consecutivos similares hay en un string

ej:
consecutivosSimilares("AAAA") debe retornar 3
consecutivosSimilares("AAABBB") debe retornar 4
*/

function consecutivosSimilares(str) {
  str = str.toUpperCase(); 

  let consecutivos = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      consecutivos++;
    }
  }
  return consecutivos;
}
consecutivosSimilares('AAabBB');