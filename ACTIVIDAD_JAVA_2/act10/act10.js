let num1 = parseInt(prompt("Introduce el numero a adivinar"));
let res = "n";
let adivina = parseInt(prompt("¡Adivina el numero!"))
while(res == "n"){
    if(adivina < num1){
        adivina = parseInt(prompt("El numero que has introducido es más pequeño... ¡Adivina el numero!"))
    }
    else if(adivina > num1){
        adivina = parseInt(prompt("El numero que has introducido es más alto... ¡Adivina el numero!"))
    }
    else{
        res = "y";
        alert("¡Enhorabuena! Introduciste el numero " + adivina + " acertaste.")
    }
}
