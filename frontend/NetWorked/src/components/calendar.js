import React, {useState} from 'react';
import {View, Button, Text, Modal, StyleSheet, TextInput} from 'react-native';
import {Calendar} from 'react-native-calendars';
import { useNavigation } from '@react-navigation/native';

// Define the main component
const MyCalendarComponent = ({style}) => {
    // State for storing the selected date
    const [selectedDate, setSelectedDate] = useState('');
    // State for controlling the visibility of the add task modal
    const [isAddModalVisible, setIsAddModalVisible] = useState(false);
    // State for storing the new task input
    const [newTask, setNewTask] = useState('');
    // State for controlling the visibility of the view tasks modal
    const [isViewModalVisible, setIsViewModalVisible] = useState(false);
    // State for storing tasks mapped by date
    const [tasks, setTasks] = useState({});
    const navigation = useNavigation();

    // Function called when a day is pressed
    const onDayPress = (day) => {
        setSelectedDate(day.dateString); // Set the selected date
        // setIsAddModalVisible(true); // Show the add task modal
        navigation.navigate('ViewTaskScreen', { date: day.dateString });
    };

    // Function to add a new task
    const addTask = () => {
        if (selectedDate && newTask) {
            const updatedTasks = {
                ...tasks,
                [selectedDate]: [...(tasks[selectedDate] || []), newTask]
            };
            setTasks(updatedTasks); // Update the tasks state
            setNewTask(''); // Reset the newTask input
            setIsAddModalVisible(false); // Hide the add task modal
        }
    };

    // Function to view tasks for the selected date
    const viewTasks = () => {
        setIsAddModalVisible(false); // Hide the add task modal
        setIsViewModalVisible(true); // Show the view tasks modal
    };

    return (
        <View style={[styles.container, style]}>
            {/* Wrapping Calendar in a View to control width */}
            <View style={styles.calendarWrapper}>
                <Calendar
                    onDayPress={onDayPress}
                    theme={{
                        textDayFontSize: 16, // Font size for the dates
                        textMonthFontSize: 24, // Font size for the month title
                        textDayHeaderFontSize: 14, // Font size for the day names (e.g., Sun, Mon)
                        textDayFontWeight: 'bold', // Font weight for the dates
                        textMonthFontWeight: 'bold', // Font weight for the month title
                        textDayHeaderFontWeight: 'bold', // Font weight for the day names
                        calendarBackground: '#ced2c1',
                        backgroundColor: '#a4ac86',
                        textSectionTitleColor: '#582f0e',
                        textSectionTitleDisabledColor: '#a68a64',
                        selectedDayBackgroundColor: 'black',
                        selectedDayTextColor: '#ffffff',
                        todayTextColor: 'orange',
                        dayTextColor: '#333d29',
                        textDisabledColor: '#ffffff',
                        dotColor: '#bb9228',
                        selectedDotColor: '#ffffff',
                        arrowColor: '#582f0e',
                        disabledArrowColor: '#d9e1e8',
                        monthTextColor: '#582f0e',
                        indicatorColor: '#ced2c1',
                        'stylesheet.calendar.header': {
                            week: {
                                marginTop: 5,
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center', // Ensure this aligns items vertically

                            }
                        }
                        // ... any other theming properties you want to adjust
                    }}
                    markedDates={{...tasks, [selectedDate]: {selected: true, marked: true, selectedColor: 'blue'}}}
                />
            </View>
            <Modal visible={isAddModalVisible} animationType="slide">
                <View style={styles.modalContent}>
                    <Text>Add Task for {selectedDate}:</Text>
                    <TextInput
                        style={styles.input}
                        value={newTask}
                        onChangeText={setNewTask}
                        placeholder="Enter task"
                    />
                    <Button title="Add Task" onPress={addTask}/>
                    <Button title="Cancel" onPress={() => setIsAddModalVisible(false)}/>
                    <Button title="View All Tasks" onPress={viewTasks}/>
                </View>
            </Modal>
            <Modal visible={isViewModalVisible} animationType="slide">
                <View style={styles.modalContent}>
                    <Text>Tasks for {selectedDate}:</Text>
                    {tasks[selectedDate] && tasks[selectedDate].map((task, index) => (
                        <Text key={index}>{task}</Text>
                    ))}
                    <Button title="Close" onPress={() => setIsViewModalVisible(false)}/>
                </View>
            </Modal>
        </View>
    );
};

// Styles for the component
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
    },
    modalContent: {
        // Styling for the content inside the modal
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 20,
    },
    input: {
        // Styling for the input field inside the modal
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 10,
        width: '100%',
    },
    calendarWrapper: {
        flex: 1,
        // alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: '2.5%', // Adjusts the calendar's width to 95% of the container width
    },
});

export default MyCalendarComponent;


