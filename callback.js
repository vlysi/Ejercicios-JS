/*
CALLBACK
Debes crear una funcion llamada callback
 que reciba como parametros un numero y una funcion.
Esta debera retornar el resultado de esa funcion pasandole como argumento el numero que llega por parametro.


Ejemplo
callback(5, (num)=>{return num*10}) debe retornar 50
callback(25, (num)={return num/5}) debe retornar 5
*/

function callback(num, fun){
  return fun(num)
}

callback(5, (num)=>{return num*10})


