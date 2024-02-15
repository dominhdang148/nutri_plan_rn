import React from 'react';
import { View } from 'react-native';
import GlobalStyling from '../../components/GlobalStyling';
import Header from './components/Header';
import InfomationBox from './components/InfomationBox';
import PopularFeed from './components/PopularFeed';

const HomeScreen: React.FC = () => {
    return (
        <View style={GlobalStyling.screen}>
            {/* Header Section */}
            <Header />

            {/* Infomation Seciton */}
            <InfomationBox />

            {/* Popular Feed Section*/}
            <PopularFeed />
        </View>
    )
}

export default HomeScreen;