let number = parseInt(prompt("Introduce el numero"));
let res = 1;

while(number > 0){
    res *= number;
    number--;
}
alert("El factorial es: " + res);