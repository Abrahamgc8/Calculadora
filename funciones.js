kilometrosDiarios = 300;
var  precioVehiculo;
var precioLicencia;
var value;
var  precioSeguro;
var  consumo;
diasTrabajados = 220;
kilometrosAnuales = kilometrosDiarios * diasTrabajados;
//Extraer información calculadora
document.getElementsByTagName('button').onclick = function() {
    value = document.getElementById("tipoCombustible").selectedOptions[0].value;
    precioLicencia = document.getElementById('precioLicencia').form;
    precioVehiculo = document.getElementById('precioVehiculo').form;
    precioSeguro = document.getElementById('precioSeguro').form;
    consumo = document.getElementById('consumoDeCombustible').form;
    
}

//Función cálculo precio por kilómetro derivado Adquisición vehículo 
let tiempoAmortización = 8;
let kilometrosTotalesVehiculo = kilometrosAnuales * tiempoAmortización;
let precioPorKilometroAdquisicionVehiculo = precioVehiculo / kilometrosTotalesVehiculo;

//Función cálculo por averías
let costePorAverias = precioVehiculo * 0.20;
let costePorKilometrosAverias = costePorAverias / kilometrosTotalesVehiculo;

//Función cálculo precio por kilómetro derivado Adquisición licencia
let tiempoAmortizacionLicencia = 20;
let precioPorKilometroLicencia = precioLicencia / (kilometrosAnuales*tiempoAmortizacionLicencia)
//Función cálculo precio por kilómetro derivado Seguro anual
let precioKilometroSeguro = precioSeguro / kilometrosAnuales;

//Función cálculo precio por kilómetro derivado combustible

//Extracción precio de combustible real
//precioGasolina = ...;
//precioDiesel = ...;

//Selección tipo de combustible
let precioDiesel = 1;
let precioGasolina = 1;
if(value == 'Híbrido' ){

    
    precioPorKilometroCombustible = precioGasolina * consumo / 100 ;

}

else if (value == 'Gasolina'){

    
    precioPorKilometroCombustible = precioGasolina * consumo / 100 ;

}

else {

    
    precioPorKilometroCombustible = precioDiesel * consumo / 100 ;

}

//Precio total por kilómetro 
precioTotal = precioPorKilometroAdquisicionVehiculo + costePorKilometrosAverias + precioKilometroSeguro + precioPorKilometroCombustible;
console.log(precioTotal);