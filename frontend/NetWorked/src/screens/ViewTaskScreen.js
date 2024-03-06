import React from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import styles from '../config/styles'; // Import your styles

const ViewTaskScreen = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const { date, tasks } = route.params; // Access the passed date and tasks

    return (
        <View style={styles.viewTaskContainer}>
            {/*<Button title="Back" onPress={() => navigation.goBack()} />*/}
            <Text style={styles.screenTitle}>{date}</Text>
            {/* Conditional rendering based on the presence of tasks */}
            {tasks && tasks[date] && tasks[date].length > 0 ? (
                // Display tasks if available
                tasks[date].map((task, index) => (
                    <Text key={index}>{task}</Text>
                ))
            ) : (
                // Display message if no tasks
                <Text style={styles.screenTitle}>No tasks today</Text>
            )}
            {/* Floating action button to add a task */}
            <TouchableOpacity
                style={[styles.floatingActionButton, styles.upperRight]}
                onPress={() => navigation.navigate('AddTaskScreen')}>
                <Text style={styles.fabText}>+</Text>
            </TouchableOpacity>
        </View>
    );
};

export default ViewTaskScreen;