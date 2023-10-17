var datos = []
//create
var registrar = function() {
    var nombres = document.getElementById("minombre").value
    var apellidos = document.getElementById("miapellido").value
    var cedula = document.getElementById("micedula").value
    var direccion = document.getElementById("midireccion").value

    datos.push({nombres:nombres,apellidos:apellidos, cedula:cedula,direccion:direccion})

    console.log (datos)
    listarinformacion()
    nuevo()
}

var listarinformacion = function () {

    var misdatos = document.getElementById("misdatos")
    misdatos.innerHTML=""
    for (let a =0; a< datos.length; a++ ){
        misdatos.innerHTML +=  `<tr onclick="datoseleccionado (${a})">
                                <td>${datos[a].nombres} </td>
                                <td>${datos[a].apellidos}</td>
                                <td>${datos[a].cedula}</td> 
                                <td>${datos[a].direccion}</td>
                                <td></div>  
                                <button onclick="eliminarcampo(${a})"> Eliminar </button> </div>
                                </td>
                               </tr> `
       
    }
    
}
var idseleccionado = " "
var datoseleccionado = function (posicion){
    idseleccionado=posicion
    document.getElementById("minombre").value = datos [idseleccionado].nombres
    document.getElementById("miapellido").value = datos [idseleccionado].apellidos
    document.getElementById("micedula").value = datos [idseleccionado].cedula
    document.getElementById("midireccion").value = datos [idseleccionado].direccion

}

var eliminarcampo= function (posicion) {
    console.log (posicion)
    datos.splice(posicion,1)
    listarinformacion ()
}

var nuevo= function (posicion) {
    document.getElementById("minombre").value =  "" 
    document.getElementById("miapellido").value = ""
    document.getElementById("micedula").value = ""
    document.getElementById("midireccion").value = ""

}

var buscar= function (posicion) {
   alert(nombres = document.getElementById("minombre").value,
        apellidos = document.getElementById("miapellido").value
        );
}



console.log (datos)

