let elementsS = [];
let userU;

function getUser() {
    userU = localStorage.getItem("user");
    userU = JSON.parse(userU);
    return userU;
}

function guardarElement(ElementStack) {
    let stackJSON = JSON.stringify(ElementStack);
    let stackName = ElementStack[0].cat;
    localStorage.setItem(stackName, stackJSON);
}

function validarTexto(texto) {
    if (texto == null || texto == "" || texto == " ") {
        return false;
    } else {
        return true;
    }
}

function dayTimeChecker() {
    let txt = "";
    let t = new Date();
    let h = t.getHours();
    if ((h >= 0) && (h < 6)) {
        txt = "It's too late, i think you should sleep <3.";
    } else if ((h >= 6) && (h < 13)) {
        txt = "I hope your day goes well    :)";
    } else if ((h >= 13) && (h < 19)) {
        txt = "I hope you are having a nice afternoon.";
    } else if (h >= 19) {
        txt = "I hope you are having a good night.";
    }

    return txt;
}

function crearUsuario() {
    let name = document.getElementById("user-name").value;
    if (!validarTexto(name)) {
        mostrarError();
        return;
    } else {
        let user = { "name": name };
        saveUser(user);
    }

}

function saveUser(user) {
    let userJSON = JSON.stringify(user);
    localStorage.setItem("user", userJSON);
    showingPage();
}

function showingPage() {
    let html = "";
    let userE = getUser();
    if (userE == null || userE == "" || typeof(userE) == "undefined" || userE == "undefined") {
        html += '<br><br><br><br><br><br>';
        html += '<div class="container">';
        html += '<div class="row text-center">';
        html += '<div class="col-md-12">'
        html += '<h1 class="welcome">Hello! I welcome you to</b> <strong class="" style="color: #26ff00;">Little Goals</strong></h1>';
        html += '<h3><small class="app-name">An app created for the management and control of your tasks.</small></h3>';
        html += '<br><br>';
        html += '<h4 class="text-muted">Become <span class="blink" style="color: #26ff00;">more productive</span> with me! Enjoy the experience and <span class="blink" style="color: #26ff00;">do more in less time</span>.</h4>';
        html += '<br><br>';
        html += '<br><br>';
        html += '</div>';
        html += '</div>';
        html += '<div class="row">';
        html += '<div class="col-md-6 my-auto">';
        html += '<h5 class="ml-5">How can i call u from now on?</h5>';
        html += '</div>';
        html += '<div class="col-md-5">';
        html += '<input type="text" style="display:flexbox; padding-right: 20px;" name="" id="user-name" class="form-control  my-auto bg-gray" placeholder="Your name.">';
        html += '</div>';
        html += '<div class="col-md-1 my-auto">';
        html += '<button role="button" id="save-user"  style="color: #26ff00 !important;" class="btn btn-lg "><i class="fa fa-check  mt-2" aria-hidden="true"></i></button>';
        html += '</div>';
        html += '</div>';
        html += '<br><br>';
        html += '</div>';
        html += '<br><br>';
        html += '</div>';

        document.getElementById("main").innerHTML = html;
    } else {
        html += '<br>';
        html += '<div class="container">';
        html += '<div class="row">';
        html += '<div class="col-md-12 text-right">';
        html += '<h1 class="welcome">Hey ' + userE.name + ' ! </b><br> <strong class="" style="color: #26ff00;"> ' + dayTimeChecker() + '</strong></h1>';
        html += '</div>';
        html += '</div>';
        html += '<hr style="border-color: #26ff00;">';
        html += '';
        html += '<div class="row">';
        html += '<div class="col-md-12 text-left">';
        html += '<div class="row text-right">';
        html += '<div class="col-md-12"><a href="views/task_maker.html" style="border-color: #26ff00" class="btn bright-green fw-bold  btn-lg">Go manage your goals</a></div>';
        html += '</div>';
        html += '<h4 style="display: inline;">Your goals for today are:</h4>';
        html += '</div>';
        html += '</div>';
        html += '</div>';
        html += '       <div class="container">';
        html += '        <div class="row">';
        html += '            <div class="col-md-5">';
        html += '' + getNotes() + '';
        html += '         </div>';
        html += '     <div class="col-md-7">';
        html += '         <div class="row">';
        html += '             <div class="col-md-12">';
        html += '' + getElementsParaHoy() + '';

        html += '             </div>';
        html += '         </div>';
        html += '       </div>';
        html += '       </div>';
        html += '      </div>';
        html += '<br>';









        html += '</div>';

        document.getElementById("main").innerHTML = html;
        selectElements();
    }
}

