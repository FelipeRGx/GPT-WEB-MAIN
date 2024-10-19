import { HttpClient } from '@angular/common/http';




constructor(
		private http: HttpClient

	)


async gpt_method(texto: string) {
		const endpoint = 'https://api.openai.com/v1/chat/completions'; // Actualizando el punto final
		const headers = {
			'Content-Type': 'application/json',
			Authorization:

		};

		const messages = [
			{
				role: 'user',
				content: `Crea una nota medica basica solo estructurando el texto dado (evita generar texto nuevo, no generes campos vacios, estructura la nota con saltos de lienas y mayuzculas para los keys): "${texto}"`
			}
		];

		const requestBody = {
			model: 'gpt-3.5-turbo',
			messages: messages,
			temperature: 0.2, // Ajusta según tus necesidades
			max_tokens: 1500 // Ajusta según tus necesidades
		};

		try {
			const response: any = await this.http
				.post(endpoint, requestBody, { headers: headers })
				.toPromise();
			const responseMessage = response.choices[0].message.content;

			// Aquí actualizamos 'service.bodyNota' con la respuesta
			this.service.bodyNota = responseMessage.trim();
		} catch (error) {
			console.error('Error corrigiendo el texto:', error);
			// En caso de error, actualizamos 'service.bodyNota' con el mensaje de error deseado
			this.service.bodyNota = 'Error en la conversión';
		}
	}
	accionAlCambiarTexto() {
		
		console.log('El texto ha cambiado:', this.service.bodyNota);
	}
}
