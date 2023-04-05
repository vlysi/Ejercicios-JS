/*
FACTORIAL
*/

let num = parseInt(prompt("Introducir un numero"));

let resultado = 1;

for (let i = num; i > 1; i--){
  resultado *= i;
}
console.log(`El factorial de ${num} es ${resultado}`);