function getNotes() {
    let txt = ""
    let r = "";
    let remindersE = localStorage.getItem("Note");
    if (remindersE == null || remindersE == "" || typeof remindersE == "undefined") {
        txt += "<br><br><div class='text-center '  style='font-size: smaller;'>There are no notes to show.</div><div class='text-center'><img src='img/nota-img.png' width='200px' alt=''></div>";


    } else {
        let remindersR = JSON.parse(remindersE);
        txt += '<br><div id="notas" class="goal-type"><h5>Your <strong class="" style="color: #26ff00;">notes</strong></h5><br> ';
        for (let i = 0; i < remindersR.length; i++) {
            r = remindersR[i];
            txt += formatoText(r, remindersR[i].cat);
        }
        txt += '</div>';
    }
    return txt;
}

function getElementsParaHoy() {
    let txt = ""
    let r = "";
    let remindersE = localStorage.getItem("ElementsParaHoy");
    if (remindersE == null || remindersE == "" || typeof remindersE == "undefined") {
        txt += "<br><br><div class='text-center '  style='font-size: smaller;'>There are no goals to show today</div><div class='text-center'><img src='img/no-today.png' width='200px' alt=''></div>";

    } else {
        let remindersR = JSON.parse(remindersE);
        txt += '<div class="title"> <h5 style="display: inline;">For <strong class="" style="color: #26ff00;">today</strong></h5> <span id="deletebutton"></span></div>';
        txt += '<hr style="border-color: #26ff00;">';
        for (let i = 0; i < remindersR.length; i++) {
            r = remindersR[i];
            txt += formatoText(r, remindersR[i].cat);
        }
    }

    return txt;
}



function formatoText(r, categoria) {
    let txt = "";

    if (categoria == "Note") {
        txt += '<div class="card  mb-3 reminder-front N R5" id="' + r.id + '">';
        txt += '<div class="card-title">';
        txt += '<strong>📝 ' + r.title + '</strong>';
        txt += '    <hr>';
        txt += '        <p class="card-text">' + r.texto + '</p>';
        txt += '</div>';

        txt += '    </div>';
        return txt;
    }
    if (categoria == "Task") {
        txt += '<div class="card  mb-3 reminder-front T F R5" id="' + r.id + '">';
        txt += '<div class="card-title">';
        txt += '<strong>' + "📚 Today is the day" + '</strong>';
        txt += '<span style="diplay:inline;" class="badge badge-front rounded-pill op"> ' + r.cat + ' <i class="fa fa-circle" aria-hidden="true"></i></span>';
        txt += '    </div>';
        txt += '    <hr>';
        txt += '    <div class="card-body">';
        txt += '        <p class="card-text ">' + r.texto + '</p>';
        txt += '        <p>💬 ' + r.coment + '</p>';
        txt += '    </div>';

        txt += '</div>';
        return txt;
    }
    if (categoria == "Reminder") {
        txt += '<div class="card  mb-3 reminder-front Re F R5" id="' + r.id + '">';
        txt += '<div class="card-title">';
        txt += '        <strong>' + "🔔 Time is over" + '</strong>';
        txt += '<span style="diplay:inline;" class="badge badge-front rounded-pill op"> ' + r.cat + ' <i class="fa fa-circle" aria-hidden="true"></i></span>';
        txt += '    </div>';
        txt += '    <hr>';
        txt += '  <strong>  '
        '</strong>';
        txt += '    <div class="card-body">';
        txt += '        <p class="card-text">' + r.texto + '</p>';
        txt += '    </div>';

        txt += '</div>';
        return txt;
    }
    if (categoria == "Apointment") {
        txt += '<div class="card  mb-3 reminder-front A F R5" id="' + r.id + '">';
        txt += '<div class="card-title">';
        txt += '<strong>' + "📅 For today" + '</strong>';
        txt += '<span style="diplay:inline;" class="badge badge-front rounded-pill op"> ' + r.cat + ' <i class="fa fa-circle" aria-hidden="true"></i></span>';
        txt += '    </div>';
        txt += '    <hr>';
        txt += '    <div class="card-body">';
        txt += '        <p class="card-text">' + r.texto + '</p>';
        txt += '        <p>📍 ' + r.place + '</p>';
        txt += '    <hr>';
        txt += '        <p>💬 ' + r.coment + '</p>';
        txt += '    </div>';

        txt += '</div>';
        return txt;
    }
    if (categoria == "Birthday") {

        txt += '<div class="card  mb-3 reminder-front B F R5" id="' + r.id + '">';
        txt += '<div class="card-title">';
        txt += '<strong>' + "🎂 Someone´s birthday today" + '</strong>';
        txt += '<span style="diplay:inline;" class="badge badge-front rounded-pill op"> ' + r.cat + ' <i class="fa fa-circle" aria-hidden="true"></i></span>';
        txt += '    </div>';
        txt += '    <hr>';
        txt += '    <div class="card-body">';
        txt += '        <p class="card-text">' + r.texto + '</p>';
        txt += '        <p>💬 ' + r.coment + '</p>';
        txt += '    </div>';

        txt += '</div>';
        return txt;
    }
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

function guardarElementParaHoy(ElementStack) {
    let elementsJSON = JSON.stringify(ElementStack);
    localStorage.setItem("ElementsParaHoy", elementsJSON);
}

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
    if (elementsEB != null || elementsEB != "" || typeof elementsEB == "undefined") {
        let elementsR = JSON.parse(elementsEB);
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


function borrarElements() {
    if (elementsS.length > 0) {
        let elementsE = localStorage.getItem("ElementsParaHoy");
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
                localStorage.setItem("ElementsParaHoy", "");

                document.getElementById("deletebutton").innerHTML = "";
            } else {
                guardarElementParaHoy(elementsT);
                document.getElementById("deletebutton").innerHTML = "";
            }
            showingPage();
            selectElements();
        }
    }
}

