import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import MyCalendarComponent from '../components/calendar';
import { useNavigation } from '@react-navigation/native';

const CalendarScreen = () => {
    const navigation = useNavigation(); // Access the navigation prop

    const handleBack = () => {
        navigation.goBack(); // Navigate back to the previous screen
    };

    return (
        <View style={styles.container}>
            <MyCalendarComponent style={styles.calendar} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    calendar: {
        flex: 1,
    },
});

export default CalendarScreen;