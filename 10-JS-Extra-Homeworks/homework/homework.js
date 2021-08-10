// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto) {
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí

  var matriz = [];
  for (let clave in objeto) { // para recorrer un objeto uso un for in.
    matriz.push([clave, objeto[clave]]); // objeto[clave] hace referencia al valor que tiene cada clave
  }
  return matriz;

  // otro metodo mas directo es:
  // return Object.entries(objeto);
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí

  //Pasamos la cadena a minusculas(por las dudas)
  string = string.toLowerCase()
  //quitamos los espacios en blanco
  //string = string.replace(/\s/g, "");
  var final = {} //Creamos el objeto, donde guardamos los resultados
  for (let char in string) { //Tomamos el indice de cada caracter
    if (string[char] in final) { //Si ya existe, simplemente aumentamos el contador
      final[string[char]] = final[string[char]] + 1
    } else { // Si no existe, lo inicializamos a 1
      final[string[char]] = 1
    }
  }
  return final
  // Otra forma de hacerlo:
  //var final={};
  // for (var i=0; i<strinng.length; i++){
  //   if (Object.keys(final).includes(sting[i])){
  //        final[string[i]]= final[string[i]] + 1;
  //   } else{
  //     final[string[i]] = 1;
  //   }
  // }
  // return final
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí

  var minus = ""; // creo un string para las minusculas.
  var mayus = ""; // creo un string para las mayusculas.
  for (let i = 0; i < s.length; i++) {
    if(s[i]=== s[i].toUpperCase()){ // comparo cada caracter con su version en mayusculas.
          mayus += s[i]; //concateno cada letra Mayuscula en mayus
    } else {
      minus += s[i]; // concateno cada munuscula en minus.
    }
  }
  return (mayus + minus) //concateno los dos str en uno solo.
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  
  var fraseEspejo = str.split(' ').map(function(palabra) { // split, separa la frase usando el espacio, en palabras solas ["The", "Henry", "Challenge", "is", "close!"]
    return palabra.split('').reverse().join('') 
  }).join(' '); // hace doble join, para volver a juntar toda la frase.
    
  return fraseEspejo;
}



function capicua(numero) {
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí

  var entero= numero.toString(); //paso el nuemro a string, para despues poder aplicar el metodo .split
  var newEntero;

  newEntero= entero.split('').reverse().join('');// lo separpo, lo giro, y lo vuelvo a juntar
  if(entero === newEntero){
    return 'Es capicua';
  } else {
    return 'No es capicua';
  }
}


function deleteAbc(cadena) {
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  cadena = cadena.replace('a',''); // reemplazo cada 'a' por nada '', no por un espacio.
  cadena = cadena.replace('b',''); // reemplazo cada 'b' por nada '', no por un espacio.
  cadena = cadena.replace('c',''); // reemplazo cada 'c' por nada '', no por un espacio.

  return cadena;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí

  var newArray=arr.sort(function(elementoActual, elementoSiguiente){
    return elementoActual.length - elementoSiguiente.length// comparo la longitud de cada elemento
  })
  return newArray;

  // otra forma, con for: (Ojo no funca)

  //var newArray = [];
  //for (var i=0; i<arr.length; i++){
   //  for( var j=1; j<arr.length-1; j++){
    //   if (arr[i].length< arr[j].length){
    //    var aux= arr[i]; 
    //    arr[i]= arr[j];
    //    arr[j]= aux;
    //   } else {
    //    newArray.push(arr[j]);
    //   }
    //       }
  //}
  //return newArray;
}


function buscoInterseccion(arreglo1, arreglo2) {
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  var inter=[];
  for(var i=0; i<arreglo1.length; i++){// hago dos for anidados, y asi comparo cada item de los arreglos.
    for( var j=0; j<arreglo2.length; j++){
        if(arreglo1[i]=== arreglo2[j]){
          inter.push(arreglo1[i]);
        }
    }
  }
  return inter;
}


 
// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  deObjetoAmatriz,
  numberOfCharacters,
  capToFront,
  asAmirror,
  capicua,
  deleteAbc,
  sortArray,
  buscoInterseccion,
};