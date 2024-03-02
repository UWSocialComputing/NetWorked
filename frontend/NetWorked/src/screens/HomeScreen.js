// HomeScreen.js
// Import necessary components from React and React Native libraries
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
      contentContainerStyle={styles.scrollViewContainer}
    >
      <View style={styles.dateContainer}>
        <Text style={styles.dateText}>{formattedDate}</Text>
      </View>
      <View style={styles.header}>
      </View>
      <View style={styles.centersContainer}>
        <View style={styles.goalCenterContainer}>
          <Text style={styles.centerText}>Goals:</Text>
          {/* Circular progress bar with a fraction inside */}
          <CircularProgress
              size={125} // size of the circle
              width={15} // thickness of the progress line
              fill={40} // percentage filled
              tintColor="yellow" // color of the progress line
              backgroundColor="green" // color of the remaining circle
          >
            {() => (
                <Text style={styles.progressText}>3/5</Text>
            )}
          </CircularProgress>

          {/* "Monthly:" label */}
          <Text style={styles.monthlyLabel}>Monthly:</Text>

          {/* Colored bar for Monthly */}
          <View style={styles.monthlyBar}></View>
        </View>

        {/* Divider View */}
        <View style={styles.centerDivider} />
        <View style={styles.eventCenterContainer}>
          <Text style={styles.centerText}>Today's Events:</Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate('ContactList')} // This line will navigate to the ContactList when the button is pressed.
          style={styles.button}>
          <Text style={styles.buttonText}>Contacts</Text>
        </TouchableOpacity>
        <TouchableOpacity
            onPress={() => navigation.navigate('CalendarScreen')} // This line will navigate to the CalendarScreen when the button is pressed.
            style={styles.button}>
          <Text style={styles.buttonText}>Calendar</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.messageCenterContainer}>
        <TouchableOpacity
            onPress={() => navigation.navigate('Template')}
            style={styles.fullWidthButton}>
          <Text style={styles.buttonText}>Message Center</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
