# CIFRADO CESAR

## PSEUDOCODIGO

Con esta función se busca cifrar una frase en lenguaje normal; es decir pasarlo a código ASCII.
    function cipher(array){

Se crea un prompt para pedirle al usuario que nos ingrese una frase.
    var phrase= prompt("Ingrese una frase");

Mediante este "for" recoremos cada letra y luego esas letras las transformaremos en código ASCII mediante "charCodeAt"
    for (i=0; i<phrase.length;i++){
   
     var acommodation=phrase.charCodeAt(i); 
     }

Una vez qu ya tenemos las palabras en código ASCII, es decir, en npumeros las alacenamos en un array.
    for (j=0; j<acommodation.length;j++){

     var newPhrase=acommodation.push(j);
     }

    console.log(newPhrase);

   phrase.fromCharCode(72);
} 


## DIAGRAMA DE FLUJO

![Con titulo](https://www.draw.io/?lightbox=1&highlight=0000ff&edit=_blank&layers=1&nav=1&title=diagrama_productofinal_1#R1ZbLcpswFIafhj1IdnC2dd3GM71kxouuVThBSoDDyIeA8%2FQVSCAr5NJF00y88Eg%2F5yJ9%2BoUd8W3Vf9Wikd8xhzJicd5H%2FHPE2CZl5nsQTlZYrVMrFFrlVkq8cFAP4MTYqa3K4RgEEmJJqgnFDOsaMgo0oTV2YdgNlmHXRhSwEA6ZKJfqL5WTdNtiqdevQBVy6pxcXNonv0V2V2hsa9cvYvxm%2FNjHlZhquY0epcixO5P4LuJbjUh2VPVbKAe0Ezab9%2BWZp%2FO6NdT0Nwkrm3AvyhamFY%2FrotPEAnKDxk1Rk8QCa1HuvPpp3C8MFWMzk1SVZpiY4S0QndzpipbQSL7CN8TGxdmeQ6Nnt%2BGkI7Y6c1Fs5mVsCFgB6ZMJ0VAKUvdhKeEMUcxxc%2Bo1KtOExc67K%2B6Oxlk3uYjDEiR0AeSyPFozOFuGl0bgT8NnC%2Fj7H%2Fvt%2FufiCDzggVYnFcGhESOHzty%2FELorCpqgfxnnkp1L4GnIYHJr5%2B9CMmny7B48RnVOO%2BD0ApT0Azty%2FV8cydmbOXK9gK9Gho9PwLy2mmEooRcGnQHWgFamEWivXk8SexfTzhf3Nddu%2FoFrN6%2B79r0vMX%2FDW2ym%2FjfL%2Bs7%2FL%2BC7Pw%3D%3D "diagrama")
