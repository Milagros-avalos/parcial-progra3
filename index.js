const consultaGuardada = localStorage.getItem("consultaPresupuesto");

if (consultaGuardada !== null) {
    console.log("Última consulta guardada:", JSON.parse(consultaGuardada));
}

// Funcion de envio 
function guardarConsulta() {
    const presupuesto = {
        modelo: document.querySelector("#modelo").value,
        nombre: document.querySelector("#nombre").value,
        localidad: document.querySelector("#localidad").value,
        celular: document.querySelector("#celular").value,
        email: document.querySelector("#email").value,
        consulta: document.querySelector("#consulta").value
    };

    // convierte la respuesta en texto y lo guarda en localStorage
    localStorage.setItem("consultaPresupuesto", JSON.stringify(presupuesto));

    console.log("Consulta de presupuesto guardada:", presupuesto);
    document.querySelector("#mensaje").innerText =
        "Gracias, " + presupuesto.nombre + ". Tu consulta por el " +
        presupuesto.modelo + " quedó guardada en este navegador.";

    // Limpia los campos cuando se envia el form
    document.querySelector("#modelo").value = "";
    document.querySelector("#nombre").value = "";
    document.querySelector("#localidad").value = "";
    document.querySelector("#celular").value = "";
    document.querySelector("#email").value = "";
    document.querySelector("#consulta").value = "";
}
