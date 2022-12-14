const queryString = window.location.search;

const urlParams = new URLSearchParams(queryString);

const precio = urlParams.get('precio');
if (precio > 0) {
    
    document.getElementById("precioTotal").innerHTML=`Tu coste es de: ${precio} €/km`;
}
else { 
    document.getElementById("precioTotal").innerHTML="precio incorrecto";
}