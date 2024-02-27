import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import styles from '../config/styles'; // Adjust the import path according to your project structure
import colors from '../config/colors'; // Adjust the import path according to your project structure

const AddContactScreen = ({navigation, route}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [isEditing, setIsEditing] = useState(
    route.params?.contact ? true : false,
  ); // Determine if editing based on passed contact

  const handleSave = () => {
    // Implement save functionality here
    Alert.alert('Save Contact', 'Contact saved successfully!');
  };

  const handleCancel = () => {
    navigation.goBack();
  };

  const handleDelete = () => {
    // Implement delete functionality here
    Alert.alert('Delete Contact', 'Contact deleted successfully!');
  };

  return (
    <View style={(styles.mainBackground = colors.lightKhaki)}>
      <Text style={styles.primaryText}>Add Contact</Text>
      <TextInput
        style={styles.textInput}
        value={name}
        onChangeText={setName}
        placeholder="Name"
        placeholderTextColor={colors.taupe}
      />
      <TextInput
        style={styles.textInput}
        value={phone}
        onChangeText={setPhone}
        placeholder="Phone"
        placeholderTextColor={colors.taupe}
      />
      <TextInput
        style={styles.textInput}
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
        placeholderTextColor={colors.taupe}
      />
      <TouchableOpacity style={styles.button} onPress={handleSave}>
        <Text style={styles.buttonText}>{isEditing ? 'Update' : 'Save'}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddContactScreen;
