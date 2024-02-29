import CheckBox from '@react-native-community/checkbox';
import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
    Switch,
    ScrollView,
  StyleSheet,
  Alert,
} from 'react-native';
import styles from '../config/styles'; // Adjust the import path according to your project structure
import colors from '../config/colors'; // Adjust the import path according to your project structure

const AddContactScreen = ({navigation, route}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
    const [notificationsEnabled, setNotificationsEnabled] = useState(false);
    const [relationship, setRelationship] = useState({ colleague: false, mentor: false, supervisor: false });
    const [communicationType, setCommunicationType] = useState({ message: false, email: false, callMeeting: false });
    const [communicationFrequency, setCommunicationFrequency] = useState({ weekly: false, monthly: false, quarterly: false, custom: false });
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

    // Function to render relationship checkboxes
    const renderRelationshipCheckboxes = () => {
        return Object.keys(relationship).map(key => (
            <View key={key} style={styles.relationshipContainer}>
                <Text style={styles.relationshipText}>{key.charAt(0).toUpperCase() + key.slice(1)}</Text>
                <CheckBox
                    value={relationship[key]}
                    onValueChange={newValue => setRelationship({...relationship, [key]: newValue})}
                    tintColors={{ true: colors.oliveDrab, false: colors.deepKhaki }} // Optional color customization
                />
            </View>
        ));
    };

  return (
    <ScrollView style={styles.mainBackground}>
      <Text style={styles.primaryText}>Add Contact</Text>
      <TextInput
        style={styles.textInput}
        value={name}
        onChangeText={setName}
        placeholder="Name"
        placeholderTextColor={colors.oliveDrab}
      />
      <TextInput
        style={styles.textInput}
        value={phone}
        onChangeText={setPhone}
        placeholder="Phone"
        placeholderTextColor={colors.oliveDrab}
      />
      <TextInput
        style={styles.textInput}
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
        placeholderTextColor={colors.oliveDrab}
      />
        {/* Relationship category */}
        <View style={styles.categoryContainer}>
            <Text style={styles.categoryTitle}>Relationship</Text>
            {renderRelationshipCheckboxes()}
        </View>
        <TouchableOpacity style={styles.button} onPress={handleSave}>
            <Text style={styles.buttonText}>{isEditing ? 'Update' : 'Save'}</Text>
        </TouchableOpacity>
    </ScrollView>
  );
};

export default AddContactScreen;
