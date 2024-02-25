// HomeScreen.tsx
import React, { useRef } from 'react';
import { ScrollView, View } from 'react-native';
import GlobalStyling from '../../components/GlobalStyling';
import { useScrollPosition } from '../../components/ScrollPositionProvider';
import Header from './components/Header';
import InfomationBox from './components/InfomationBox';
import PopularFeed from './components/PopularFeed';

const HomeScreen: React.FC = () => {
    const scrollViewRef = useRef<ScrollView>(null);
    const { setScrollPosition } = useScrollPosition();

    const handleScroll = (event: { nativeEvent: { contentOffset: { y: number } } }) => {
        const currentScrollPos = event.nativeEvent.contentOffset.y;
        setScrollPosition(currentScrollPos);
    };

    return (
        <View style={GlobalStyling.screen}>
            <Header />
            <ScrollView
                ref={scrollViewRef}
                onScroll={handleScroll}
                showsVerticalScrollIndicator={false}
            >
                <InfomationBox />
                <PopularFeed />
                <PopularFeed />
                <PopularFeed />
                <PopularFeed />
            </ScrollView>
        </View>
    );
};

export default HomeScreen;
