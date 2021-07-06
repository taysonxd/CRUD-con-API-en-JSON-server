export function validarCampos(objectCliente) {
	return Object.values(objectCliente).some(value => value === '');
}

export function mostrarAlerta(mensaje) {

	const error = document.querySelector('.bg-red-100');
	const formulario = document.querySelector('#formulario');

	if(!error){

		const alerta = document.createElement('p');
		alerta.classList.add('bg-red-100', 'border-red-400', 'text-red-700', 'px-4', 'py-3', 'rounded', 'max-w-lg', 'mx-auto', 'mt-6', 'text-center');
		alerta.innerHTML = `<strong>${mensaje}</strong>`; 

		formulario.appendChild(alerta);

		setTimeout(() => {
			alerta.remove();
		}, 3000);
	}
}