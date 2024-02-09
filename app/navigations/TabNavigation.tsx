import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import MainColors from '../../utils/colors/MainColors';
import HomeScreen from '../screens/home/HomeScreen';
import ProfileScreen from '../screens/profile/ProfileScreen';
const Tab = createBottomTabNavigator();

export default function TabNavigation() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    backgroundColor: MainColors[100],
                    marginBottom: 24,
                    marginLeft: 24,
                    marginRight: 24,
                    borderRadius: 8,
                    position: 'absolute',
                    elevation: 5,
                    shadowOpacity: 0.1,
                }
            }}
        >
            <Tab.Screen name='home' component={HomeScreen} />
            <Tab.Screen name='profile' component={ProfileScreen} />
        </Tab.Navigator>
    );
}