import React, { useState } from 'react';
import { View, Button, Text, Modal, StyleSheet, TextInput } from 'react-native';
import { Calendar } from 'react-native-calendars';

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
                [selectedDate]: [...(tasks[selectedDate] || []), newTask]
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
                markedDates={{ ...tasks, [selectedDate]: { selected: true, marked: true, selectedColor: 'blue' } }}
            />
            <Modal visible={isAddModalVisible} animationType="slide">
                <View style={styles.modalContent}>
                    <Text>Add Task for {selectedDate}:</Text>
                    <TextInput
                        style={styles.input}
                        value={newTask}
                        onChangeText={setNewTask}
                        placeholder="Enter task"
                    />
                    <Button title="Add Task" onPress={addTask} />
                    <Button title="Cancel" onPress={() => setIsAddModalVisible(false)} />
                    <Button title="View All Tasks" onPress={viewTasks} />
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
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 10,
        width: '100%',
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
