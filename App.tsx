import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/Home';
import DetailScreen from './src/screens/Details'
import CartScreen from './src/screens/Cart'
import React from 'react';
import { Provider } from 'react-redux';
import store from './src/app/store'
import {
 View
} from 'react-native';


const App = () => {

  const Stack = createNativeStackNavigator()
  return(
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
      headerShown: false,
    }}
    initialRouteName="Home"
      >
        <Stack.Screen name="Home" component={HomeScreen}  options={{headerShadowVisible: false}} />
        <Stack.Screen name="Detail" component={DetailScreen}  options={{headerShadowVisible: false}} />
        <Stack.Screen name="Cart" component={CartScreen}  options={{headerShadowVisible: false}} />
       </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  )
}

export default App;