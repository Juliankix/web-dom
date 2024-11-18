document.getElementById('formularioSalario').addEventListener('submit', function(e) {
    e.preventDefault(); 
    const salarioBasico = parseFloat(document.getElementById('salarioBasico').value);
    const horasExDiurnas = parseInt(document.getElementById('horasExDiurnas').value);
    const horasExNocturnas = parseInt(document.getElementById('horasExNocturnas').value);
    const horasExFestivas = parseInt(document.getElementById('horasExFestivas').value);
    const horasExDominicales = parseInt(document.getElementById('horasExDominicales').value);
    const diasFaltados = parseInt(document.getElementById('diasFaltados').value);

    if (isNaN(salarioBasico) || isNaN(horasExDiurnas) || isNaN(horasExNocturnas) || isNaN(horasExFestivas) ||
        isNaN(horasExDominicales) || isNaN(diasFaltados)) {
        alert('Por favor, ingrese valores válidos.');
        return; 
    }

    const diasdetrabajo = 30 - diasFaltados;
    const horasdiarias = 8;
    const saludypension = 0.08;

    let valorHora = calcularValorHora(salarioBasico, diasdetrabajo, horasdiarias);
    let ingresosHorasExtras = calcularIngresosHorasExtras(valorHora, horasExDiurnas, horasExNocturnas, horasExFestivas, horasExDominicales);
    let descuentosaludypension = calcularDescuentoSaludYPension(salarioBasico, saludypension);
    let totalsalario = calcularTotalSalario(salarioBasico, ingresosHorasExtras, descuentosaludypension);

    document.getElementById('resultado').innerHTML = `
        <p>Salario Básico Mensual: $${salarioBasico.toFixed(2)}</p>
        <p>Ingresos por Horas Extras: $${ingresosHorasExtras.toFixed(2)}</p>
        <p>Descuento Salud y Pensión: $${descuentosaludypension.toFixed(2)}</p>
        <p><strong>Total a Pagar: $${totalsalario.toFixed(2)}</strong></p>
    `;
});

function calcularValorHora(salarioBasico, diasdetrabajo, horasdiarias) {
    if (diasdetrabajo <= 0 || horasdiarias <= 0) {
        return 0;
    }
    let salarioDiario = salarioBasico / diasdetrabajo;
    return salarioDiario / horasdiarias;
}

function calcularIngresosHorasExtras(valorHora, horasExDiurnas, horasExNocturnas, horasExFestivas, horasExDominicales) {
    let valorHoraExDiurnas = valorHora * 1.25;
    let valorHoraExNocturna = valorHora * 1.35;
    let valorHoraExFestiva = valorHora * 1.75;
    let valorHoraExDominical = valorHora * 2.00;

    return (horasExDiurnas * valorHoraExDiurnas) + (horasExNocturnas * valorHoraExNocturna) +
           (horasExFestivas * valorHoraExFestiva) + (horasExDominicales * valorHoraExDominical);
}

function calcularDescuentoSaludYPension(salarioBasico, saludypension) {
    return salarioBasico * saludypension;
}

function calcularTotalSalario(salarioBasico, ingresosHorasExtras, descuentosaludypension) {
    let salarioBasicoAntesDescuento = salarioBasico + ingresosHorasExtras;
    return salarioBasicoAntesDescuento - descuentosaludypension;
}
