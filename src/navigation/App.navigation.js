import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//Component Imports
import HomeScreen from '../Home/Home.screen';
import SinglePlayerGameScreen from '../SinglePlayerGame/SinglePlayerGame.screen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="SinglePlayerGame" component={SinglePlayerGameScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
