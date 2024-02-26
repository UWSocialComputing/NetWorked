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
  return (
    <ScrollView style={styles.mainBackground}>
      <View style={styles.header}>
        {/* User avatar, date, and settings icon would be here */}
      </View>
      <View style={styles.goalsContainer}>
        {/*<CircularProgress*/}
        {/*  size={120}*/}
        {/*  fill={40} // This should be dynamic based on your goals state*/}
        {/*  tintColor={styles.highlightedIcon.color}*/}
        {/*  backgroundColor={styles.nonActiveTab.borderBottomColor}*/}
        {/*  width={45}>*/}
        {/*  {() => <Text style={styles.primaryText}>2/5</Text>}*/}
        {/*</CircularProgress>*/}
        <Text style={styles.secondaryText}>Monthly:</Text>
        {/* Monthly progress bar component here */}
      </View>
      <View style={styles.eventsContainer}>
        <Text style={styles.primaryText}>Today's Events:</Text>
        {/* Map through your events data to display them */}
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.bronzeButton}>
          <Text style={styles.buttonText}>New Contact</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bronzeButton}>
          <Text style={styles.buttonText}>My Stats</Text>
        </TouchableOpacity>
        {/* Other buttons here */}
      </View>
      <View>
        <Button
          title="Message Center"
          onPress={() => navigation.navigate('Template')}
        />
      </View>
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
