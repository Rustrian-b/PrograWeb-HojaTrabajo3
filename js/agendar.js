
function agendarCita()
{
    const regex = /^.*[0-9]$/;

    var pn = document.getElementById("primernombre").value;
    var sn = document.getElementById("segundonombre").value;
    var pa = document.getElementById("primerapellido").value;
    var sa = document.getElementById("segundoapellido").value;
    var fecha = document.getElementById("fecha").value;
    var hora = document.getElementById("horario").value;
    var nacionalidad = document.getElementById("nacionalidad").value;
    var telefono = document.getElementById("telefono").value;
    var correo = document.getElementById("correo").value;
    var dpi = document.getElementById("dpi").value;

    const pnNumber = regex.test(pn);
    const snNumber = regex.test(sn);
    const paNumber = regex.test(pa);
    const saNumber = regex.test(sa);

    if(pn == "" || sn == "" || pa == "" || sa == "" || fecha == "" || hora =="" || nacionalidad == "" || dpi =="")
    {
        alert("Campo vacio, por favor revise")
    }else if(pnNumber == true || snNumber == true || paNumber == true || saNumber == true)
    {
        alert("No se puede agregar numeros a un nombre o apellido")
    }else{
        citaAgendada.innerHTML = "Cita exitosamente agendada para la fecha " + fecha + "\na las " +  hora
     + "\na nombre de " + pn + " " + sn + " " + pa + " " + sa + " " + "de nacionalidad " + nacionalidad;
    }

    
}

var citaAgendada = document.getElementById("citaAgendada");

var b = document.getElementById("agendar");
b.addEventListener("click", agendarCita);