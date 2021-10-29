function boton(){
  
    var city, kilo, adultos=0, chamacos=0, precioViaje=0, precioPasajeros=0, total=0, foto, fotota, dias=0;

var seleccionar = document.getElementById("lista");
var value = seleccionar.options[seleccionar.selectedIndex].value;
adultos = document.getElementById("adultos").value;
chamacos = document.getElementById("chamacos").value;
dias = document.getElementById("dias").value;
foto="img/1.jpg"

switch(value){
    case "ags":
        city="Aguascalientes";
        kilo=124;
        foto="1";
        break; 
    case "bc":
        city="Tijuana";
        kilo=2457;
        foto="2";
        break; 
    case "bcs":
        city="Los Cabos";
        kilo=1597;
        foto="3";
        break; 
    case "camp":
        city="Campeche";
        kilo=1498;
        foto="4";
        break; 
    case "chis":
        city="Palenque";
        kilo=1258;
        foto="5";
        break; 
    case "chih":
        city="Ciudad Juárez";
        kilo=1437;
        foto="6";
        break; 
    case "cdmx":
        city="Ciudad de México";
        kilo=378;
        foto="7";
        break; 
    case "coah":
        city="Cuatrociénegas";
        kilo=885;
        foto="8";
        break; 
    case "col":
        city="Colima";
        kilo=413;
        foto="9";
        break; 
    case "dgo":
        city="Durango";
        kilo=527;
        foto="10";
        break; 
    case "gto":
        city="Guanajuato";
        kilo=57;
        foto="11";
        break; 
    case "gro":
        city="Acapulco";
        kilo=755;
        foto="12";
        break; 
    case "hgo":
        city="Pachuca";
        kilo=388;
        foto="13";
        break; 
    case "jal":
        city="Tequila";
        kilo=284;
        foto="14";
        break; 
    case "edomx":
        city="Toluca";
        kilo=360;
        foto="15";
        break; 
    case "mich":
        city="Janitzio";
        kilo=253;
        foto="16";
        break; 
    case "mor":
        city="Cuernavaca";
        kilo=463;
        foto="17";
        break; 
    case "nay":
        city="Nuevo Vallarta";
        kilo=539;
        foto="18";
        break; 
    case "nl":
        city="Monterrey";
        kilo=695;
        foto="19";
        break; 
    case "oax":
        city="Oaxaca";
        kilo=827;
        foto="20";
        break; 
    case "pue":
        city="Cholula";
        kilo=490;
        foto="21";
        break; 
    case "qro":
        city="Tequisquiapan";
        kilo=232;
        foto="22";
        break; 
    case "qroo":
        city="Puerto Morelos";
        kilo=1994;
        foto="23";
        break; 
    case "slp":
        city="Aquismón";
        kilo=458;
        foto="24";
        break; 
    case "sin":
        city="Mazatlán";
        kilo=697;
        foto="25";
        break; 
    case "son":
        city="Hermosillo";
        kilo=1571;
        foto="26";
        break; 
    case "tab":
        city="Villahermosa";
        kilo=1115;
        foto="27";
        break; 
    case "tamps":
        city="Tampico";
        kilo=619;
        foto="28";
        break; 
    case "tlax":
        city="Tlaxcala";
        kilo=477;
        foto="29";
        break; 
    case "ver":
        city="Veracruz";
        kilo=738;
        foto="30";
        break; 
    case "yuc":
        city="Mérida";
        kilo=1675;
        foto="31";
        break; 
    case "zac":
        city="Zacatecas";
        kilo=242;
        foto="32";
        break; 

}
fotota = "img/"+foto+".jpg";
precioPasajeros = (adultos*100+chamacos*50)*dias;
precioViaje = kilo*150;
total = precioViaje+precioPasajeros;

localStorage.setItem("city", city);
localStorage.setItem("precioViaje", precioViaje);
localStorage.setItem("precioPasajeros", precioPasajeros);
localStorage.setItem("total", total);
localStorage.setItem("fotota", fotota);
window.location.href="cotizar.html";
href="cotizar.html";


    

}



function valueReceiver(){
    var city = localStorage.getItem("city");
    var precioViaje = localStorage.getItem("precioViaje");
    var precioPasajeros = localStorage.getItem("precioPasajeros");
    var total = localStorage.getItem("total");
    var fotota = localStorage.getItem("fotota");
    
document.getElementById("ciudad").innerHTML = "Ciudad: " + city;
document.getElementById("precioV").innerHTML = "Precio por Viaje: $" + precioViaje;
document.getElementById("precioP").innerHTML = "Precio por Pasajeros: $" + precioPasajeros;
document.getElementById("precioTotal").innerHTML = "Total: $" + total;
document.getElementById("pic").src=fotota;


}