//Aquí debemos poner el código del primer producto 
//y no OLVIDES DARLE CTRL+S para guardar los cambios ;)

//Yo he iniciado con pasos normales, es decir, no he ingresado aun las restricciones como "no se permiten espacios en blanco o números." Luego, iré agregando estas restricciones.
//Con esta función se busca cifrar una frase en lenguaje normal; es decir pasarlo a código ASCII.
function cipher(array){

  //Se crea un prompt para pedirle al usuario que nos ingrese una frase.
  var phrase= prompt("Ingrese una frase");

  //Mediante este "for" recoremos cada letra y luego esas letras las transformaremos en código ASCII mediante "charCodeAt"
   for (i=0; i<phrase.length;i++){
   
     var acommodation=phrase.charCodeAt(i); 
   }

   //Una vez qu ya tenemos las palabras en código ASCII, es decir, en npumeros las alacenamos en un array.
  for (j=0; j<acommodation.length;j++){

    var newPhrase=acommodation.push(j);
   }

    console.log(newPhrase);

   phrase.fromCharCode(72);
} 
