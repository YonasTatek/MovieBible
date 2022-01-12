import React from 'react'
import { View, Text } from 'react-native'
import store from './app/store'
import { Provider } from 'react-redux'
import ThemeContainer from './components/ThemeContainer'
import Constants from 'expo-constants';

export default function App() {

  return (
   <Provider store ={store}>
  <ThemeContainer></ThemeContainer>

   </Provider>
  )
}
