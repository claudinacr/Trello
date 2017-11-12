/*Maquetado de seccion que contrendrá formulario*/

var section = document.createElement('section');
section.className = 'sectionFormulario';

/*Maquetado del Formulario*/

/*Creación del formulario. Elemento Form*/
/*Formulario para añadir Listas*/

var form_lista_nueva = document.createElement('form');

/*Agregando clase al formulario*/

form_lista_nueva.className = 'form_lista_nueva';
form_lista_nueva.setAttribute('display', 'block');

/*Elemento Input para el formulario*/

var input_lista = document.createElement('input');
input_lista.className = 'input_lista';
input_lista.setAttribute('placeholder', 'Añadir una lista...');

var controles_lista = document.createElement('div');
controles_lista.className = 'controles_lista';

var boton_lista = document.createElement('button');
boton_lista.className = 'boton_lista';
boton_lista.setAttribute('type', 'button');
boton_lista.appendChild(document.createTextNode('Guardar'));


var equis_lista = document.createElement('i');
equis_lista.className = 'fa fa-times equis_lista';
equis_lista.setAttribute('aria-hidden', 'true');
equis_lista.style.marginLeft = '20px';
equis_lista.style.marginTop = '10px';
equis_lista.style.fontSize = '25px';
equis_lista.style.color = '#EEEEEE';

controles_lista.appendChild(boton_lista);
controles_lista.appendChild(equis_lista);

controles_lista.style.display = 'none';

form_lista_nueva.appendChild(input_lista);
form_lista_nueva.appendChild(controles_lista);

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

row_container.appendChild(form_lista_nueva);



// Formulario Tarea
var form_tarea_nueva = document.createElement('form');
form_tarea_nueva.className = 'form_tarea_nueva';
form_tarea_nueva.setAttribute('display', 'block');

var input_tarea = document.createElement('textarea');
input_tarea.className = 'input_tarea';
input_tarea.setAttribute("type", "text");


var controles_tarea = document.createElement('div');
controles_tarea.className = 'controles_tarea';

var boton_tarea = document.createElement('button');
boton_tarea.className = 'boton_tarea';
boton_tarea.setAttribute('type', 'button');
boton_tarea.appendChild(document.createTextNode('Añadir'));


var equis_tarea = document.createElement('i');
equis_tarea.className = 'fa fa-times equis_tarea';
equis_tarea.setAttribute('aria-hidden', 'true');
equis_tarea.style.marginLeft = '20px';
equis_tarea.style.marginTop = '10px';
equis_tarea.style.fontSize = '25px';
equis_tarea.style.color = '#EEEEEE';

controles_tarea.appendChild(boton_tarea);
controles_tarea.appendChild(equis_tarea);

form_tarea_nueva.appendChild(input_tarea);
form_tarea_nueva.appendChild(controles_tarea);
form_tarea_nueva.style.display = "none";

var list_panel = document.createElement("div");
list_panel.className = "list_panel";
list_panel.appendChild(document.createElement("h4"));
var boton_add_tarea = document.createElement("div");
boton_add_tarea.className = "boton_add_tarea";
boton_add_tarea.appendChild(document.createTextNode("Añadir una Tarea..."));
list_panel.appendChild(form_tarea_nueva);
list_panel.appendChild(boton_add_tarea);

var tarea = document.createElement("div");
tarea.className = "tarea";
tarea.appendChild(document.createElement("h5"));



document.addEventListener('click', function(evento) {
    var objetivo = evento.target;
    //objetcivo es una referencia al objeto que está recibiendo el evento

    //Si el objetivo del evento que sucede coincide con la clase del Input para Lista
    if (objetivo.className.match("input_lista")) {
        /*Aquí accedemos de manera Relativa  a los componentes
        a partir del objeto que es target del evento 
        y así poder  mostrar y/o ocultar lo que se requiera*/
        objetivo.parentNode.lastElementChild.style.display = 'block';
        objetivo.parentNode.style.backgroundColor = '#DEE0E2';
        objetivo.setAttribute('placeholder', '');

    } else if (objetivo.className.match("equis_lista")) {
        objetivo.parentNode.style.display = 'none';
        objetivo.parentNode.parentNode.style.backgroundColor = 'transparent';
        objetivo.parentNode.parentNode.firstElementChild.value = "";
        objetivo.parentNode.parentNode.firstElementChild.setAttribute('placeholder', 'Añadir una lista...');

    } else if (objetivo.className.match("boton_lista")) {

        var titulo = objetivo.parentNode.parentNode.firstElementChild.value;
        //console.log(titulo);
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

    } else if (objetivo.className.match("boton_add_tarea")) {
        var panel = objetivo.parentNode.querySelector(".form_tarea_nueva");
        panel.style.display = "block";
        objetivo.style.display = "none";
        panel.firstElementChild.focus();

    } else if (objetivo.className.match("boton_tarea")) {
        var texto_tarea = objetivo.parentNode.parentNode.firstElementChild.value;
        var form_tarea = objetivo.parentNode.parentNode;
        var panel_padre = objetivo.parentNode.parentNode.parentNode;
        console.log(texto_tarea);
        if (texto_tarea.length > 0) {
            var nueva_tarea = tarea.cloneNode(true);
            nueva_tarea.firstElementChild.innerText = texto_tarea;
            objetivo.parentNode.parentNode.firstElementChild.value = "";
            panel_padre.insertBefore(nueva_tarea, form_tarea);
            form_tarea.nextSibling.style.display = "block";
            form_tarea.style.display = "none";

        } else {

        }
    } else if (objetivo.className.match("equis_tarea")) {
        var panel2 = objetivo.parentNode.parentNode;
        panel2.style.display = "none";

        panel2.nextSibling.style.display = "block";

    }
});