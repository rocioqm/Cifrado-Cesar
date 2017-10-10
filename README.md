# CIFRADO CESAR

## PSEUDOCODIGO

Con esta función se busca cifrar una frase en lenguaje normal; es decir pasarlo a código ASCII.
    function cipher(array){

Se crea un prompt para pedirle al usuario que nos ingrese una frase.
    var phrase= prompt("Ingrese una frase");

Mediante este "for" recoremos cada letra y luego hallaremos l posición de esas letras en el cifrado césar mediante "charCodeAt"
   
    for (i=0; i<phrase.length;i++){
   
     var acommodation=phrase.charCodeAt(i); 
     }
   
Creamos una nueva variable para transformar esas posiciones en cifrado césar a código ASCII.
 
      var acommodation1= (acommodation(i)-65+33)%26+65
    
Una vez que ya tenemos las palabras en código ASCII, es decir en numeros las alacenamos en un array y con eso está concluido el cifrado.
  
    for (j=0; j<acommodation.length;j++){

     var newPhrase=acommodation.push(j);
     }
   return cipher
 } 


## DIAGRAMA DE FLUJO

![Diagrama](http://subefotos.com/ver/?562a47b63e7baccefe28a7e6b3765ab5o.jpg)

http://subefotos.com/ver/?562a47b63e7baccefe28a7e6b3765ab5o.jpg

