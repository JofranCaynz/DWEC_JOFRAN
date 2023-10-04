let number = parseInt(prompt('Introduce el primer numero'));
let number2 = parseInt(prompt('Introduce el segundo numero'));
let operacion = prompt('¿Que tipo de operacion quieres realizar?(+, -, / o *)');
let res;

if(operacion === '+'){
    res = number + number2;
    alert('El resultado es: ' + res)
}
else if(operacion === '-'){
    res = number - number2;
    alert('El resultado es: ' + res)
}
else if (operacion === '/'){
    res = number / number2;
    alert('El resultado es: ' + res)
}
else{
    res = number * number2;
    alert('El resultado es: ' + res)
}