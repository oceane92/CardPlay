import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';
// import MaintTabNavigator from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
 
const MainNavigator = createStackNavigator ({
  Home: {screen: HomeScreen},
  Game: {screen: LinksScreen},
  NewGame: {screen: SettingsScreen}
});
 
export default createAppContainer(
  MainNavigator
);