import * as React from 'react';
import EntryScreen from './components/screens/EntryScreen';
import LoginScreen from './components/screens/LoginScreen';
import SignupScreen from './components/screens/SignupScreen'; 
import AppealListScreen from './components/screens/AppealListScreen';
import AppealScreen from './components/screens/AppealScreen';
import ViewCreateScreen from './components/screens/ViewCreateScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Entry">
        <Stack.Screen name="Entry" component={EntryScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="ViewCreate" component={ViewCreateScreen} />
        <Stack.Screen name="AppealList" component={AppealListScreen} />
        <Stack.Screen name="Appeal" component={AppealScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;