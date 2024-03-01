// ContactList.js
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../config/styles'; // Assuming your styles are located here

const ContactList = ({ navigation }) => {
    return (
        <View style={styles.mainBackground}>
            <Text style={styles.screenTitle}>Contact List</Text>
            <TouchableOpacity
                style={styles.addButton}
                onPress={() => navigation.navigate('AddContactScreen')}
            >
                <Text style={styles.addButtonText}>+</Text>
            </TouchableOpacity>
            {/* List rendering or other components */}
        </View>
    );

};

export default ContactList;
