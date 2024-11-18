function actualizarPuestos() {
    var puesto1 = document.getElementById('puesto1').value;
    var puesto2 = document.getElementById('puesto2').value;
    var puesto3 = document.getElementById('puesto3').value;

    var raza1 = document.getElementById('raza1').value;
    var raza2 = document.getElementById('raza2').value;
    var raza3 = document.getElementById('raza3').value;

    document.getElementById('puesto-perro1').textContent = 'Puesto: ' + puesto1;
    document.getElementById('puesto-perro2').textContent = 'Puesto: ' + puesto2;
    document.getElementById('puesto-perro3').textContent = 'Puesto: ' + puesto3;

    document.getElementById('raza-perro1').textContent = 'Raza: ' + raza1;
    document.getElementById('raza-perro2').textContent = 'Raza: ' + raza2;
    document.getElementById('raza-perro3').textContent = 'Raza: ' + raza3;

    var precio1 = calcularPrecio(puesto1);
    var precio2 = calcularPrecio(puesto2);
    var precio3 = calcularPrecio(puesto3);

    document.getElementById('precio-perro1').textContent = 'Precio: $' + precio1;
    document.getElementById('precio-perro2').textContent = 'Precio: $' + precio2;
    document.getElementById('precio-perro3').textContent = 'Precio: $' + precio3;

    cambiarFondo(1, puesto1);
    cambiarFondo(2, puesto2);
    cambiarFondo(3, puesto3);
}

function calcularPrecio(puesto) {
    switch (puesto) {
        case '1':
            return 100; 
        case '2':
            return 75; 
        case '3':
            return 50; 
        default:
            return 0;
    }
}

function cambiarFondo(perro, puesto) {
    var tarjeta = document.getElementById('card-perro' + perro);

    switch (puesto) {
        case '1':
            tarjeta.style.backgroundColor = 'green';
            break;
        case '2':
            tarjeta.style.backgroundColor = 'orange'; 
            break;
        case '3':
            tarjeta.style.backgroundColor = 'red';
            break;
        default:
            tarjeta.style.backgroundColor = 'white'; 
            break;
    }
}
