let elementsS = [];

//? MANEJO DE ERRORES  
function validarTexto(texto) {
    if (texto == null || texto == "" || texto == " ") {
        return false;
    } else {
        return true;
    }
}

function mostrarError() {
    window.alert("Ha ocurrido un error. Debes escribir algo en tu nota");
}



//? CREAR RECORDATORIOS   
// function crearElement() {
//     let categ = document.getElementById("categ").innerHTML;

//     if (categ === "Task") {
//         let contenido = document.getElementById("texto").value;
//         if (!validarTexto(contenido)) {
//             mostrarError();
//             return;
//         } else {

//             // ! CREAR   
//             let t = new Date();
//             let id = t.getTime();
//             let fecha = t.toLocaleDateString();
//             let text = contenido;
//             let coments = document.getElementById("texto-comentario").value;
//             // let color = document.getElementById("color").value;
//             // let time = document.getElementById("time").value;
//             let date = document.getElementById("date").value;

//             // console.log(time);
//             // console.log(date);
//             let task = { "id": id, "date_goal": date, "texto": text, "coment": coments, "cat": categ };
//             comprobarElement(task);
//             clear();
//         }
//     }
//     if (categ === "Element") {
//         let contenido = document.getElementById("texto").value;
//         if (!validarTexto(contenido)) {
//             mostrarError();
//             return;
//         } else {
//             let t = new Date();
//             let id = t.getTime();
//             let date = document.getElementById("date").value;
//             let time = document.getElementById("time").value;
//             let text = contenido;
//             let element = { "id": id, "texto": text, "date_goal": date, "time_goal": time, "cat": categ }
//             comprobarElement(element);
//         }
//     }
// }



//? COMPROBAR SI EXISTEN LOS RECORDATORIOS  
// function comprobarElement(element) {
//     let categoria = "";
//     if (element.cat == "task") {
//         categoria = element.cat;
//     }
//     let elementsE = localStorage.getItem("RecordatoriosJson1");
//     if (elementsE == null || elementsE == "" || typeof elementsE == "undefined") {
//         let RecordatoriosJson1 = [];
//         RecordatoriosJson1.push(element);
//         // ! GUARDAR  
//         guardarElement(RecordatoriosJson1);
//     } else {
//         let elementsR = JSON.parse(elementsE);
//         // ! GUARDAR  
//         elementsR.push(element)
//         guardarElement(elementsR);
//     }
//     mostrarElements();
// }

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
            let reminder = { "id": id, "texto": text, "date_goal": date, "time_goal": time, "cat": categ };
            comprobarCategoria(reminder);
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

//? *************************************************************************************************************************************************************************************************************************************
function comprobarElementParaHoy(element) {
    let elementsE = localStorage.getItem("ElementsParaHoy");
    if (elementsE == null || elementsE == "" || typeof elementsE == "undefined") {
        let Elements = [];
        Elements.push(element);
        // ! GUARDAR  
        guardarElementParaHoy(Elements);
    } else {
        let elementsR = JSON.parse(elementsE);
        // ! GUARDAR  
        elementsR.push(element)
        guardarElementParaHoy(elementsR);
    }
    mostrarElements();
}

//? GUARDAR RECORDATORIOS    

function guardarElement(ElementStack) {
    let stackJSON = JSON.stringify(ElementStack);
    let stackName = ElementStack[0].cat;
    localStorage.setItem(stackName, stackJSON);
}

function guardarElementParaHoy(ElementStack) {
    let elementsJSON = JSON.stringify(ElementStack);
    localStorage.setItem("ElementsParaHoy", elementsJSON);
}

//? MOSTRAR RECORDATORIOS EN APP  
// function mostrarElements() {
//     let html = "";
//     let elementsE = localStorage.getItem("RecordatoriosJson1");
//     if (elementsE == null || elementsE == "" || typeof elementsE == "undefined") {
//         html += '<div class="text-center ">';
//         html += "<i class='bi bi-calendar-x'></i><i class='fa fa-calendar' aria-hidden='true'></i> No has creado ningun recordatorio aun.";
//         html += '</div>';
//         html += '<br><br>';
//         html += '<div class="text-center R5">';
//         html += '<img src="../img/no-goals.png" height="200px" alt="">';
//         html += '</div>';
//         document.getElementById("elements").innerHTML = html;
//     } else {
//         let elementsR = JSON.parse(elementsE);
//         for (let i = 0; i < elementsR.length; i++) {
//             let element = elementsR[i];
//             let goal = comprobarTiempoRestante(element.date_goal);
//             html += formatoText(element, goal);
//         }
//         document.getElementById("elements").innerHTML = html;
//     }
// }

