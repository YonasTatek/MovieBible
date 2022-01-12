import * as React from 'react';

import Home from './Home';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import About from './About';
import { enableScreens } from 'react-native-screens';
import ShowDetail from './ShowDetail';
const Stack = createStackNavigator();


export function App() {
  enableScreens()
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown: false,}}  name="Home" component={Home} />
        <Stack.Screen  name="Show"   options={{


headerStyle: {
   
  backgroundColor: '#0f172a',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },


        }} component={ShowDetail} />
        <Stack.Screen  name="About"          options={{
          title: 'About Movie Bible',
          headerStyle: {
   
      backgroundColor: '#0f172a',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
        component={About} />
     
      </Stack.Navigator>
     
    </NavigationContainer>
  );
}

export default App;