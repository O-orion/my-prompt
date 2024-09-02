import axios from "axios";

const REACT_APP_API_URL = 'http://localhost:5000';
console.log(REACT_APP_API_URL)
const api = axios.create({
    baseURL: REACT_APP_API_URL,
    headers: {
        'Content-Type': 'application/json'
    }
})

const handleError = (error: any) => {
    console.log('API error', error)
    throw error;
}

export async function newPrompt(prompt: string): Promise<string> {
    try {
        const response = await api.post('/api/text/prompt', { prompt });
        return response.data.response.candidates[0].content.parts[0].text;
    } catch (error) {
        console.error(error);
        handleError(error); // Certifique-se de que 'handleError' está definido e importado corretamente
        throw error; // Se quiser propagar o erro após o tratamento
    }
}