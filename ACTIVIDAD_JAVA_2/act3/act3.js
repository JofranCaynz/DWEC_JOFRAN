let hermanos = prompt('Introduce el número de hermanos que tengas:');
        let cantidad = prompt('Introduce la cantidad a pagar');
        let porcentaje;
        if(hermanos >= 3){
            porcentaje = (cantidad * 15) / 100;
            cantidad = cantidad - porcentaje;
            alert('Cantidad a pagar = ' + cantidad);
        }
        else if(hermanos < 3 && hermanos > 0){
            porcentaje = (cantidad * 5) / 100;
            cantidad = cantidad - porcentaje;
            alert('Cantidad a pagar = ' + cantidad);
        }
        else{
            alert('Cantidad a pagar = ' + cantidad);
        }