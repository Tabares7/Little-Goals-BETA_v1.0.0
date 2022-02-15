//? MANEJO DE ERRORES  
function validarTexto(texto) {
    if (texto == null || texto == "" || texto == " ") {
        return false;
    } else {
        return true;
    }
}

function mostrarError() {
    window.alert("Ha ocurrido un error. Debes escribir algo en tu nota", true);
}

//? CREAR RECORDATORIOS   
function crearElement() {
    let categ = document.getElementById("categ").innerHTML;

    if (categ === "Task") { //*TASK*************************************************
        let contenido = document.getElementById("texto").value;
        if (!validarTexto(contenido)) {
            mostrarError();
            return;
        } else {

            // ! CREAR   
            let t = new Date();
            let id = t.getTime();
            let fecha = t.toLocaleDateString();
            let text = contenido;
            let coments = document.getElementById("texto-comentario").value;
            // let color = document.getElementById("color").value;
            // let time = document.getElementById("time").value;
            let date = document.getElementById("date").value;

            // console.log(time);
            // console.log(date);
            let task = { "id": id, "date_goal": date, "texto": text, "coment": coments, "cat": categ };
            comprobarCategoria(task);
            clear();
        }
    }
    if (categ === "Reminder") { //*REMINDER**********************************************************
        let contenido = document.getElementById("texto").value;
        if (!validarTexto(contenido)) {
            mostrarError();
            return;
        } else {
            let t = new Date();
            let id = t.getTime();
            let date = document.getElementById("date").value;
            let time = document.getElementById("time").value;
            let text = contenido;
            let element = { "id": id, "texto": text, "date_goal": date, "time_goal": time, "cat": categ };
            comprobarCategoria(element);
            clear();
        }
    }
    if (categ === "Countdown") { //*COUNTDOWN*************************************************************
        let contenido = document.getElementById("texto").value;
        if (!validarTexto(contenido)) {
            mostrarError();
            return;
        } else {
            let t = new Date();
            let id = t.getTime();
            let text = contenido;
            let h = document.getElementById("h").value;
            let m = document.getElementById("m").value;
            let s = document.getElementById("s").value;
            let time_restante = (h * (60 * 60)) + (m * 60) + s;

            let countdown = { "id": id, "texto": text, "time": time_restante, "cat": categ };
            comprobarCategoria(countdown);
            clear();
        }
    }
    if (categ === "Note") { //*NOTE***************************************************
        let contenido = document.getElementById("texto").value;
        if (!validarTexto(contenido)) {
            mostrarError();
            return;
        } else {
            let t = new Date();
            let id = t.getTime();
            let text = contenido;
            let title = document.getElementById("note-title").value;

            let note = { "id": id, "texto": text, "title": title, "cat": categ };
            comprobarCategoria(note);
            clear();
        }
    }
    if (categ === "Birthday") { //*BIRTHDAY******************************************
        let contenido = document.getElementById("texto").value;
        if (!validarTexto(contenido)) {
            mostrarError();
            return;
        } else {
            let t = new Date();
            let id = t.getTime();
            let text = contenido;
            let coments = document.getElementById("texto-comentario").value;
            let date = document.getElementById("date").value;

            let birthday = { "id": id, "texto": text, "date_goal": date, "coment": coments, "cat": categ }
            comprobarCategoria(birthday);
            clear();
        }
    }
    if (categ === "Apointment") {
        let contenido = document.getElementById("texto").value;
        if (!validarTexto(contenido)) {
            mostrarError();
            return;
        } else {
            let t = new Date();
            let id = t.getTime();
            let text = contenido;
            let coments = document.getElementById("texto-comentario").value;
            let date = document.getElementById("date").value;
            let place = document.getElementById("place").value;

            let apointment = { "id": id, "texto": text, "date_goal": date, "coment": coments, "place": place, "cat": categ }
            comprobarCategoria(apointment);
            clear();
        }
    }
}


//? COMPROBAR SI EXISTEN LOS RECORDATORIOS  
function comprobarCategoria(element) {
    let categoria = "";
    if (element.cat == "Task") {
        categoria = element.cat;
    }
    if (element.cat == "Reminder") {
        categoria = element.cat;
    }
    if (element.cat == "Countdown") {
        categoria = element.cat;
    }
    if (element.cat == "Note") {
        categoria = element.cat;
    }
    if (element.cat == "Birthday") {
        categoria = element.cat;
    }
    if (element.cat == "Apointment") {
        categoria = element.cat;
    }

    comprobarElement(element, categoria);

}

function guardarElement(ElementStack) {
    let stackJSON = JSON.stringify(ElementStack);
    let stackName = ElementStack[0].cat;
    localStorage.setItem(stackName, stackJSON);
}

