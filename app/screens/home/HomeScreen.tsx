import React, { useEffect } from 'react';
import { View } from 'react-native';
import GlobalStyling from '../../components/GlobalStyling';
import Header from './components/Header';
import InfomationBox from './components/InfomationBox';

export default function HomeScreen() {
    useEffect(() => {
        console.log('hello');
    })
    return (
        <View style={GlobalStyling.screen}>
            {/* Header Section */}
            <Header />

            {/* Infomation Seciton */}
            <InfomationBox />
        </View>
    )
}



