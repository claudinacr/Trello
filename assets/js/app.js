/*Maquetado de seccion que contrendrá formulario*/

var section = document.createElement('section');
section.className = 'sectionFormulario';

/*Maquetado del Formulario*/

/*Creación del formulario. Elemento Form*/

var formulario = document.createElement('form');

/*Agregando clase al formulario*/

formulario.className = 'formulario';
formulario.setAttribute('display', 'block');

var input = document.createElement('input');
input.className = 'textoEntrada';
input.setAttribute('placeholder', 'Añadir una lista...');


var ControlDiv = document.createElement('div');
ControlDiv.className = 'controles';

var boton = document.createElement('button');
boton.className = 'botonlista';
boton.setAttribute('type', 'button');
boton.appendChild(document.createTextNode('Guardar'));


var icono = document.createElement('i');
icono.className = 'fa fa-times equislista';
icono.setAttribute('aria-hidden', 'true');
icono.style.marginLeft = '20px';
icono.style.marginTop = '10px';
icono.style.fontSize = '25px';
icono.style.color = '#EEEEEE';

ControlDiv.appendChild(boton);
ControlDiv.appendChild(icono);

ControlDiv.style.display = 'none';

formulario.appendChild(input);
formulario.appendChild(ControlDiv);

//Panel de lista vacio
var list_panel = document.createElement("div");
list_panel.className = "list_panel";
var panel_title = document.createElement("h4");
list_panel.appendChild(panel_title);
var boton_add = document.createElement('div');
boton_add.className = 'boton_add';
boton_add.appendChild(document.createTextNode('Añadir Lista...'));

// Formulario Lista



var row_container = document.getElementById('row_container');

row_container.appendChild(formulario);

/* for (var i = 0; i < 6; i++) {
    Copiaelemento = formulario.cloneNode('true');
    body.insertBefore(Copiaelemento, body.lastElementChild);
    
} */


// Formulario Tarea
var controller_panel = document.createElement('form');
controller_panel.className = 'controller_panel';
controller_panel.setAttribute('display', 'block');

var input2 = document.createElement('input');
input2.className = 'textoEntrada_tarea';
input2.setAttribute("type", "text");


var ControlDiv2 = document.createElement('div');
ControlDiv2.className = 'controles_lista';

var boton2 = document.createElement('button');
boton2.className = 'boton_panel';
boton2.setAttribute('type', 'button');
boton2.appendChild(document.createTextNode('Guardar'));


var icono2 = document.createElement('i');
icono2.className = 'fa fa-times equistarea';
icono2.setAttribute('aria-hidden', 'true');
icono2.style.marginLeft = '20px';
icono2.style.marginTop = '10px';
icono2.style.fontSize = '25px';
icono2.style.color = '#EEEEEE';

ControlDiv2.appendChild(boton2);
ControlDiv2.appendChild(icono2);

ControlDiv2.style.display = 'none';

controller_panel.appendChild(input2);
controller_panel.appendChild(ControlDiv2);

var list_panel = document.createElement("div");
list_panel.className = "list_panel";
list_panel.appendChild(document.createElement("h4"));
var boton_add_tarea = document.createElement("div");
boton_add_tarea.className = "boton_add_tarea";
boton_add_tarea.appendChild(document.createTextNode("Añadir una Tarea..."));
list_panel.appendChild(boton_add_tarea);


document.addEventListener('click', function(evento) {
    var objetivo = evento.target;
    //objetcivo es una referencia al objeto que está recibiendo el evento

    if (objetivo.className.match("textoEntrada")) {
        objetivo.parentNode.lastElementChild.style.display = 'block';
        objetivo.parentNode.style.backgroundColor = '#DEE0E2';
        objetivo.setAttribute('placeholder', '');

    } else if (objetivo.className.match("equislista")) {
        objetivo.parentNode.style.display = 'none';
        objetivo.parentNode.parentNode.style.backgroundColor = 'transparent';
        objetivo.parentNode.parentNode.firstElementChild.value = "";
        objetivo.parentNode.parentNode.firstElementChild.setAttribute('placeholder', 'Añadir una lista...');
    } else if (objetivo.className.match("botonlista")) {

        var titulo = objetivo.parentNode.parentNode.firstElementChild.value;
        console.log(titulo);
        if (titulo.length > 0) {
            objetivo.parentNode.style.display = 'none';
            objetivo.parentNode.parentNode.style.backgroundColor = 'transparent';
            objetivo.parentNode.parentNode.firstElementChild.setAttribute('placeholder', 'Añadir una lista...');
            objetivo.parentNode.parentNode.firstElementChild.value = "";
            var listclone = list_panel.cloneNode(true);

            row_container.insertBefore(listclone, row_container.lastElementChild);
            listclone.querySelector("h4").innerText = titulo;

        } else {

        }

    }
});