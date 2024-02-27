import React, { useState } from 'react';
import { View, Button, Text, Modal, StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';

const MyCalendarComponent = ({ style }) => {
    const [selectedDate, setSelectedDate] = useState('');
    const [isModalVisible, setIsModalVisible] = useState(false);

    const onDayPress = (day) => {
        setSelectedDate(day.dateString);
        setIsModalVisible(true);
    };

    const addTask = () => {
        // Implement adding task logic here
        // For now, let's just close the modal
        setIsModalVisible(false);
    };

    return (
        <View style={[styles.container, style]}>
            <Calendar
                onDayPress={onDayPress}
                markedDates={{ [selectedDate]: { selected: true, marked: true, selectedColor: 'blue' } }}
            />
            <Modal visible={isModalVisible} animationType="slide">
                <View style={styles.modalContent}>
                    <Text>Add Task for {selectedDate}:</Text>
                    {/* Input field for adding task */}
                    <Button title="Add Task" onPress={addTask} />
                    <Button title="Cancel" onPress={() => setIsModalVisible(false)} />
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 20,
    },
});

export default MyCalendarComponent;