function mostrarElements(categoria) {
    let html = "";
    let elementsE = localStorage.getItem(categoria);
    if (elementsE == null || elementsE == "" || typeof elementsE == "undefined") {
        html += '<div class="text-center ">';
        html += "<i class='bi bi-calendar-x'></i><i class='fa fa-calendar' aria-hidden='true'></i> No has creado ningun recordatorio aun.";
        html += '</div>';
        html += '<br><br>';
        html += '<div class="text-center R5">';
        html += '<img src="../img/no-goals.png" height="200px" alt="">';
        html += '</div>';
        document.getElementById("elements").innerHTML = html;
    } else {
        let elementsR = JSON.parse(elementsE);
        if (categoria === "Task") {
            for (let i = 0; i < elementsR.length; i++) {
                let element = elementsR[i];


                html += formatoText(element, goal);
            }
        }
        if (categoria === "Reminder") {
            for (let i = 0; i < elementsR.length; i++) {
                let element = elementsR[i];


                html += formatoText(element);
            }
        }
        if (categoria === "Countdown") {
            for (let i = 0; i < elementsR.length; i++) {
                let element = elementsR[i];


                html += formatoText(element);
            }
        }
        if (categoria === "Note") {
            for (let i = 0; i < elementsR.length; i++) {
                let element = elementsR[i];


                html += formatoText(element);
            }
        }
        if (categoria === "Birthday") {
            for (let i = 0; i < elementsR.length; i++) {
                let element = elementsR[i];


                html += formatoText(element);
            }
        }
        if (categoria === "Apointment") {
            for (let i = 0; i < elementsR.length; i++) {
                let element = elementsR[i];


                html += formatoText(element);
            }
        }

        document.getElementById("elements").innerHTML = html;
    }
}

function formatoText(element) {
    let txt = '';
    let html = "";
    if (element.cat == "Task") {
        let goal = comprobarTiempoRestante(element.date_goal);
        if (goal == 1) {
            txt = 'Queda menos de 1 día';
        } else txt = 'Quedan menos de ' + goal + ' días';
        html += '<div class="card element text-dark mb-3 R" id="' + element.id + '">';
        html += '<div class="card-body">';
        html += '<div class="card-title mx-auto"><strong>' + txt + '</strong></div><hr style="border-color:rgb(77, 77, 77);">';
        html += '<p class="card-text">' + element.texto + '</p>';
        html += '<p class="card-text">' + element.coment + '</p>';
        html += '';
        html += '</div>';
        html += '</div>';
    }
    if (element.cat == "Reminder") {
        html += '<div class="card element R mb-3" id="' + element.id + '">';
        html += '<div class="card-body">';
        html += '<div class="card-title mx-auto">';
        html += '<strong>' + element.texto + '</strong>';
        html += '</div>';
        html += '<hr style="border-color:rgb(77, 77, 77);">';
        html += '<p class="card-text"><i class="fa fa-calendar" aria-hidden="true"></i> ' + element.date_goal + '</p>';
        html += '<p class="card-text"><i class="fa fa-clock-o" aria-hidden="true"></i> ' + element.time_goal + '</p>';
        html += '</div>';
        html += '</div>';
    }
    if (element.cat == "Countdown") {

    }
    if (element.cat == "Note") {
        html += '<div class="card element R mb-3" id="' + element.id + '">';
        html += '<div class="card-body">';
        html += '<div class="card-title mx-auto">';
        html += '<strong>' + element.title + '</strong>';
        html += '</div>';
        html += '<hr style="border-color:rgb(77, 77, 77);">';
        html += '<p class="card-text"><i class="fa fa-calendar" aria-hidden="true"></i> ' + element.texto + '</p>';
        html += '</div>';
        html += '</div>';
    }
    if (element.cat == "Birthday") {
        let goal = comprobarTiempoRestante(element.date_goal);
        if (goal == 1) {
            txt = 'Its tomorrow!!!!';
        } else txt = 'Faltan ' + goal + ' días!!!';
        html += '<div class="card element text-dark mb-3 R" id="' + element.id + '">';
        html += '<div class="card-body">';
        html += '<div class="card-title mx-auto"><strong>' + txt + '</strong></div><hr style="border-color:rgb(77, 77, 77);">';
        html += '<p class="card-text">' + element.texto + '</p>';
        html += '<p class="card-text">' + element.coment + '</p>';
        html += '';
        html += '</div>';
        html += '</div>';
    }
    if (element.cat == "Apointment") {
        let goal = comprobarTiempoRestante(element.date_goal);
        if (goal == 1) {
            txt = 'Its tomorrow. Gotta get ready!!';
        } else txt = 'Faltan ' + goal + ' días';
        html += '<div class="card element text-dark mb-3 R" id="' + element.id + '">';
        html += '<div class="card-body">';
        html += '<div class="card-title mx-auto"><strong>' + txt + '</strong></div><hr style="border-color:rgb(77, 77, 77);">';
        html += '<p class="card-text">' + element.texto + '</p><hr style="border-color:rgb(77, 77, 77);">';
        html += '<p class="card-text">' + element.coment + '</p><hr style="border-color:rgb(77, 77, 77);">';
        html += '<p class="card-text">' + element.place + '</p>';
        html += '';
        html += '</div>';
        html += '</div>';
    }



    return html;
}

//? LIMPIAR TEXTO DE textarea   
function clear() {
    document.getElementById("texto").value = "";
    document.getElementById("texto-comentario").value = "";
}

