import * as fn from './funciones.js';
import { insercionCliente } from './API.js';

(function() {

	const formulario = document.querySelector('#formulario');
	//Campos
	const nombreInput = document.querySelector('#nombre');
	const emailInput = document.querySelector('#email');
	const telefonoInput = document.querySelector('#telefono');
	const empresaInput = document.querySelector('#empresa');

	const objectCliente = {
			nombre : '',
			email : '',
			telefono : '',
			empresa :''
		  }

	window.onload = () => {

		formulario.addEventListener('submit', añadirCliente);

		nombreInput.addEventListener('input', leerValor);
		emailInput.addEventListener('input', leerValor);
		telefonoInput.addEventListener('input', leerValor);
		empresaInput.addEventListener('input', leerValor);
	}

	function añadirCliente(e) {
		e.preventDefault();

		if(fn.validarCampos(objectCliente)){
			fn.mostrarAlerta('Todos los campos son obligatorios.');
			return;
		}

		insercionCliente(objectCliente);
	}
	
	function leerValor(e) {
		objectCliente[e.target.name] = e.target.value;
	}
	
})()