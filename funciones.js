var tipoCombustible;
var precioLicencia; 
var precioVehiculo; 
var precioSeguro;
var consumo;


let kilometrosDiarios = 300;
let diasTrabajados = 220;
let kilometrosAnuales = kilometrosDiarios * diasTrabajados;
//Extraer información calculadora

function extraerDatos(){
    tipoCombustible = document.getElementById("tipoCombustible").selectedOptions[0].value;
    precioLicencia = document.getElementById('precioLicencia').value;
    precioVehiculo = document.getElementById('precioVehiculo').value;
    precioSeguro = document.getElementById('precioSeguro').value;
   consumo = document.getElementById('consumoDeCombustible').value;
   console.log(tipoCombustible);
console.log(precioLicencia);
procesarDatos()
}







function procesarDatos() {
    

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
let precioGasolina = 1.60;
if(tipoCombustible == 'Híbrido' ){

    
    precioPorKilometroCombustible = precioGasolina * consumo / 100 ;

}

else if (tipoCombustible == 'Gasolina'){

    
    precioPorKilometroCombustible = precioGasolina * consumo / 100 ;

}

else {

    
    precioPorKilometroCombustible = precioDiesel * consumo / 100 ;

}

//Precio total por kilómetro 
precioTotal = precioPorKilometroAdquisicionVehiculo + precioPorKilometroLicencia + costePorKilometrosAverias + precioKilometroSeguro + precioPorKilometroCombustible;
var precioTotalFixed = precioTotal.toFixed(2);
console.log(precioTotal);
document.getElementById("precioTotal").innerHTML=`Tu coste es de: ${precioTotalFixed} €/km` 
let urlDestino = 'CostView.html?precio=' + precioTotalFixed;
location.href = urlDestino;
}