//?FORMATO DE TEXTO   

function mostrarElements(categoria) {
    let html = "";
    let elementsE = localStorage.getItem(categoria);
    if (elementsE == null || elementsE == "" || typeof elementsE == "undefined") {
        html += '<div class="text-center ">';
        html += "You haven't created anything yet.";
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


                html += formatoText(element);

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
        selectCategoryToShow(categoria);

    }
}

function formatoText(element) {
    let txt = '';
    let html = "";
    if (element.cat == "Task") {
        let goal = comprobarTiempoRestante(element.date_goal);
        if (goal == 1) {
            txt = '⏰ Less than 1 days left';
        } else txt = '⏰ Less than ' + goal + ' days left';
        html += '<div title="' + element.cat + '" class="card element  mb-3 R" id="' + element.id + '">';
        html += '<div class="card-body">';
        html += '<div class="card-title mx-auto"><strong>' + txt + '</strong></div><hr style="border-color:rgb(77, 77, 77);">';
        html += '<p  class="card-text">📚 ' + element.texto + '</p>';
        html += '<p>' + element.coment + '</p>';
        html += '';
        html += '</div>';
        html += '</div>';

    }
    if (element.cat == "Reminder") {
        html += '<div title="' + element.cat + '"class="card element R mb-3" id="' + element.id + '">';
        html += '<div class="card-body">';
        html += '<div class="card-title mx-auto">';
        html += '<strong class="card-text">🔔 ' + element.texto + '</strong>';
        html += '</div>';
        html += '<hr style="border-color:rgb(77, 77, 77);">';
        html += '<p class=""><i class="fa fa-calendar" aria-hidden="true"></i> ' + element.date_goal + '</p>';
        html += '<p class=""><i class="fa fa-clock-o" aria-hidden="true"></i> ' + element.time_goal + '</p>';
        html += '</div>';
        html += '</div>';

    }
    if (element.cat == "Note") {
        html += '<div title="' + element.cat + '" class="card element R mb-3" id="' + element.id + '">';
        html += '<div class="card-body">';
        html += '<div class="card-title mx-auto">';
        html += '<strong class="card-text">📝 ' + element.title + '</strong>';
        html += '</div>';
        html += '<hr style="border-color:rgb(77, 77, 77);">';
        html += '<p>' + element.texto + '</p>';
        html += '</div>';
        html += '</div>';

    }
    if (element.cat == "Birthday") {
        let goal = comprobarTiempoRestante(element.date_goal);
        if (goal == 1) {
            txt = '😁 Its tomorrow!!!!';
        } else txt = '⏰' + goal + ' days left!!!';
        html += '<div title="' + element.cat + '"class="card element  mb-3 R" id="' + element.id + '">';
        html += '<div class="card-body">';
        html += '<div class="card-title mx-auto"><strong>' + txt + '</strong></div><hr style="border-color:rgb(77, 77, 77);">';
        html += '<p class="card-text">🎂 ' + element.texto + '</p>';
        html += '<p class="">' + element.coment + '</p>';
        html += '';
        html += '</div>';
        html += '</div>';

    }
    if (element.cat == "Apointment") {
        let goal = comprobarTiempoRestante(element.date_goal);
        if (goal == 1) {
            txt = '😁 Its tomorrow. Gotta get ready!!';
        } else txt = '⏰' + goal + ' days left!!!';
        html += '<div title="' + element.cat + '" class="card element  mb-3 R" id="' + element.id + '">';
        html += '<div class="card-body">';
        html += '<div class="card-title mx-auto"><strong>' + txt + '</strong></div><hr style="border-color:rgb(77, 77, 77);">';
        html += '<p class="card-text">' + element.texto + '</p><hr style="border-color:rgb(77, 77, 77);">';
        html += '<p class="card-text">' + element.place + '</p>';
        html += '<p class="">' + element.coment + '</p>';
        html += '';
        html += '</div>';
        html += '</div>';

    }



    return html;
}


