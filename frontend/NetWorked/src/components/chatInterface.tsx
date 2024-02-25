import React, {useState} from 'react';
import {View, TextInput, Button, Text} from 'react-native';

const ChatInterface = () => {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async () => {
    // Call your Firebase Function here
    const chatResponse = await fetch(
      'https://us-central1-networked-3a892.cloudfunctions.net/chatGPT',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({prompt}),
      },
    );

    const data = await chatResponse.json();
    setResponse(data.reply);
  };

  return (
    <View>
      <TextInput
        value={prompt}
        onChangeText={setPrompt}
        placeholder="Enter your prompt"
      />
      <Button title="Submit" onPress={handleSubmit} />
      {response && <Text>Response: {response}</Text>}
    </View>
  );
};

export default ChatInterface;
