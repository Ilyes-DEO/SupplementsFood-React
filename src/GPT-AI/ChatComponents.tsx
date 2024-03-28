import React, { useState } from 'react';
import axios from 'axios';
import { TextInput, Button, Box, Notification, Loader, Textarea } from '@mantine/core';

const ChatComponents = () => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (event) => setQuery(event.currentTarget.value);

  const fetchResponse = async () => {
    setIsLoading(true);
    setError('');

    try {
      const res = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: "gpt-3.5-turbo",
          messages: [{
            role: "user",
            content: query,
        }],
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '
          },
        }
      );

      setResponse(res.data.choices[0].message.content);
    } catch (error) {
      console.error('Erreur lors de la récupération de la réponse :', error);
      setError('Erreur lors de la récupération de la réponse. Veuillez réessayer.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: 800, margin: 'auto' }}>
        <Textarea
        label="Votre question pour ChatGPT :"
        placeholder="Tapez votre question ici..."
        value={query}
        onChange={handleInputChange}
        disabled={isLoading}
        autosize
        minRows={3}
        maxRows={6}
        style={{ width: '100%', marginTop: 40 }}/>
      <Button
        onClick={fetchResponse}
        loading={isLoading}
        mt="md"
>
        Obtenir une réponse
      </Button>
      {error && (
        <Notification color="red" mt="md">
          {error}
        </Notification>
      )}

      {response && (
        <Box mt="md">
          <Textarea
            label="Réponse de ChatGPT :"
            value={response}
            readOnly
            autosize
            minRows={3}
            maxRows={10}
            style={{ marginTop: 20, width: '800px' }} // Ajustez pour une largeur fixe
            />
        </Box>
      )}
    </div>
  );
};

export default ChatComponents;