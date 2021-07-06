 import * as fn from './funciones.js';
 import { obtenerClientes, modificarCliente } from './API.js';

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
		  };

	document.addEventListener('DOMContentLoaded', consultarCliente);
	
	formulario.addEventListener('submit', actualizarCliente);

	nombreInput.addEventListener('input', leerValor);
	emailInput.addEventListener('input', leerValor);
	telefonoInput.addEventListener('input', leerValor);
	empresaInput.addEventListener('input', leerValor);

	async function consultarCliente() {

		try {

			const idCliente = new URLSearchParams(window.location.search).get('id');

			if(idCliente) {

				const { id, nombre, email, telefono, empresa } = await obtenerClientes(idCliente);

				nombreInput.value = nombre;
				emailInput.value = email;
				telefonoInput.value = telefono;
				empresaInput.value = empresa;

				objectCliente.id = id;
				objectCliente.nombre = nombre;
				objectCliente.email = email;
				objectCliente.telefono = telefono;
				objectCliente.empresa = empresa;
			}
		}catch(error) {
			console.log(error);
		}
	};

	async function actualizarCliente(e) {
		e.preventDefault();

		try{

			if(fn.validarCampos(objectCliente)){
				fn.mostrarAlerta('Debe llenar todos los campos');
				return;
			}

			await modificarCliente(objectCliente);
			window.location.href = 'index.html';
		}catch(error){
			console.log(error);
		}
	}

	function leerValor(e) {
		objectCliente[e.target.name] = e.target.value;
	}

 })()