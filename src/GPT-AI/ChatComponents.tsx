import React, { useState } from 'react';
import axios from 'axios';

function ChatComponent() {
    const [prompt, setPrompt] = useState('');
    const [response, setResponse] = useState('');

    const sendPrompt = async () => {
        try {
            const result = await axios.post('http://127.0.0.1:8741/api/gpt/generate-text', {
                prompt: prompt,
            });
            setResponse(result.data.response); 
        } catch (error) {
            console.error('Il y a eu un problème avec la requête Axios:', error);
        }
    };

    return (
        <div>
            <textarea value={prompt} onChange={e => setPrompt(e.target.value)}></textarea>
            <button onClick={sendPrompt}>Envoyer</button>
            <div>{response}</div>
        </div>
    );
}

export default ChatComponent;
