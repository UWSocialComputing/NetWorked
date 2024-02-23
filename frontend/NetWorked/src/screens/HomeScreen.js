// HomeScreen.js
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  // Image,
} from 'react-native';
// Import your CircularProgress component properly if it's a custom component
// import {CircularProgress} from 'react-native-circular-progress';

const HomeScreen = () => {
  // Define goalsData inside the component if it's not defined elsewhere
  const goalsData = {current: 2, target: 5};

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.date}>6/06</Text>
      </View>

      <View style={styles.goalsContainer}>
        <Text style={styles.progressText}>2/5</Text>
        <Text style={styles.goalsText}>Goals:</Text>
      </View>

      <View style={styles.eventsContainer}>
        <Text style={styles.eventsText}>Today's Events:</Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.newContactButton}>
          <Text style={styles.buttonText}>New Contact</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.myStatsButton}>
          <Text style={styles.buttonText}>My Stats</Text>
        </TouchableOpacity>
      </View>
      {/* Wide buttons */}
      <TouchableOpacity style={styles.messageCenterButton}>
        <Text style={styles.wideButtonText}>Message Center</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.myCalendarButton}>
        <Text style={styles.wideButtonText}>My Calendar</Text>
      </TouchableOpacity>
      {/* Other components */}
    </ScrollView>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c2c5aa',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center', // Center content horizontally
    alignItems: 'center',
    padding: 16,
  },
  date: {
    fontSize: 60,
    color: '#FFFFFF',
  },
  goalsContainer: {
    padding: 16,
  },
  progressText: {
    fontSize: 18,
  },
  goalsText: {
    fontSize: 18,
  },
  eventsContainer: {
    padding: 16,
  },
  eventsText: {
    fontSize: 18,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
  },
  button: {
    // Your existing styles for the button
    backgroundColor: '#656d4a',
    borderRadius: 20,
    paddingVertical: 10,
    width: 150, // Fixed width for equal size buttons
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  buttonText: {
    fontSize: 18,
    color: '#FFFFFF',
  },
  messageCenterButton: {
    backgroundColor: '#b6ad90', // You can change the color as needed
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 8, // This controls the space between this button and others vertically
    marginHorizontal: 16, // Adjust the margin to control how much width the button should take
    justifyContent: 'center',
    alignItems: 'center',
  },
  myCalendarButton: {
    backgroundColor: '#b6ad90', // You can change the color as needed
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 8, // This controls the space between this button and others vertically
    marginHorizontal: 16, // Adjust the margin to control how much width the button should take
    justifyContent: 'center',
    alignItems: 'center',
  },
  wideButtonText: {
    fontSize: 18,
    color: '#414833', // Specific text color for the wide button
  },
  newContactButton: {
    backgroundColor: '#656d4a',
    borderRadius: 20,
    paddingVertical: 10,
    // Set a fixed width for the button
    width: 150,
    justifyContent: 'center', // This ensures text is centered in the button
    alignItems: 'center', // This ensures text is centered in the button
  },
  myStatsButton: {
    backgroundColor: '#656d4a',
    borderRadius: 20,
    paddingVertical: 10,
    // Set a fixed width for the button
    width: 150,
    justifyContent: 'center', // This ensures text is centered in the button
    alignItems: 'center', // This ensures text is centered in the button
  },
});

export default HomeScreen;