function clear() {
    document.getElementById("texto").value = "";
}

//! ****************************************************************     


function borrarElements(categoria) {
    if (elementsS.length > 0) {
        let elementsE = localStorage.getItem(categoria);
        if (elementsE != null || elementsE != "") {
            let elementsR = JSON.parse(elementsE);
            for (let i = 0; i < elementsS.length; i++) {
                for (let j = 0; j < elementsR.length; j++) {
                    if (elementsS[i] == elementsR[j].id) {
                        elementsR[j].id = -1;
                        // elementsS.splice(i, 1);
                        //! BUSACAR SUSTITUTO PARA EL METODO splice***********************
                    }
                }
            }
            let elementsT = [];
            for (let i = 0; i < elementsR.length; i++) {
                if (elementsR[i].id != -1) {
                    elementsT.push(elementsR[i]);
                }
            }
            if (elementsT.length == 0) {
                localStorage.setItem(categoria, "");

                document.getElementById("deletediv").innerHTML = "";
            } else {
                guardarElement(elementsT);
                document.getElementById("deletediv").innerHTML = "";
            }
            mostrarElements(categoria);
            selectElements();
        }
    }
}

// function eliminarElementYNotificar() {
//     let a = "Hoy es el dia!!";
//     let b = "Ayer fue el último día!";
//     let elementsE = localStorage.getItem("RecordatoriosJson1");
//     if (elementsE != null || elementsE != "" || typeof elementsE == "undefined") {
//         let elementsR = JSON.parse(elementsE);
//         for (let i = 0; i < elementsR.length; i++) {
//             if (comprobarTiempoRestante(elementsR[i].date_goal) <= -1) {
//                 elementsR[i].id = -1;
//             } else if (comprobarTiempoRestante(elementsR[i].date_goal) == 0) {
//                 //! MANDAR UNA NOTIFICACION**********************************************
//                 comprobarElementParaHoy(elementsR[i]);
//                 elementsR[i].id = 0;
//                 notificar(a, elementsR[i].texto);
//             }
//         }
//         let elementsT = [];

//         for (let i = 0; i < elementsR.length; i++) {
//             if ((elementsR[i].id != -1) && (elementsR[i].id != 0)) {
//                 elementsT.push(elementsR[i]);
//             }
//         }
//         if (elementsT.length == 0) {
//             localStorage.setItem("RecordatoriosJson1", "");
//         } else {
//             guardarElement(elementsT);
//         }


//         mostrarElements(categoria);
//         selectElements();
//     }
// }


function eliminarElementYNotificarT() {
    let a = "Hoy es el dia!!";
    let b = "Ayer fue el último día!";
    let elementsE = localStorage.getItem("Task");
    if (elementsE.length = 0) return;
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
        selectElements();
    }
}

