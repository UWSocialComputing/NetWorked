// src/styles/styles.js or src/constants/styles.js

import {StyleSheet} from 'react-native';
import colors from './colors';

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
  // Button styles
  bronzeButton: {
    backgroundColor: colors.bronze,
    padding: 10,
    borderRadius: 5,
    // Additional styling
  },
  // ... any other common styles you need
});
