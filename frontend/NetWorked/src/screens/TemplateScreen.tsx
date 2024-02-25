import React from 'react';
import {View} from 'react-native';
import ChatInterface from '../components/chatInterface.tsx'; // Adjust the import path

const ChatScreen = () => {
  return (
    <View style={{flex: 1}}>
      <ChatInterface />
    </View>
  );
};

export default ChatScreen;