function eliminarElementYNotificarR() {
    let a = "Hoy es el dia!!";
    let elementsER = localStorage.getItem("Reminder");
    console.log(elementsER);
    if (elementsER != null || elementsER != "" || typeof elementsER == "undefined") {
        let elementsR = JSON.parse(elementsER);
        for (let i = 0; i < elementsR.length; i++) {
            if (comprobarTiempoRestante(elementsR[i].date_goal) <= -1) {
                elementsR[i].id = -1;
            } else if (comprobarTiempoRestante(elementsR[i].date_goal) == 0) {
                if (comprobarHoraRestante(elementsR[i].time_goal)) {
                    //! MANDAR UNA NOTIFICACION**********************************************
                    comprobarElementParaHoy(elementsR[i]);
                    elementsR[i].id = 0;
                    notificar(a, elementsR[i].texto);
                }
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
        selectElements();
    }
}

function eliminarElementYNotificarB() {
    let a = "Hoy es el dia!!";
    let elementsEB = localStorage.getItem("Birthday");
    if (elementsEB.length = 0) return;
    console.log(elementsEB);
    if (elementsEB != null || elementsEB != "" || typeof elementsEB == "undefined") {
        let elementsR = JSON.parse(elementsEB);
        for (let i = 0; i < elementsR.length; i++) {
            if (comprobarTiempoRestante(elementsR[i].date_goal) <= -1) {
                elementsR[i].id = -1;
            } else if (comprobarTiempoRestante(elementsR[i].date_goal) == 0) {
                console.log(elementsR[i].date_goal);
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

        selectElements();
    }
}

function eliminarElementYNotificarA() {
    let a = "Hoy es el dia!!";
    let elementsEA = localStorage.getItem("Apointment");
    if (elementsEA.length = 0) return;
    if (elementsEA != null || elementsEA != "" || typeof elementsEA == "undefined") {
        let elementsR = JSON.parse(elementsEA);
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
        selectElements();
    }
    mostrarElements("Task");
}

function selectElements() {
    let elements = document.getElementsByClassName("R");
    for (let i = 0; i < elements.length; i++) {
        document.getElementById(elements[i].id).onclick = function(e) {
            e.stopPropagation();
            if (elementsS.indexOf(this.id) == -1) {
                this.style.border = "1px";
                this.style.borderStyle = "solid";
                this.style.borderColor = "white";
                elementsS.push(this.id);
                document.getElementById("deletediv").innerHTML = '<span class="bright-green" id="delete"><i class="bi bi-watch"></i><i class="fa fa-trash" aria-hidden="true"></i></span>';
                document.getElementById("delete").onclick = () => {
                    borrarElements(elements[i].title);
                };
            } else {
                this.style.border = "none";
                for (let b = 0; b < elementsS.length; b++) {
                    if (elementsS[b] == this.id)
                        elementsS[b] = 0;
                    if (elementsS.length == 1 && elementsS[0] == 0) document.getElementById("deletediv").innerHTML = "";

                }
            }
            let elementsT = [];
            for (let j = 0; j < elementsS.length; j++) {
                if (elementsS[j] != 0) {
                    elementsT.push(elementsS[j]);
                }
            }
            elementsS = elementsT;
        };
    }

}

function deselectElements() {
    let elements = document.getElementsByClassName("R");
    for (let b = 0; b < elementsS.length; b++) {
        for (let i = 0; i < elements.length; i++) {
            if (elementsS[b] == elements[i].id)
                elementsS[b] = 0;
            elements[i].style.border = "none";
        }
    }
    document.getElementById("deletediv").innerHTML = "";

}

function comprobarTiempoRestante(n) {
    let time = new Date();
    a = new Date(n);
    const timeUTC = Date.UTC(time.getFullYear(), time.getMonth(), time.getDate());
    const goalUTC = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
    let day = 1000 * 60 * 60 * 24;

    return (goalUTC - timeUTC) / day;
}

function comprobarHoraRestante(n) {
    let t = new Date();
    let th = t.getHours();
    let tm = t.getMinutes();
    if (th == 0) {
        th = "00";
    }
    if (tm >= 0 && tm < 10) {
        tm = "0" + tm;
    }
    let time = th + ":" + tm;
    console.log(time);
    console.log(n);
    if (time == n) {
        return true;
    } else return false;


}

function notificar(title, texto, i) {
    Notification.requestPermission().then(function(result) {
        if (result === "granted") {
            let options = {
                body: texto,
                icon: i
            }
            let n = new Notification(title, options);
            setTimeout(n.close.bind(n), 2000);
        }
    });
}

function timeoutT() {
    setInterval(() => {
        eliminarElementYNotificarT();
    }, 2000);
}

function timeoutB() {
    setInterval(() => {
        eliminarElementYNotificarB();
    }, 2000);
}

function timeoutR() {
    setInterval(() => {
        eliminarElementYNotificarR();
    }, 2000);
}

function timeoutA() {
    setInterval(() => {
        eliminarElementYNotificarA();
    }, 2000);
}


function formatForm(s) {
    let html = "";

    if (s == 2) {
        html += '<span id="categ" class="badge bright-green rounded-pill op">Task</span><i class="fa ml-1 bright-green fa-arrow-circle-down" aria-hidden="true"></i>';
        html += '<hr style="border-color:rgb(77, 77, 77);"><div class="">';
        html += '<textarea id="texto" class="form-control bg-gray" cols="20" rows="3" placeholder="Remember task 📚"></textarea>';
        html += '<br>';
        html += '<label class="bright-green" for="date">Deadline</label>';
        html += '<input type="date" name="" id="date" class="form-control bg-gray">';
        html += '<br>';
        html += '<textarea id="texto-comentario" class="form-control bg-gray" cols="" rows="2" placeholder="Additional comments 💬 (Optional)"></textarea>';
        html += '<hr style="border-color:rgb(77, 77, 77);"><div class="">';
        // html += '<span id="back"><button type="button" title="Go select another category" class="btn bright-green"><i class="fa fa-arrow-left" aria-hidden="true"></i></button></span>';
        html += '<span id="save"><button type="button"title="Save"class="btn bright-green"><i class="bi bi-save2"></i><i class="fa fa-save"></i></button></span>';
        html += '<span id="clear"><button type="button"title="Clean form"class="btn bright-green"><i class="bi bi-trash"></i><i class="fa fa-trash"aria-hidden="true"></i></button></span>';
        html += '</div>';
    }
    if (s == 3) {
        html += '<span id="categ" class="badge bright-green rounded-pill op">Reminder</span><i class="fa ml-1 bright-green fa-arrow-circle-down" aria-hidden="true"></i>';
        html += '<hr style="border-color:rgb(77, 77, 77);"><div class="">';
        html += '<textarea id="texto" class="form-control bg-gray" cols="20" rows="3" placeholder="New element 🔔"></textarea>';
        html += '<br>';
        html += '<label class="bright-green" for="date">What day do i notify you?</label>';
        html += '<input type="date" name="" id="date" class="form-control bg-gray">';
        html += '<br>';
        html += '<label class="bright-green" for="time">What time do i notify you?</label>';
        html += '<input type="time" name="" id="time" class="form-control bg-gray"></input>';
        html += '<br>';
        html += '<hr style="border-color:rgb(77, 77, 77);"><div class="">';
        // html += '<span id="back"><button type="button" title="Go select another category" class="btn bright-green"><i class="fa fa-arrow-left" aria-hidden="true"></i></button></span>';

        html += '<span id="save"><button type="button"title="Save"class="btn bright-green"><i class="bi bi-save2"></i><i class="fa fa-save"></i></button></span>';
        html += '<span id="clear"><button type="button"title="Clean form"class="btn bright-green"><i class="bi bi-trash"></i><i class="fa fa-trash"aria-hidden="true"></i></button></span>';
        html += '</div>';
    }
    // if (s == 4) {
    //     html += '<span id="categ" class="badge bright-green rounded-pill op">Countdown</span><i class="fa ml-1 bright-green fa-arrow-circle-down" aria-hidden="true"></i>';
    //     html += '<hr style="border-color:rgb(77, 77, 77);"><div class="">';
    //     html += '<textarea id="texto" class="form-control bg-gray" cols="20" rows="3" placeholder="Countdown title ⏳"></textarea>';
    //     html += '<br>';
    //     html += '<label class="bright-green" for="">hh/mm/ss</label>';
    //     html += '<br>';
    //     html += '<span><input style="display: inline;" id="h" class="form-control w-2 bg-gray" placeholder="0h" type="number"></span>';
    //     html += '<span><input style="display: inline;" id="m" class="form-control w-2 bg-gray" placeholder="0m"  type="number"></span>';
    //     html += '<span><input style="display: inline;" id="s" class="form-control w-2 bg-gray" placeholder="0s"  type="number"></span>';
    //     html += '<br>';
    //     html += '<hr style="border-color:rgb(77, 77, 77);"><div';
    //     // html += '<span id="back"><button type="button" title="Go select another category" class="btn bright-green"><i class="fa fa-arrow-left" aria-hidden="true"></i></button></span>';

    //     html += '<span id="save"><button type="button"title="Save"class="btn bright-green"><i class="bi bi-save2"></i><i class="fa fa-save"></i></button></span>';
    //     html += '<span id="clear"><button type="button"title="Clean form"class="btn bright-green"><i class="bi bi-trash"></i><i class="fa fa-trash"aria-hidden="true"></i></button></span>';
    //     html += '</div>';

    // }
    if (s == 5) {
        html += '<span id="categ" class="badge bright-green rounded-pill op">Note</span><i class="fa ml-1 bright-green fa-arrow-circle-down" aria-hidden="true"></i>';
        html += '<hr style="border-color:rgb(77, 77, 77);"><div class="">';
        html += '<input type="text" id="note-title" class="form-control bg-gray" placeholder="Note' + "'s" + ' title 📝">';
        html += '<br>';
        html += '<textarea id="texto" class="form-control bg-gray" cols="20" rows="3" placeholder="Note' + "'s" + '  body 📗"></textarea>';
        html += '<br>';
        html += '<hr style="border-color:rgb(77, 77, 77);"><div>';
        // html += '<span id="back"><button type="button" title="Go select another category" class="btn bright-green"><i class="fa fa-arrow-left" aria-hidden="true"></i></button></span>';

        html += '<span id="save"><button type="button"title="Save"class="btn bright-green"><i class="bi bi-save2"></i><i class="fa fa-save"></i></button></span>';
        html += '<span id="clear"><button type="button"title="Clean form"class="btn bright-green"><i class="bi bi-trash"></i><i class="fa fa-trash"aria-hidden="true"></i></button></span>';
        html += '</div>';

    }
    if (s == 6) {
        html += '<span id="categ" class="badge bright-green rounded-pill op">Birthday</span><i class="fa ml-1 bright-green fa-arrow-circle-down" aria-hidden="true"></i>';
        html += '<hr style="border-color:rgb(77, 77, 77);"><div class="">';
        html += '<textarea id="texto" class="form-control bg-gray" cols="20" rows="3" placeholder="Remenber birthday 🎂"></textarea>';
        html += '<br>';
        html += '<label class="bright-green" for="date">Chose the date:</label>';
        html += '<input type="date" name="" id="date" class="form-control bg-gray">';
        html += '<br>';
        html += '<textarea id="texto-comentario" class="form-control bg-gray" cols="" rows="2" placeholder="Additional comments 💬 (Optional)"></textarea>';
        html += '<hr style="border-color:rgb(77, 77, 77);"><div class="">';
        // html += '<span id="back"><button type="button" title="Go select another categegory" class="btn bright-green"><i class="fa fa-arrow-left" aria-hidden="true"></i></button></span>';

        html += '<span id="save"><button type="button"title="Save"class="btn bright-green"><i class="bi bi-save2"></i><i class="fa fa-save"></i></button></span>';
        html += '<span id="clear"><button type="button"title="Clean form"class="btn bright-green"><i class="bi bi-trash"></i><i class="fa fa-trash"aria-hidden="true"></i></button></span>';
        html += '</div>';
    }
    if (s == 7) {
        html += '<span id="categ" class="badge bright-green rounded-pill op">Apointment</span><i class="fa ml-1 bright-green fa-arrow-circle-down" aria-hidden="true"></i>';
        html += '<hr style="border-color:rgb(77, 77, 77);"><div class="">';
        html += '<textarea id="texto" class="form-control bg-gray" cols="20" rows="3" placeholder="Make and remember an apointment 📅"></textarea>';
        html += '<br>';
        html += '<label class="bright-green" for="date">Chose the date:</label>';
        html += '<input type="date" name="" id="date" class="form-control bg-gray">';
        html += '<br>';
        html += '<input type="text" id="place" class="form-control bg-gray" placeholder="Place address 📍">';
        html += '<br>';
        html += '<textarea id="texto-comentario" class="form-control bg-gray" cols="" rows="2" placeholder="Additional comments 💬 (Optional)"></textarea>';
        html += '<hr style="border-color:rgb(77, 77, 77);"><div class="">';
        // html += '<span id="back"><button type="button" title="Go select another category" class="btn bright-green"><i class="fa fa-arrow-left" aria-hidden="true"></i></button></span>';

        html += '<span id="save"><button type="button"title="Save"class="btn bright-green"><i class="bi bi-save2"></i><i class="fa fa-save"></i></button></span>';
        html += '<span id="clear"><button type="button"title="Clean form"class="btn bright-green"><i class="bi bi-trash"></i><i class="fa fa-trash"aria-hidden="true"></i></button></span>';
        html += '</div>';

    }
    if (s == 1) {
        html += '<select class="form-control bg-gray" id="select">';
        html += '<option class="op" id="1" value="1">Elegir categoría.</option>';
        html += '<option class="op" id="2" value="2">📚 Task</option>';
        html += '<option class="op" id="3" value="3">🔔 Element</option>';
        html += '<option class="op" id="4" value="4">⏳ Cuenta atrás</option>';
        html += '<option class="op" id="5" value="5">📝 Notes</option>';
        html += '<option class="op" id="6" value="6">🎂 Birthday</option>';
        html += '<option class="op" id="7" value="7">📅 Apointment</option>';
        html += '</select>';
        html += '<br>';
        html += '<span><button  id="catege" type="button" title="" class="btn  bright-green">Elegir</button></span>';

    }
    // html += '<textarea id="texto" class="form-control bg-gray" cols="20" rows="3" placeholder="Programa tus tareas"></textarea>';
    // html += '<br>';
    // html += '<input type="date" name="" id="date" class="form-control bg-gray">';
    // html += '<br>';
    // html += '<input type="text" name="coments" id="desc" class="form-control bg-gray" placeholder="Comentarios (Opcional):">';
    // html += '<br>';


    writeForm(html);

}

function writeForm(html) {

    document.getElementById("form-group").innerHTML = html;

    document.getElementById("texto").onfocus = function() {
        deselectElements();
        this.style.backgroundColor = "rgba(245, 245, 245, 0.144)";
        this.style.color = "white";
    }
    document.getElementById("save").onclick = () => {
        deselectElements();
        crearElement();
        selectElements();
        clear();
    };
    document.getElementById("clear").onclick = clear;

}


function callCategory() {
    document.getElementById("T").onclick = () => {
        deselectElements();
        selectCategoryToShow("Task");
        mostrarElements("Task");
        selectElements();
    }
    document.getElementById("R").onclick = () => {
        deselectElements();
        selectCategoryToShow("Reminder");
        mostrarElements("Reminder");
        selectElements();
    }
    document.getElementById("N").onclick = () => {
        deselectElements();
        selectCategoryToShow("Note");
        mostrarElements("Note");
        selectElements();
    }
    document.getElementById("B").onclick = () => {
        deselectElements();
        selectCategoryToShow("Birthday");
        mostrarElements("Birthday");
        selectElements();
    }
    document.getElementById("A").onclick = () => {
        deselectElements();
        selectCategoryToShow("Apointment");
        mostrarElements("Apointment");
        selectElements();
    }
}

function selectCategory() {
    let s = document.getElementById("select").value;
    if (s == 2) {
        formatForm(s);
    }
    if (s == 3) {
        formatForm(s);
    }
    if (s == 5) {
        formatForm(s);
    }
    if (s == 6) {
        formatForm(s);
    }
    if (s == 7) {
        formatForm(s);
    }
    if (s == 1) {
        window.alert("Debes seleccionar una categoría para empezar!!", true);
    }
}

function selectCategoryToShow(goaltype) {

    if (goaltype == "Task") {
        document.getElementById("goal-list-title").innerHTML = "Your Tasks";
    }
    if (goaltype == "Reminder") {
        document.getElementById("goal-list-title").innerHTML = "Your Reminders";
    }
    if (goaltype == "Note") {
        document.getElementById("goal-list-title").innerHTML = "Your Notes";
    }
    if (goaltype == "Birthday") {
        document.getElementById("goal-list-title").innerHTML = "Your Birthdays";
    }
    if (goaltype == "Apointment") {
        document.getElementById("goal-list-title").innerHTML = "Your Apointments";
    }


}
//! *       
document.addEventListener('DOMContentLoaded', () => {

    mostrarElements();
    document.getElementById("cat").onclick = () => {
        selectCategory();
    }

    callCategory();
    mostrarElements("Task");
    selectElements();
    timeoutB();
    timeoutA();
    timeoutT();
    timeoutR();
    document.getElementById("select").onfocus = function() {
        deselectElements();
        this.style.backgroundColor = "rgba(245, 245, 245, 0.144)";
        this.style.color = "white";
    }



});