function selectElements() {
    let elements = document.getElementsByClassName("F");
    console.log(elements);
    console.log(elements[0].id);
    for (let i = 0; i < elements.length; i++) {
        document.getElementById(elements[i].id).onclick = function(e) {
            e.stopPropagation();
            if (elementsS.indexOf(this.id) == -1) {
                this.style.border = "1px";
                this.style.borderStyle = "solid";
                this.style.borderColor = "white";
                elementsS.push(this.id);
                document.getElementById("deletebutton").innerHTML = '<span class="bright-green" id="delete"><i class="bi bi-watch"></i><i class="fa fa-trash" aria-hidden="true"></i></span>';
                document.getElementById("delete").onclick = () => {
                    borrarElements();
                };
            } else {
                this.style.border = "none";
                for (let b = 0; b < elementsS.length; b++) {
                    if (elementsS[b] == this.id)
                        elementsS[b] = 0;
                    if (elementsS.length == 1 && elementsS[0] == 0) document.getElementById("deletebutton").innerHTML = "";

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





function notificar(title, texto, i) {
    Notification.requestPermission().then(function(result) {
        if (result === "granted") {
            let options = {
                body: texto,
                icon: i
            }
            let n = new Notification(title, options);
            setTimeout(n.close.bind(n), 50000);
        }
    });
}

function timeoutT() {
    setInterval(() => {
        eliminarElementYNotificarT();
    }, 50000);
}

function timeoutB() {
    setInterval(() => {
        eliminarElementYNotificarB();
    }, 50000);
}

function timeoutR() {
    setInterval(() => {
        eliminarElementYNotificarR();
    }, 50000);
}

function timeoutA() {
    setInterval(() => {
        eliminarElementYNotificarA();
    }, 50000);
}

document.addEventListener('DOMContentLoaded', function() {
    showingPage();
    timeoutB();
    timeoutA();
    timeoutT();
    timeoutR();
    dayTimeChecker();
    // 
    document.getElementById("save-user").onclick = () => {
        crearUsuario();
    }
    document.getElementById("user-name").onfocus = function() {
        this.style.backgroundColor = "rgba(245, 245, 245, 0.144)";
        this.style.color = "white";
    }

});