const url = 'http://localhost:4000/clientes';

export const insercionCliente = async cliente => {

	try{
		await fetch(url,{
			method : 'POST',
			body : JSON.stringify(cliente),
			headers : {
				'Content-Type' : 'application/json'
			}
		});

		window.location.href= 'index.html';
	}catch(error) {
		console.log(error);
	}
};

export const obtenerClientes = async idCliente => {

	let requestUrl = url;

	if(idCliente) requestUrl = `${requestUrl}/${idCliente}`;

	try{

		const respuesta = await fetch(requestUrl);
		const resultado = await respuesta.json();

		return resultado;
	}catch(error) {
		console.log(error);
	}
};

export const eliminarCliente = async idCliente => {

	try{
		await fetch(`${url}/${idCliente}`,{	method : 'DELETE' });
	}catch(error) {
		console.log(error);
	}
};

export const modificarCliente = async objectCliente => {

	try{

		await fetch(`${url}/${objectCliente.id}`, {
			method : 'PUT'	,
			body : JSON.stringify(objectCliente),
			headers : {
				'content-type' : 'application/json'
			}
		})
	}catch(error) {
		console.log(error);
	}
};