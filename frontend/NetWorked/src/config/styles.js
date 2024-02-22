// src/styles/styles.js or src/constants/styles.js

import {StyleSheet} from 'react-native';
import colors from './colors'; // Adjust the import path according to your project structure

export default StyleSheet.create({
  // General text styles
  primaryText: {
    color: colors.darkOlive,
    // Add additional styling like font size, font family, etc.
  },
  secondaryText: {
    color: colors.deepKhaki,
    // Additional styling
  },
  subtitleText: {
    color: colors.taupe,
    // Additional styling for subtitles
  },
  // Button styles
  bronzeButton: {
    backgroundColor: colors.bronze,
    padding: 10,
    borderRadius: 5,
    // Additional styling for main interactive buttons
  },
  secondaryButton: {
    backgroundColor: colors.taupe,
    padding: 8,
    borderRadius: 5,
    // Additional styling for secondary buttons
  },
  // Tab styles
  activeTab: {
    borderBottomColor: colors.deepKhaki,
    borderBottomWidth: 2,
    // Additional styling for active tabs
  },
  nonActiveTab: {
    borderBottomColor: colors.mediumBrown,
    borderBottomWidth: 2,
    // Additional styling for non-active tabs
  },
  // Icon styles
  highlightedIcon: {
    color: colors.deepKhaki,
    // Additional styling for icons that are active or highlighted
  },
  icon: {
    color: colors.oliveDrab,
    // Additional styling for other icons
  },
  // Popup, Card, and Menu Item styles
  popupBackground: {
    backgroundColor: colors.sageGreen,
    padding: 15,
    borderRadius: 10,
    // Additional styling for popup backgrounds
  },
  cardBackground: {
    backgroundColor: colors.sageGreen,
    padding: 10,
    borderRadius: 8,
    // Additional styling for card elements
  },
  highlightedMenuItem: {
    backgroundColor: colors.sageGreen,
    // Additional styling for highlighted menu items
  },
  // Background styles
  mainBackground: {
    backgroundColor: colors.lightKhaki,
    // Additional styling for the main background of the app
  },
  secondaryBackground: {
    backgroundColor: colors.khaki,
    // Additional styling for secondary context areas like sidebar
  },
  // Divider styles
  divider: {
    borderBottomColor: colors.mediumBrown,
    borderBottomWidth: StyleSheet.hairlineWidth,
    // Additional styling for dividers
  },
  // Notification styles
  urgentNotification: {
    backgroundColor: colors.darkBrown,
    // Additional styling for urgent notifications
  },
  // Navigation styles
  navigationBar: {
    backgroundColor: colors.darkOlive,
    // Additional styling for the navigation bar
  },
  footer: {
    backgroundColor: colors.darkOlive,
    // Additional styling for the footer
  },
  // ... any other common styles you need
});
