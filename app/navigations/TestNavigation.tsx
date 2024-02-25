import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useState } from 'react';
import { ScrollView, Text } from 'react-native';
const Tab = createBottomTabNavigator();

const MyTabNavigator: React.FC = () => {
    return (
        <Tab.Navigator screenOptions={{ tabBarStyle: { display: 'flex' } }}>
            <Tab.Screen name="Screen1" component={Screen1} />
            <Tab.Screen name="Screen2" component={Screen2} />
        </Tab.Navigator>
    );
};

const Screen1: React.FC = () => {
    const [tabVisible, setTabVisible] = useState(true);

    const handleScroll = (event: any) => {
        const offsetY = event.nativeEvent.contentOffset.y;
        setTabVisible(offsetY <= 0);
    };

    return (
        <ScrollView onScroll={handleScroll} scrollEventThrottle={16}>
            <Text>Screen1 Content</Text>

        </ScrollView>
    );
};

const Screen2: React.FC = () => {
    const [tabVisible, setTabVisible] = useState(true);

    const handleScroll = (event: any) => {
        const offsetY = event.nativeEvent.contentOffset.y;
        setTabVisible(offsetY <= 0);
    };

    return (
        <ScrollView onScroll={handleScroll} scrollEventThrottle={16}>
            <Text>Screen2 Content</Text>
        </ScrollView>
    );
};

export default MyTabNavigator;
