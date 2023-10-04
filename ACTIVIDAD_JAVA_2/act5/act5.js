let numero = parseInt(prompt('Introduce un número:'));
if (numero % 2 == 0){
    if(numero % 3 == 0){
        if(numero % 5 == 0){
            alert('El numero es par, multiplo de 3 y de 5')
        }
        else{
            alert('El numero es par y multiplo de 3, pero no es multiplo de 5')
        }
    }
    else{
        alert('El numero es par, pero no multiplo de 3')
    }
    

}
else{
    alert('El numero no es par')
}