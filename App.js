import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';

import HomeScreen from "./screens/Home";
import StarMapScreen from "./screens/StarMap";
import DailyPicScreen from "./screens/DailyPic";
import SpaceCraftScreen from "./screens/SpaceCraft";
const Stack = createStackNavigator(); 
function App() 
{ return ( 
<NavigationContainer> 
<Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
<Stack.Screen name="Home" component={HomeScreen} /> 
<Stack.Screen name="StarMap" component={StartMapScreen} /> 
<Stack.Screen name="DailyPic" component={DailyPicScreen} /> 
<Stack.Screen name="SpaceCraft" component={SpaceCraftScreen} /> 
</Stack.Navigator> </NavigationContainer> );
 } export default App;
 