// import React, { useState } from 'react';
// import { View, Button, Text, Modal, StyleSheet, TextInput, ScrollView } from 'react-native';
// import { Calendar } from 'react-native-calendars';
//
// const MyCalendarComponent = ({ style }) => {
//     const [selectedDate, setSelectedDate] = useState('');
//     const [isAddModalVisible, setIsAddModalVisible] = useState(false);
//     const [newTask, setNewTask] = useState('');
//     const [tasks, setTasks] = useState({});
//     const [allTasks, setAllTasks] = useState([]);
//
//     const onDayPress = (day) => {
//         setSelectedDate(day.dateString);
//         setIsAddModalVisible(true);
//     };
//
//     const addTask = () => {
//         if (selectedDate && newTask) {
//             const updatedTasks = {
//                 ...tasks,
//                 [selectedDate]: [...(tasks[selectedDate] || []), newTask]
//             };
//             setTasks(updatedTasks);
//             setAllTasks([...allTasks, { date: selectedDate, task: newTask }]);
//             setNewTask('');
//             setIsAddModalVisible(false);
//         }
//     };
//
//     const viewTasks = () => {
//         setSelectedDate('');
//         setIsAddModalVisible(false);
//     };
//
//     return (
//         <View style={[styles.container, style]}>
//             <Calendar
//                 onDayPress={onDayPress}
//                 markedDates={{ ...tasks, [selectedDate]: { selected: true, marked: true, selectedColor: 'blue' } }}
//             />
//             <Modal visible={isAddModalVisible} animationType="slide">
//                 <View style={styles.modalContent}>
//                     <Text>Add Task for {selectedDate}:</Text>
//                     <TextInput
//                         style={styles.input}
//                         value={newTask}
//                         onChangeText={setNewTask}
//                         placeholder="Enter task"
//                     />
//                     <Button title="Add Task" onPress={addTask} />
//                     <Button title="View Existing Tasks" onPress={viewTasks} />
//                     <Button title="Cancel" onPress={() => setIsAddModalVisible(false)} />
//                 </View>
//             </Modal>
//             <Modal visible={!selectedDate && allTasks.length > 0} animationType="slide">
//                 <View style={styles.modalContent}>
//                     <Text>All Tasks:</Text>
//                     <ScrollView>
//                         {allTasks.map((task, index) => (
//                             <Text key={index}>{task.date}: {task.task}</Text>
//                         ))}
//                     </ScrollView>
//                     <Button title="Close" onPress={() => setAllTasks([])} />
//                 </View>
//             </Modal>
//         </View>
//     );
// };
//
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     modalContent: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#fff',
//         padding: 20,
//     },
//     input: {
//         borderWidth: 1,
//         borderColor: '#ccc',
//         padding: 10,
//         marginBottom: 10,
//         width: '100%',
//     },
// });
//
// export default MyCalendarComponent;


// import React, { useState } from 'react';
// import { View, Button, Text, Modal, StyleSheet, TextInput } from 'react-native';
// import { Calendar } from 'react-native-calendars';
//
// const MyCalendarComponent = ({ style }) => {
//     const [selectedDate, setSelectedDate] = useState('');
//     const [isAddModalVisible, setIsAddModalVisible] = useState(false);
//     const [newTask, setNewTask] = useState('');
//     const [tasks, setTasks] = useState({});
//
//     const onDayPress = (day) => {
//         setSelectedDate(day.dateString);
//         setIsAddModalVisible(true);
//     };
//
//     const addTask = () => {
//         if (selectedDate && newTask) {
//             const updatedTasks = {
//                 ...tasks,
//                 [selectedDate]: [...(tasks[selectedDate] || []), newTask]
//             };
//             setTasks(updatedTasks);
//             setNewTask('');
//             setIsAddModalVisible(false);
//         }
//     };
//
//     return (
//         <View style={[styles.container, style]}>
//             <Calendar
//                 onDayPress={onDayPress}
//                 markedDates={{ ...tasks, [selectedDate]: { selected: true, marked: true, selectedColor: 'blue' } }}
//             />
//             <Modal visible={isAddModalVisible} animationType="slide">
//                 <View style={styles.modalContent}>
//                     <Text>Add Task for {selectedDate}:</Text>
//                     <TextInput
//                         style={styles.input}
//                         value={newTask}
//                         onChangeText={setNewTask}
//                         placeholder="Enter task"
//                     />
//                     <Button title="Add Task" onPress={addTask} />
//                     <Button title="Cancel" onPress={() => setIsAddModalVisible(false)} />
//                 </View>
//             </Modal>
//             <Modal visible={!!tasks[selectedDate]} animationType="slide">
//                 <View style={styles.modalContent}>
//                     <Text>Tasks for {selectedDate}:</Text>
//                     {tasks[selectedDate] && tasks[selectedDate].map((task, index) => (
//                         <Text key={index}>{task}</Text>
//                     ))}
//                     <Button title="Close" onPress={() => setSelectedDate('')} />
//                 </View>
//             </Modal>
//         </View>
//     );
// };
//
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     modalContent: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#fff',
//         padding: 20,
//     },
//     input: {
//         borderWidth: 1,
//         borderColor: '#ccc',
//         padding: 10,
//         marginBottom: 10,
//         width: '100%',
//     },
// });
//
// export default MyCalendarComponent;
