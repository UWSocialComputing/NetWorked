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
// import firestore from '@react-native-firebase/firestore';

const AddContactScreen = ({navigation, route}) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [notificationsEnabled, setNotificationsEnabled] = useState(false);
    const [relationship, setRelationship] = useState({ colleague: false, mentor: false, supervisor: false });
    const [communicationType, setCommunicationType] = useState({ Message: false, Email: false, "Call / Meeting": false });
    const [communicationFrequency, setCommunicationFrequency] = useState({ weekly: false, monthly: false, quarterly: false });
    const [nameTouched, setNameTouched] = useState(false);
    const [isValidName, setIsValidName] = useState(true);
    const validateName = () => {
        setNameTouched(true); // Mark the Name field as touched
        setIsValidName(name.trim() !== ''); // Set isValidName based on whether the name is empty
    };
    const [isEditing, setIsEditing] = useState(
        route.params?.contact ? true : false,
    ); // Determine if editing based on passed contact

    const handleSave = () => {
        // Implement save functionality here, add logic to schedule notifications
        // Validate form data before saving
        if (name.trim() === '') {
            Alert.alert('Error, Name field cannot be empty.');
            return;
        }

        // Contact object constructor
        const contactData = {
            name: name,
            phone: phone,
            email: email,
            relationship: relationship,
            communication: communicationType,
            frequency: communicationFrequency,
            notifications: notificationsEnabled
        };

                Alert.alert('Save Contact', 'Contact saved successfully!');
                navigation.goBack();
        //
        // firestore()
        //     .collection('Contacts')
        //     .add(contactData)
        //     .then(() => {
        //         // Successful save
        //         Alert.alert('Save Contact', 'Contact saved successfully!');
        //         navigation.goBack();
        //     })
        //     .catch(error => {
        //         console.error('Error adding contact: ', error);
        //         Alert.alert('Error', 'Failed to save contact.');
        //     });
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
    // Function to render Communication Type checkboxes
    const renderCommunicationTypeCheckboxes = () => {
        return Object.keys(communicationType).map(key => (
            <View key={key} style={styles.relationshipContainer}>
                <Text style={styles.relationshipText}>{key.replace(/([A-Z])/g, ' $1').trim()}</Text>
                <CheckBox
                    value={communicationType[key]}
                    onValueChange={newValue => setCommunicationType({...communicationType, [key]: newValue})}
                    tintColors={{ true: colors.oliveDrab, false: colors.deepKhaki }} // Assuming you want the checkmark to be white
                />
            </View>
        ));
    };
    // Function to render frequency checkboxes
    const renderFrequencyCheckboxes = () => {
        return Object.keys(communicationFrequency).map(key => (
            <View key={key} style={styles.relationshipContainer}>
                <Text style={styles.relationshipText}>{key.charAt(0).toUpperCase() + key.slice(1)}</Text>
                <CheckBox
                    value={communicationFrequency[key]}
                    onValueChange={newValue => setCommunicationFrequency({...communicationFrequency, [key]: newValue})}
                    tintColors={{ true: colors.oliveDrab, false: colors.deepKhaki }} // Adjust colors as needed
                />
            </View>
        ));
    };


    return (
        <ScrollView style={styles.mainBackground}>
            {/* Title */}
            <Text style={styles.screenTitle}>Add Contact</Text>
            {/* Form fields */}
            <TextInput
                style={[styles.textInput, !isValidName && nameTouched ? styles.invalidInput : {}]}
                value={name}
                onChangeText={setName}
                placeholder="Name"
                placeholderTextColor={colors.oliveDrab}
                onBlur={validateName} // Validate when the user leaves the field
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
            {/* Communication Type category */}
            <View style={styles.categoryContainer}>
                <Text style={styles.categoryTitle}>Communication Type</Text>
                {renderCommunicationTypeCheckboxes()}
            </View>
            {/* Frequency category */}
            <View style={styles.categoryContainer}>
                <Text style={styles.categoryTitle}>Frequency</Text>
                {renderFrequencyCheckboxes()}
            </View>
            <View style={styles.saveAndNotifyContainer}>
                <TouchableOpacity style={styles.button} onPress={handleSave}>
                    <Text style={styles.buttonText}>{isEditing ? 'Update' : 'Save'}</Text>
                </TouchableOpacity>
                <View style={styles.notificationsSwitchContainer}>
                    <Switch
                        trackColor={{ false: colors.oliveDrab, true: colors.oliveDrab }}
                        thumbColor={notificationsEnabled ? colors.lightKhaki : colors.lightKhaki}
                        ios_backgroundColor={colors.deepKhaki}
                        onValueChange={setNotificationsEnabled}
                        value={notificationsEnabled}
                    />
                    <Text style={styles.switchLabel}>Notifications</Text>
                </View>
            </View>
        </ScrollView>
    );
};

export default AddContactScreen;