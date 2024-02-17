import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import SplashScreen from '../screens/splash/SplashScreen';
import TabNavigation from './TabNavigation';
import WelcomeNavigation from './WelcomeNavigation';

const Stack = createStackNavigator();
const SplashNavigation: React.FC = () => {
    return (
        <Stack.Navigator initialRouteName='splash' screenOptions={{ headerShown: false }}>
            <Stack.Screen name='splash' component={SplashScreen} />
            <Stack.Screen name='main' component={TabNavigation} />
            <Stack.Screen name='getinfo' component={WelcomeNavigation} />
        </Stack.Navigator>
    )
}

export default SplashNavigation

