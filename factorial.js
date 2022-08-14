//imprimir los factoriales del 1 al 10
//El factorial de 4! = 1 x 2 x 3 x 4 = 24
//El factorial de un número n es n * n-1 * n-2 ... hasta n = 1
//El factorial siempre es el producto de números enteros consecutivos de 1 hasta el propio número con el que estamos trabajando. 
//Ejemplo: Factorial de 4 = 4 x 3 x 2 x 1 = 24. Es igual a decir que factorial de 4 = 4 x 3! = 24. 
//Usando esta última lógica podemos resolver algunos problemas, pues vamos usando el número que tenemos multiplicado por el factorial del número anterior.


let factorial = 1;
for (let i = 1; i < 11; i++){
  factorial *=i;
  console.log(`factorial de ${i} = ${factorial}`)
}
