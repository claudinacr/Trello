/*Maquetado de seccion que contrendrá formulario*/

var section = document.createElement('section');
section.className = 'sectionFormulario';

/*Maquetado del Formulario*/

/*Creación del formulario. Elemento Form*/

var formulario = document.createElement('form');

/*Agregando clase al formulario*/

formulario.className = 'formulario'
formulario.setAttribute('display', 'block');

var input = document.createElement('input');
input.className = 'textoEntrada';
input.setAttribute('placeholder', 'Añadir una lista...');


var ControlDiv = document.createElement('div');
ControlDiv.className = 'controles';

var boton = document.createElement('button');
boton.className = 'boton';
boton.setAttribute('type','button');
boton.appendChild(document.createTextNode('Guardar'));


var icono = document.createElement('i');
icono.className = 'fa fa-times';
icono.setAttribute('aria-hidden', 'true');
icono.style.marginLeft ='20px';
icono.style.marginTop= '10px';
icono.style.fontSize = '25px';
icono.style.color = '#EEEEEE';

ControlDiv.appendChild(boton);
ControlDiv.appendChild(icono);

ControlDiv.style.display = 'none';

formulario.appendChild(input);
formulario.appendChild(ControlDiv);



var body = document.querySelector('body');

body.insertBefore(formulario, body.lastElementChild);

/* for (var i = 0; i < 6; i++) {
    Copiaelemento = formulario.cloneNode('true');
    body.insertBefore(Copiaelemento, body.lastElementChild);
    
} */

document.addEventListener('click', function(evento){
    var objetivo = evento.target;
    //objetcivo es una referencia al objeto que está recibiendo el evento

    if(objetivo.className.match("textoEntrada")){
        objetivo.parentNode.lastElementChild.style.display = 'block';
        objetivo.parentNode.style.backgroundColor = '#DEE0E2';
        objetivo.setAttribute('placeholder','');

    }else if(objetivo.className.match("fa fa-times")){
        objetivo.parentNode.style.display = 'none';
        objetivo.parentNode.parentNode.style.backgroundColor = 'transparent';
        evento.target.parentNode.parentNode.firstElementChild.setAttribute('placeholder','Añadir una lista...');
    }
});