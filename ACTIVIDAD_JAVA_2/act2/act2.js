let ciudad = prompt('Introduce el nombre de tu ciudad:');
        let edad = prompt('Introduce tu edad:');
        if(ciudad === 'Alicante' && edad <= 35 && edad >= 18){
            alert('El usuario puede acceder al carnet de empresarios emprendedores')
        }
        else {
            alert('El usuario NO puede acceder al carnet de empresarios emprendedores')
        }