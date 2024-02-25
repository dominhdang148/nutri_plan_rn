import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useIsFocused } from '@react-navigation/native';
import React, { useRef, useState } from 'react';
import { NativeScrollEvent, NativeSyntheticEvent, ScrollView } from 'react-native';
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
    const scrollViewRef = useRef<ScrollView>(null);
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const isFocused = useIsFocused(); // Determine if the screen is focused

    const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
        const currentScrollPos: number = event.nativeEvent.contentOffset.y;
        setPrevScrollPos(currentScrollPos);
    };

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
                    display: prevScrollPos === 0 ? 'flex' : 'none' // Hide the BottomTabNavigator while scrolling
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
