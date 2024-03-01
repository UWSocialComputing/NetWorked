import React, {useState} from 'react';
import {View, TextInput, Button, Text, TouchableOpacity} from 'react-native';
import styles from '../config/styles'; // Adjust the import path according to your project structure


const ChatInterface = () => {

    const initialMessage = "I am [contact method: calling, sending an email, having a meeting, sending a message] " +
        "to my [relationship: colleague, supervisor, mentor]. We typically communicate on a " +
        "[frequency: daily, weekly, monthly] basis. The purpose of this contact is to discuss " +
        "[topic: specify the topic, possibly referencing the last discussed topic from your notes]. " +
        "Based on the medium of contact and the context of the topic, please provide a conversation starter template.";

    const [prompt, setPrompt] = useState('');
    const [response, setResponse] = useState('');
    const[isFocused, setIsFocused] = useState(false);

    const handleFocus = () => {
        setIsFocused(true);
        if (!prompt) {
            setPrompt(initialMessage);
        }
    }

    const handleSubmit = async () => {
        try {
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

            if (!chatResponse.ok) {
                throw new Error(`Server error: ${chatResponse.status}`);
            }

            const data = await chatResponse.json();
            // Replace literal "\n\n" with actual new line characters
            const formattedResponse = data.reply.replace(/\\n\\n/g, '\n\n');
            setResponse(formattedResponse);
        } catch (error) {
            // @ts-ignore
            console.error("Fetch error:", error.message);
            // @ts-ignore
            setResponse(`Error: ${error.message}`);
        }
    };


    return (
        <View style = {styles.mainBackground}>
            <TextInput
                style={styles.largeTextInput}
                value={prompt}
                onChangeText={setPrompt}
                placeholder="Click to view prompt. Edit text to match your situation, use response as a template to open your conversation."
                multiline={true}
                numberOfLines={10}
                onFocus={handleFocus}
            />
            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
            {response && <Text>{JSON.stringify(response)}</Text>}
        </View>
    );
};

export default ChatInterface;