function comprobarElement(element, categoria) {

    let elementsE = localStorage.getItem(categoria);
    if (elementsE == null || elementsE == "" || typeof elementsE == "undefined") {
        let ElementStack = [];
        ElementStack.push(element);
        // ! GUARDAR  
        guardarElement(ElementStack);
    } else {
        let elementsR = JSON.parse(elementsE);
        // ! GUARDAR  
        elementsR.push(element)
        guardarElement(elementsR);
    }
    mostrarElements(categoria);
}


function eliminarElementYNotificar() {
    let a = "Hoy es el dia!!";
    let b = "Ayer fue el último día!";
    let elementsE = localStorage.getItem("Task");
    if (elementsE != null || elementsE != "" || typeof elementsE == "undefined") {
        let elementsR = JSON.parse(elementsE);
        for (let i = 0; i < elementsR.length; i++) {
            if (comprobarTiempoRestante(elementsR[i].date_goal) <= -1) {
                elementsR[i].id = -1;
            } else if (comprobarTiempoRestante(elementsR[i].date_goal) == 0) {
                //! MANDAR UNA NOTIFICACION**********************************************
                comprobarElementParaHoy(elementsR[i]);
                elementsR[i].id = 0;
                notificar(a, elementsR[i].texto);
            }
        }
        let elementsT = [];

        for (let i = 0; i < elementsR.length; i++) {
            if ((elementsR[i].id != -1) && (elementsR[i].id != 0)) {
                elementsT.push(elementsR[i]);
            }
        }
        if (elementsT.length == 0) {
            localStorage.setItem("Task", "");
        } else {
            guardarElement(elementsT);
        }


        mostrarElements("Task");
        selectElements();
        return;
    }
    elementsE = localStorage.getItem("Reminder");
    if (elementsE != null || elementsE != "" || typeof elementsE == "undefined") {
        let elementsR = JSON.parse(elementsE);
        for (let i = 0; i < elementsR.length; i++) {
            if (comprobarTiempoRestante(elementsR[i].date_goal) <= -1) {
                elementsR[i].id = -1;
            } else if (comprobarTiempoRestante(elementsR[i].date_goal) == 0) {
                //! MANDAR UNA NOTIFICACION**********************************************
                comprobarElementParaHoy(elementsR[i]);
                elementsR[i].id = 0;
                notificar(a, elementsR[i].texto);
            }
        }
        let elementsT = [];

        for (let i = 0; i < elementsR.length; i++) {
            if ((elementsR[i].id != -1) && (elementsR[i].id != 0)) {
                elementsT.push(elementsR[i]);
            }
        }
        if (elementsT.length == 0) {
            localStorage.setItem("Reminder", "");
        } else {
            guardarElement(elementsT);
        }


        mostrarElements("Reminder");
        selectElements();
        return;
    }
    elementsE = localStorage.getItem("Birthday");
    if (elementsE != null || elementsE != "" || typeof elementsE == "undefined") {
        let elementsR = JSON.parse(elementsE);
        for (let i = 0; i < elementsR.length; i++) {
            if (comprobarTiempoRestante(elementsR[i].date_goal) <= -1) {
                elementsR[i].id = -1;
            } else if (comprobarTiempoRestante(elementsR[i].date_goal) == 0) {
                //! MANDAR UNA NOTIFICACION**********************************************
                comprobarElementParaHoy(elementsR[i]);
                elementsR[i].id = 0;
                notificar(a, elementsR[i].texto);
            }
        }
        let elementsT = [];

        for (let i = 0; i < elementsR.length; i++) {
            if ((elementsR[i].id != -1) && (elementsR[i].id != 0)) {
                elementsT.push(elementsR[i]);
            }
        }
        if (elementsT.length == 0) {
            localStorage.setItem("Birthday", "");
        } else {
            guardarElement(elementsT);
        }


        mostrarElements("Birthday");
        selectElements();
        return;
    }
    elementsE = localStorage.getItem("Apointment");
    if (elementsE != null || elementsE != "" || typeof elementsE == "undefined") {
        let elementsR = JSON.parse(elementsE);
        for (let i = 0; i < elementsR.length; i++) {
            if (comprobarTiempoRestante(elementsR[i].date_goal) <= -1) {
                elementsR[i].id = -1;
            } else if (comprobarTiempoRestante(elementsR[i].date_goal) == 0) {
                //! MANDAR UNA NOTIFICACION**********************************************
                comprobarElementParaHoy(elementsR[i]);
                elementsR[i].id = 0;
                notificar(a, elementsR[i].texto);
            }
        }
        let elementsT = [];

        for (let i = 0; i < elementsR.length; i++) {
            if ((elementsR[i].id != -1) && (elementsR[i].id != 0)) {
                elementsT.push(elementsR[i]);
            }
        }
        if (elementsT.length == 0) {
            localStorage.setItem("Apointment", "");
        } else {
            guardarElement(elementsT);
        }


        mostrarElements("Apointment");
        selectElements();
        return;
    }
}