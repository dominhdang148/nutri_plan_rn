import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import GlobalStyling from '../../components/GlobalStyling';

export default function HomeScreen() {
    useEffect(() => {
        console.log('hello');
    })
    return (
        <View style={GlobalStyling.screen}>
            <Text>Hello</Text>
        </View>
    )
}



