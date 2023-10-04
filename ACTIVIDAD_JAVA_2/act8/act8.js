let texto = "Los numeros pares entre 1 y 25 son: ";

for(let i = 25; i >= 1; i--){
    if(i % 2 == 0){
        texto+= " "+ i;
    }
    
}
alert(texto);