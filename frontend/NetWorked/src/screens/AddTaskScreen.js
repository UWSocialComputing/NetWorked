import React, { useState } from 'react';
import {View, Text, TextInput, Button, TouchableOpacity, Switch} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../config/styles'; // Import styles
import colors from '../config/colors'; // import colors

const AddTaskScreen = () => {
    const navigation = useNavigation();
    const [task, setTask] = useState('');
    const [contact, setContact] = useState('');
    const [frequency, setFrequency] = useState(''); // State for frequency selection
    const [notificationsEnabled, setNotificationsEnabled] = useState(false);

    const handleSaveTask = () => {
        // Implement logic to save task
        console.log('Task saved:', task);
        console.log('Contact:', contact); // Log the selected contact
        console.log('Frequency:', frequency); // Log the selected frequency
        // Assuming you want to navigate back after saving the task
        navigation.goBack();
    };

    return (
        <View style={styles.viewTaskContainer}>
            <Text style={styles.screenTitle}>Add Task</Text>
            <TextInput
                style={styles.textInput}
                value={task}
                onChangeText={setTask}
                placeholder="Enter task"
                placeholderTextColor={colors.darkOlive} // Adjust placeholder text color
            />
            {/* Contact Field */}
            <TextInput
                style={styles.textInput}
                value={contact}
                onChangeText={setContact}
                placeholder="Enter contact"
                placeholderTextColor={colors.darkOlive} // Adjust placeholder text color
            />
            {/* Frequency Selection */}
            <View style={styles.categoryContainer}>
                <Text style={styles.categoryTitle}>Frequency</Text>
                {/* Option 1: Radio Buttons */}
                <TouchableOpacity
                    style={styles.relationshipContainer}
                    onPress={() => setFrequency('weekly')}>
                    <Text style={styles.relationshipText}>Weekly</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.relationshipContainer}
                    onPress={() => setFrequency('monthly')}>
                    <Text style={styles.relationshipText}>Monthly</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.relationshipContainer}
                    onPress={() => setFrequency('quarterly')}>
                    <Text style={styles.relationshipText}>Quarterly</Text>
                </TouchableOpacity>
            </View>
            {/* Notification Toggle Switch */}
            <View style={styles.categoryContainer}>
                <Text style={styles.categoryTitle}>Notifications</Text>
                <Switch
                    trackColor={{ false: colors.oliveDrab, true: colors.oliveDrab }}
                    thumbColor={notificationsEnabled ? colors.lightKhaki : colors.lightKhaki}
                    ios_backgroundColor={colors.deepKhaki}
                    onValueChange={setNotificationsEnabled}
                    value={notificationsEnabled}
                />
            </View>
            {/* Save Button */}
            <TouchableOpacity
                style={[styles.button, styles.centeredButton]}
                onPress={handleSaveTask}>
                <Text style={styles.buttonText}>Save</Text>
            </TouchableOpacity>
        </View>
    );
};

export default AddTaskScreen;