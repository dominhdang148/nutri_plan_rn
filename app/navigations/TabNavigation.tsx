import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/home/HomeScreen';
import ProfileScreen from '../screens/profile/ProfileScreen';
const Tab = createBottomTabNavigator();

export default function TabNavigation() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,

            }}
        >
            <Tab.Screen name='home' component={HomeScreen} />
            <Tab.Screen name='profile' component={ProfileScreen} />
        </Tab.Navigator>
    );
}