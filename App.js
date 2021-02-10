import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import OrderScreen from './src/screens/OrdersScreen'
import OrderDeatils from './src/screens/OrderDetailsScreen'
import AddOrder from './src/screens/AddOrderScreen'
import SignUpScreen from './src/screens/SignUpScreen'
import SignInScreen from './src/screens/SignInScreen'
import ProfileScreen from './src/screens/ProfileScreen'
import AuthStackScreen from './src/routes/AuthStack'
import AppDrawerScreen from './src/routes/AppDrawer'

const stack = createStackNavigator()
const orderDetailsStack = createStackNavigator()

function App() {
  return (
    <NavigationContainer>
      {true ? <AppDrawerScreen /> : <AuthStackScreen />}
    </NavigationContainer>
  )
}

export default App
