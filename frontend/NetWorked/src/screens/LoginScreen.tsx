import React, {useState} from 'react';
import {View, Button, TextInput, StyleSheet} from 'react-native';
import auth from '@react-native-firebase/auth';

const LoginScreen: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleLogin = async () => {
    try {
      // Attempt to sign in the user with the email and password provided
      await auth().signInWithEmailAndPassword(email, password);
      console.log('User signed in!');
      // Navigate to the next screen or update the UI accordingly
      // For example: navigation.navigate('Home');
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
        // Here you can handle errors, such as displaying an error message to the user
        // For example: Alert.alert('Login Failed', error.message);
      }
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={setEmail}
        value={email}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={setPassword}
        value={password}
        secureTextEntry
        autoCapitalize="none"
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    width: '100%', // Ensure TextInput components fill the available horizontal space
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 10,
  },
});

export default LoginScreen;
