import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import HeartSvg from '../../assets/images/heart.svg';
import HomeSvg from '../../assets/images/home.svg';
import MilkSvg from '../../assets/images/milk.svg';
import PlanSvg from '../../assets/images/plan.svg';
import ProfileSvg from '../../assets/images/user.svg';
import CuisineScreen from '../screens/cuisine/CuisineScreen';
import ExerciseScreen from '../screens/exercise/ExerciseScreen';
import HomeScreen from '../screens/home/HomeScreen';
import CaloriesScreen from '../screens/planning/PlanningScreen';
import ProfileScreen from '../screens/profile/ProfileScreen';
import { MainColors, SubColors } from '../utils/Colors';

const Tab = createBottomTabNavigator();

const TabNavigation: React.FC = () => {
    return (
        <Tab.Navigator
            initialRouteName='home'
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarInactiveTintColor: MainColors[25],
                tabBarActiveTintColor: SubColors["yellow"],
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
            <Tab.Screen
                name='home'
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <HomeSvg width={24} height={24} fill={color} />
                    )
                }}
            />
            <Tab.Screen
                name="cuisine"
                component={CuisineScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <MilkSvg width={24} height={24} fill={color} />
                    )
                }}
            />
            <Tab.Screen
                name="exercise"
                component={ExerciseScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <HeartSvg width={24} height={24} fill={color} />
                    )
                }}
            />
            <Tab.Screen
                name="calories"
                component={CaloriesScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <PlanSvg width={24} height={24} fill={color} />
                    )
                }}
            />
            <Tab.Screen
                name='profile'
                component={ProfileScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <ProfileSvg width={24} height={24} fill={color} />
                    )
                }}
            />
        </Tab.Navigator>
    );
}

export default TabNavigation;