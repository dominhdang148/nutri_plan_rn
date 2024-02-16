import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import RegisterScreen from '../screens/register/RegisterScreen';
import WelcomeScreen from '../screens/welcome/WelcomeScreen';

const Stack = createStackNavigator();

const WelcomeNavigation: React.FC = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='welcome' component={WelcomeScreen} />
            <Stack.Screen name='register' component={RegisterScreen} />
        </Stack.Navigator>
    )
}

export default WelcomeNavigation
