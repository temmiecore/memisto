import * as React from 'react';
import EntryScreen from './components/screens/EntryScreen';
import LoginScreen from './components/screens/LoginScreen';
import SignupScreen from './components/screens/SignupScreen'; 
import AppealListScreen from './components/screens/AppealListScreen';
import AppealScreen from './components/screens/AppealScreen';
import ViewCreateScreen from './components/screens/ViewCreateScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//https://fc7f-188-163-103-97.ngrok-free.app

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Entry">
        <Stack.Screen name="Entry" component={EntryScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Log In' }}/>
        <Stack.Screen name="Signup" component={SignupScreen} options={{ title: 'Sign Up' }}/>
        <Stack.Screen name="ViewCreate" component={ViewCreateScreen} options={{ title: 'Choose the action:' }}/>
        <Stack.Screen name="AppealList" component={AppealListScreen} options={{ title: 'Appeal List' }}/>
        <Stack.Screen name="Appeal" component={AppealScreen} options={{ title: 'Appeal' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;