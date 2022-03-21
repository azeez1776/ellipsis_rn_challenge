import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/Home';
import DetailScreen from './src/screens/Details'
import React from 'react';
import {
 View
} from 'react-native';


const App = () => {

  const Stack = createNativeStackNavigator()
  return(
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
      headerShown: false,
    }}
    initialRouteName="Home"
      >
        <Stack.Screen name="Home" component={HomeScreen}  options={{headerShadowVisible: false}} />
        <Stack.Screen name="Detail" component={DetailScreen}  options={{headerShadowVisible: false}} />
       </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;