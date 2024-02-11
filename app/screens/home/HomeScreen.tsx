import React, { useEffect } from 'react';
import { View } from 'react-native';
import GlobalStyling from '../../components/GlobalStyling';
import Header from './components/Header';

export default function HomeScreen() {
    useEffect(() => {
        console.log('hello');
    })
    return (
        <View style={GlobalStyling.screen}>
            {/* Header Section */}
            <Header />
        </View>
    )
}



