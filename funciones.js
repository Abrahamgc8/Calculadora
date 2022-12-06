kilometrosDiarios = 300;
diasTrabajados = 220;
kilometrosAnuales = kilometrosDiarios * diasTrabajados;
//Extraer información calculadora
document.getElementsByTagName('button').onclick = function() {
    var value = document.getElementById("tipoCombustible").selectedOptions[0].value;
    var precioLicencia = document.getElementById('precioLicencia').form;
    var  precioVehiculo = document.getElementById('precioVehiculo').form;
    var  precioSeguro = document.getElementById('precioSeguro').form;
    var  consumo = document.getElementById('consumoDeCombustible').form;
    
}

//Función cálculo precio por kilómetro derivado Adquisición vehículo 
tiempoAmortización = 8;
kilometrosTotalesVehiculo = kilometrosAnuales * tiempoAmortización;
precioPorKilometroAdquisicionVehiculo = precioVehiculo / kilometrosTotalesVehiculo;

//Función cálculo por averías
costePorAverias = precioVehiculo * 0.20;
costePorKilometrosAverias = costePorAverias / kilometrosTotalesVehiculo;

//Función cálculo precio por kilómetro derivado Adquisición licencia
tiempoAmortizacionLicencia = 20;
precioPorKilometroLicencia = precioLicencia / (kilometrosAnuales*tiempoAmortizacionLicencia)
//Función cálculo precio por kilómetro derivado Seguro anual
precioKilometroSeguro = precioSeguro / kilometrosAnuales;

//Función cálculo precio por kilómetro derivado combustible

//Extracción precio de combustible real
//precioGasolina = ...;
//precioDiesel = ...;

//Selección tipo de combustible
if(hibrido){

    
    precioPorKilometroCombustible = precioGasolina * consumo / 100 ;

}

else if (Gaslina){

    
    precioPorKilometroCombustible = precioGasolina * consumo / 100 ;

}

else {

    
    precioPorKilometroCombustible = precioDiesel * consumo / 100 ;

}

//Precio total por kilómetro 
precioTotal = precioPorKilometroAdquisicionVehiculo + costePorKilometrosAverias + precioKilometroSeguro + precioPorKilometroCombustible;