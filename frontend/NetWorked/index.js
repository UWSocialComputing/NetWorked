/**
 * @format
 */

// index.js
import {AppRegistry} from 'react-native';
import App from './src/App'; // Correct as 'App.tsx' is inside the 'src' directory
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
