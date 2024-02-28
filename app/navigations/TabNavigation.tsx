import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useEffect } from 'react';
import HeartSvg from '../../assets/images/heart.svg';
import HomeSvg from '../../assets/images/home.svg';
import MilkSvg from '../../assets/images/milk.svg';
import PlanSvg from '../../assets/images/plan.svg';
import ProfileSvg from '../../assets/images/user.svg';
import { useScrollPosition } from '../components/ScrollPositionProvider';
import CuisineScreen from '../screens/cuisine/CuisineScreen';
import ExerciseScreen from '../screens/exercise/ExerciseScreen';
import HomeScreen from '../screens/home/HomeScreen';
import CaloriesScreen from '../screens/planning/PlanningScreen';
import ProfileScreen from '../screens/profile/ProfileScreen';
import { MainColors, SubColors } from '../utils/Colors';

const Tab = createBottomTabNavigator();

const TabNavigation: React.FC = () => {
    const { scrollPosition, setScrollPosition } = useScrollPosition();
    const [showTabBar, setShowTabBar] = React.useState(true);

    useEffect(() => {
        if (scrollPosition > 0) {

            setShowTabBar(false);


            const timeout = setTimeout(() => {
                setShowTabBar(true);
            }, 1000);

            return () => clearTimeout(timeout);
        } else {
            setShowTabBar(true);
        }
    }, [scrollPosition]);
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
                    // display: scrollPosition === 0 ? 'flex' : 'none' // Hide the BottomTabNavigator while scrolling
                    display: showTabBar ? 'flex' : 'none',

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
