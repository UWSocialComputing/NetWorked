import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import TemplateScreen from './screens/TemplateScreen';
import AddContactScreen from './screens/AddContactScreen'; // Import AddContactScreen
import CalendarScreen from './screens/CalendarScreen'; // Import CalendarScreen
import ContactList from './screens/ContactList'; // Import ContactList
import ContactDetail from './screens/ContactDetail'; // Import ContactList


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Template" component={TemplateScreen} />
          <Stack.Screen name="ContactList" component={ContactList} />
        <Stack.Screen name="AddContactScreen" component={AddContactScreen} />
          <Stack.Screen name="CalendarScreen" component={CalendarScreen} />
          <Stack.Screen name="ContactDetail" component={ContactDetail} />

        {/* Add this line */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
