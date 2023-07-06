
// Con este for, vamos a interar sobre estos mismos argumentos
for (const fileName of Deno.args) {
	try {
		// Vamos a asumir que cada argumento es un archivo local
		// y vamos a leer el texto que se encuentre en el archivo
		const fileText = await Deno.readTextFile(fileName);
		console.log(fileText);
	} catch (e) {
		console.error('El archivo no existe!')
	}
}