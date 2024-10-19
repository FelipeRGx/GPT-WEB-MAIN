# ChatGPT API Integration with Angular

Easily integrate the ChatGPT API into your Angular application with this guide. Customize the ChatGPT prompt for dynamic responses tailored to your needs.

## 📋 Prerequisites

- An existing Angular application.
- Active OpenAI (ChatGPT) API key.

## 🛠 Integration Instructions

### 1️⃣ API Service Implementation

Ensure your `chatgpt.service.ts` is set up to make calls to the ChatGPT API. This should handle the API endpoint, headers (including your API key), and the POST request body.

### 2️⃣ Update Your Component

In your component (e.g., `chat.component.ts`), make sure you've imported and injected your service. Utilize the service method to send prompts to ChatGPT and handle the received responses.

### 3️⃣ Customize Your Prompt

To change the prompt you send to ChatGPT, simply adjust the `prompt` parameter in the component where you're making the API call:

```
const messages = [
			{
				role: 'user',
				content: `your prompt"${texto}"`
			}
		];

```

