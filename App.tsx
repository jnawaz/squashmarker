/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import GameSetup from './src/screens/game-setup/GameSetup';
import Scoring from './src/screens/scoring/Scoring';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="GameSetup"
          component={GameSetup}
          options={{
            title: 'New game',
            headerStyle: {},
            headerTintColor: '',
          }}
        />
        <Stack.Screen
          name="Scoring"
          component={Scoring}
          options={{
            title: 'Scoring',
            headerStyle: {
              backgroundColor: '',
            },
            headerTintColor: '',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
