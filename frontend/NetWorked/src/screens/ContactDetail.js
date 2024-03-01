// ContactDetail.js
import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import styles from '../config/styles'; // Adjust the import path as necessary

const ContactDetail = ({ route }) => {
    // Assuming the contact object is passed as a parameter
    const { contact } = route.params;

    return (
        <ScrollView style={styles.mainBackground}>
            <View style={styles.contactDetailContainer}>
                <Text style={styles.contactDetailTitle}>Contact Detail</Text>
                <Text style={styles.contactDetailText}>Name: {contact.name}</Text>
                <Text style={styles.contactDetailText}>Phone: {contact.phone}</Text>
                <Text style={styles.contactDetailText}>Email: {contact.email}</Text>
                {/* Add more contact details as needed */}
            </View>
        </ScrollView>
    );
};

export default ContactDetail;
