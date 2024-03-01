// HomeScreen.js
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Button,
} from 'react-native';
import {CircularProgress} from 'react-native-circular-progress'; // for the circular progress bar
import styles from '../config/styles'; // Make sure the path is correct

const HomeScreen = ({navigation}) => {
  // Get the current date
  const currentDate = new Date();
  const formattedDate = `${
    currentDate.getMonth() + 1
  }/${currentDate.getDate()}`;

  return (
    <ScrollView
      style={styles.mainBackground}
      contentContainerStyle={styles.scrollViewContainer} // This line is crucial
    >
      <View style={styles.dateContainer}>
        <Text style={styles.dateText}>{formattedDate}</Text>
      </View>
      <View style={styles.header}>
        {/* User avatar, date, and settings icon would be here */}
      </View>
      <View style={styles.centersContainer}>
        <View style={styles.goalCenterContainer}>
          <Text style={styles.centerText}>Goals:</Text>
        </View>
        {/* Divider View */}
        <View style={styles.centerDivider} />
        <View style={styles.eventCenterContainer}>
          <Text style={styles.centerText}>Today's Events:</Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate('AddContactScreen')} // This line will navigate to the AddContactScreen when the button is pressed.
          style={styles.button}>
          <Text style={styles.buttonText}>Contacts</Text>
        </TouchableOpacity>
        <TouchableOpacity
            onPress={() => navigation.navigate('CalendarScreen')} // This line will navigate to the CalendarScreen when the button is pressed.
            style={styles.button}>
          <Text style={styles.buttonText}>Calendar</Text>
        </TouchableOpacity>
      </View>
      {/*<View style={styles.messageCenterContainer}>*/}
      {/*  <TouchableOpacity*/}
      {/*    onPress={() => navigation.navigate('AddContactScreen')} // Adjust as per your navigation needs*/}
      {/*    style={styles.fullWidthButton}>*/}
      {/*    <Text style={styles.buttonText}>My Contacts</Text>*/}
      {/*  </TouchableOpacity>*/}
      {/*</View>*/}
      <View style={styles.messageCenterContainer}>
        <TouchableOpacity
            onPress={() => navigation.navigate('Template')} // Update this line
            style={styles.fullWidthButton}>
          <Text style={styles.buttonText}>Message Center</Text>
        </TouchableOpacity>
      </View>
      {/*<View style={styles.messageCenterContainer}>*/}
      {/*  <TouchableOpacity*/}
      {/*    onPress={() => navigation.navigate('CalendarScreen')}*/}
      {/*    style={styles.fullWidthButton}>*/}
      {/*    <Text style={styles.buttonText}>My Calendar</Text>*/}
      {/*  </TouchableOpacity>*/}
      {/*</View>*/}
    </ScrollView>
  );
};

// Add to your existing styles.js or create these within the HomeScreen.js
const additionalStyles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // Add styles for your header
  },
  goalsContainer: {
    // Add styles for your goals container
  },
  eventsContainer: {
    // Add styles for your events container
  },
  buttonContainer: {
    // Add styles for your button container
  },
  buttonText: {
    // Add styles for your button text
  },
  // ... any other additional styles you need
});

export default HomeScreen;
