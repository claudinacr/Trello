/*Maquetado del Formulario*/

/*Creación del formulario. Elemento Form*/
/*Formulario para añadir Listas*/

var form_lista_nueva = document.createElement('form');

/*Agregando clase al formulario*/

form_lista_nueva.className = 'form_lista_nueva';
/* Agregando un atributo al formulario */
form_lista_nueva.setAttribute('display', 'block');

/*Elemento Input para el formulario*/

var input_lista = document.createElement('input');

/* Agregando una clase al input*/
input_lista.className = 'input_lista';

/* Agregando un atributo al input */
input_lista.setAttribute('placeholder', 'Añadir una lista...');

/* Creando un div que contendrá el botón guardar y el icono de cerrar lista*/
var controles_lista = document.createElement('div');

/* Agregando una clase al div controles_lista*/
controles_lista.className = 'controles_lista';

/* Creación del botón Guardar */
var boton_lista = document.createElement('button');

/* Agregando una clase al botón Guardar*/
boton_lista.className = 'boton_lista';

/* Agregando un atributo al botón. Por defecto el boton es de tipo submit, por lo que hay que cambiarlo a tipo button. Sino se cambia el tipo de botón cada vez que el usuario haga click, el botón lo que hará será refrescar la página*/
boton_lista.setAttribute('type', 'button');

/* Creación de un nodo de tipo texto y se añade al botón. De esta manera se le coloca el nombre que contendrá el botón*/
boton_lista.appendChild(document.createTextNode('Guardar'));

/* Creación del icono equis*/
var equis_lista = document.createElement('i');

/* Se añade una clase al icono*/
equis_lista.className = 'fa fa-times equis_lista';

/* Se añade atributo al icono equis */
equis_lista.setAttribute('aria-hidden', 'true');

/* Se añade estilo a la equis (margenes, tamaño de icono, color del icono) */
equis_lista.style.marginLeft = '20px';
equis_lista.style.marginTop = '10px';
equis_lista.style.fontSize = '25px';
equis_lista.style.color = '#EEEEEE';

/* Se añade al div controles_lista el botón_lista*/
controles_lista.appendChild(boton_lista);

/* Se añade al div controles_lista la equis*/
controles_lista.appendChild(equis_lista);

/* Se coloca el estilo display none para que lo que esta contenido dentro del div controles:lista se oculte. En este caso se ocultará el botón Guardar y el icono equis*/
controles_lista.style.display = 'none';

/* Al formulario se le agrega el input_lista */
form_lista_nueva.appendChild(input_lista);

/* Al formulario se le agrega el div controles_lista que es el que contiene el botón de Guardar y el icono equis */
form_lista_nueva.appendChild(controles_lista);

/* Se obtiene la section row_container del documento html*/
var row_container = document.getElementById('row_container');

/* Al section row_container se agrega el formulario form_lista_nueva */
row_container.appendChild(form_lista_nueva);


/* Formulario Tarea */
/* Se crea un formulario form_tarea_nueva*/
var form_tarea_nueva = document.createElement('form');
/* Se le coloca una clase al formulario */
form_tarea_nueva.className = 'form_tarea_nueva';
/* Se le agrega un atributo al formulario */
form_tarea_nueva.setAttribute('display', 'block');

/* Se crea un elemento textarea*/
var input_tarea = document.createElement('textarea');

/* Se le asigna una clase al input_tarea */
input_tarea.className = 'input_tarea';

/* Se le agrega un atributo que indica que el textarea es tipo texto */
input_tarea.setAttribute("type", "text");

/* Se crea un elemento tipo dic controles_tarea que contendra el botón añadir y la equis*/
var controles_tarea = document.createElement('div');

/* Se le asigna una clase al div */
controles_tarea.className = 'controles_tarea';

/* Se crea un elemento button */
var boton_tarea = document.createElement('button');

/* Se le asigna una clase*/
boton_tarea.className = 'boton_tarea';

/* Se especifica que el boton es tipo button */
boton_tarea.setAttribute('type', 'button');

/* Se añade al boton_tarea un elemento de tipo texto. Este es el botón Añadir*/
boton_tarea.appendChild(document.createTextNode('Añadir'));

/* Se crea un elemento de icono i*/
var equis_tarea = document.createElement('i');

/* Se le asigna una clase al icono equis_tarea*/ 
equis_tarea.className = 'fa fa-times equis_tarea';

/* Se le asigna un atributo al icono*/
equis_tarea.setAttribute('aria-hidden', 'true');

/* Se le asignan estilos al icono (margenes, tamaño del icono, color*/

equis_tarea.style.marginLeft = '20px';
equis_tarea.style.marginTop = '10px';
equis_tarea.style.fontSize = '25px';
equis_tarea.style.color = '#EEEEEE';

/* Se añaden al div controles_tarea el boton_tarea y la equis */
controles_tarea.appendChild(boton_tarea);
controles_tarea.appendChild(equis_tarea);



/* Se crea un div list_panel*/
var list_panel = document.createElement("div");

/* Se le asigna una clase al list_panel*/
list_panel.className = "list_panel";

/* Se le agrega al list_panel un h4 */
list_panel.appendChild(document.createElement("h4"));

/* Al form_tarea_nueva se le agrega el input_area y el div controles_tarea*/
form_tarea_nueva.appendChild(input_tarea);
form_tarea_nueva.appendChild(controles_tarea);
form_tarea_nueva.style.display = "none"; //Al form_tarea_nueva se oculta mediante display none 
list_panel.appendChild(form_tarea_nueva);


var boton_add_tarea = document.createElement("div");
boton_add_tarea.className = "boton_add_tarea";
boton_add_tarea.appendChild(document.createTextNode("Añadir una Tarea..."));
list_panel.appendChild(boton_add_tarea);

var tarea = document.createElement("div");
tarea.className = "tarea";
tarea.appendChild(document.createElement("h5"));


/* Ejemplo de la propiedad de evento target: https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_event_target */
document.addEventListener('click', function(evento) {
    var objetivo = evento.target;
    //objetivo es una referencia al objeto que está recibiendo el evento

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
        panel2.firstElementChild.value = "";

    }
});