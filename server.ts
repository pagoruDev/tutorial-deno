// recordad que en deno, cuando importemos un
// modulo, podemos hacerlo desde una ruta local o
// una url y siempre, deberemos poner la
// extensión del archivo.
import { serve } from "https://deno.land/std@0.192.0/http/server.ts";
// Esta libreria pertenece a la libreria standard de deno
// que se diferencia de Deno. algo porque es necesario
// importarla. Nos trae miles de funcionalidades extra
// pero no la tendremos siempre ya que Deno. algo solo
// trae las cosas más basicas para poder construir lo que
// quieras.

const handler = async (request: Request): Promise<Response> => {
	// Vamos a usar lo que hemos aprendido antes para leer
	// nuestro archivo json
	const fileText = await Deno.readFileText('./data.json');
	
	// Y vamos a devolver el contenido del data.json como respuesta
	return new Response(fileText, {
		status: 200,
		headers: {
			"Content-Type": "application/json"
		}
	});
}

// Por último vamos a servir esta función como handler a todas
// las peticiones que entren por el puerto 1994
serve(handler, { port: 1994 })