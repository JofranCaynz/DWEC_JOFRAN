let number = parseInt(prompt('Introduce un número'));
let res = 0;

while(number != 0){
    res += number
    number = parseInt(prompt("Introduce el siguiente numero"));
}
alert('¿Pusiste el 0? Se acabó. Resultado de la suma de los numeros: ' + res)
