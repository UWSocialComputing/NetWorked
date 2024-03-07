import React, { useState } from 'react';
import { View, Button, Text, Modal, StyleSheet, TextInput } from 'react-native';
import { Calendar } from 'react-native-calendars';
import colors from "../config/colors"

const MyCalendarComponent = ({ style }) => {
    const [selectedDate, setSelectedDate] = useState('');
    const [isAddModalVisible, setIsAddModalVisible] = useState(false);
    const [newTask, setNewTask] = useState('');
    const [isViewModalVisible, setIsViewModalVisible] = useState(false);
    const [tasks, setTasks] = useState({});

    const onDayPress = (day) => {
        setSelectedDate(day.dateString);
        setIsAddModalVisible(true);
    };

    const addTask = () => {
        if (selectedDate && newTask) {
            const updatedTasks = {
                ...tasks,
                [selectedDate]: [...(tasks[selectedDate] || []), newTask],
            };
            setTasks(updatedTasks);
            setNewTask('');
            setIsAddModalVisible(false);
        }
    };

    const viewTasks = () => {
        setIsAddModalVisible(false);
        // Show all tasks for the selected date
        setIsViewModalVisible(true);
    };

    return (
        <View style={[styles.container, style]}>
            <Calendar
                onDayPress={onDayPress}
                markedDates={{
                    ...tasks,
                    [selectedDate]: { selected: true, marked: true, selectedColor: colors.deepKhaki },
                }}
            />
            <Modal visible={isAddModalVisible} animationType="slide">
                <View style={styles.modalContent}>
                    <Text>Task Menu for {selectedDate}:</Text>
                    <TextInput
                        style={styles.input}
                        value={newTask}
                        onChangeText={setNewTask}
                        placeholder="Enter the task you want to add here!"
                    />
                    <Button title="Add Task" onPress={addTask} />
                    <Button title="View All Tasks" onPress={viewTasks} />
                    <Button title="Cancel" onPress={() => setIsAddModalVisible(false)} />

                </View>
            </Modal>
            <Modal visible={isViewModalVisible} animationType="slide">
                <View style={styles.modalContent}>
                    <Text>Tasks for {selectedDate}:</Text>
                    {tasks[selectedDate] && tasks[selectedDate].map((task, index) => (
                        <Text key={index}>{task}</Text>
                    ))}
                    <Button title="Close" onPress={() => setIsViewModalVisible(false)} />
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        padding: 20,
    },
    modalContent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.lightKhaki,
        padding: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 10,
        width: '100%',
    },
});

export default MyCalendarComponent;






