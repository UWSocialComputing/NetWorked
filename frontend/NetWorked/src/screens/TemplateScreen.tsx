import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import ChatInterface from '../components/chatInterface.tsx'; // Adjust the import path

const ChatScreen = () => {
    const [prompt, setPrompt] = useState(''); // State to hold the prompt text

    const handleSubmit = () => {
        // Implement what happens when the prompt is submitted
        console.log(prompt); // For example, log the prompt to the console
    };

    return (

        <View style={{flex: 1}}>
            <ChatInterface />
        </View>
        //     <TextInput
        //         style={styles.largeTextInput}
        //         value={prompt}
        //         onChangeText={setPrompt}
        //         placeholder="Enter your prompt here"
        //         multiline={true} // Allows for multiple lines
        //         numberOfLines={4} // Adjust the number of lines accordingly
        //     />
        //     <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        //         <Text style={styles.buttonText}>Submit Prompt</Text>
        //     </TouchableOpacity>
        // </View>
    );
};

export default ChatScreen;
