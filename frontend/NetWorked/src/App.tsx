import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import TemplateScreen from './screens/TemplateScreen';
import AddContactScreen from './screens/AddContactScreen'; // Import AddContactScreen

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Template" component={TemplateScreen} />
        <Stack.Screen name="AddContactScreen" component={AddContactScreen} />

        {/* Add this line */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
