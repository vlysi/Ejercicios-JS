let paises = [
  {
    nombre: "argentina",
    continente: "sudamerica",
    poblacion: 40000000
  },
  {
    nombre: "brasil",
    continente: "sudamerica",
    poblacion: 300000000
  },
  {
    nombre: "venezuela",
    continente: "sudamerica",
    poblacion: 25000000
  },
  {
    nombre: "chile",
    continente: "sudamerica",
    poblacion: 10000000
  },
  {
    nombre: "australia",
    continente: "oceania",
    poblacion: 18000000
  },
  {
    nombre: "francia",
    continente: "europa",
    poblacion: 65000000
  },
  {
    nombre: "portugal",
    continente: "europa",
    poblacion: 4000000
  },
  {
    nombre: "grecia",
    continente: "europa",
    poblacion: 12000000
  },
]

/*
Deben crear una funcion llamada doubleFilter que reciba como parametro un arreglo de 
objetos, un continente, y un numero de poblacion.
La funcion filtra el arreglo solo con los paises que sean del continente pasado por 
parametro, y ademas, los que su poblacion sea mayor o igual a la del ultimo parametro.
Debera RETORNAR un arreglo con los nombres de los paises de los objetos que cumplan con la
condicion.
*/

function doubleFilter(arr, conti, numPob){
  let newArr = []
  let acPob = 0
  for (let i = 0; i < arr.length; i++){
    if(arr[i]["continente"] == conti && arr[i]["poblacion"] > numPob){
      newArr.push(arr[i]["nombre"])
      acPob += arr[i]["poblacion"]
    }
  }
  return{nombre:newArr,poblacionTotal:acPob}

}
doubleFilter(paises,"sudamerica",30000000)

/*
Ahora, la funcion doubleFilter debe retornar un objeto que, ademas de tener las keys nombre y 
poblacion total, tenga una key mayor y una menor en la que guarde el nombre de los
paises con mayor y menor poblacion respectivamente
*/

/*
Ejemplo:
doubleFilter(paises, 'sudamerica', 30000000) debe retornar {
  nombres: ['argentina', 'brasil'],
  poblacion total: 340000000,
  mayor: 'brasil',
  menor: 'argentina'
}
*/

function doubleFilter(arr, conti, numPob){
  let newArr = []
  let acPob = 0
  let pobMenor = arr[0]["poblacion"]
  let pobMayor = arr[0]["poblacion"]
  let paisMenor, paisMayor;
  for (let i = 0; i < arr.length; i++){
    if(arr[i]["continente"] == conti && arr[i]["poblacion"] > numPob){
      //argentina y brasil
      newArr.push(arr[i]["nombre"])
      acPob += arr[i]["poblacion"]
      if(arr[i]["poblacion"] <= pobMenor){
        pobMenor = arr[i]["poblacion"]
        paisMenor = arr[i]["nombre"]
      }
      if(arr[i]["poblacion"] > pobMayor){
        pobMayor = arr[i]["poblacion"]
        paisMayor = arr[i]["nombre"]
      }
    }
  }
  return{nombre:newArr,poblacionTotal:acPob,menor:paisMenor,mayor:paisMayor}

}
doubleFilter(paises,"sudamerica",30000000)



