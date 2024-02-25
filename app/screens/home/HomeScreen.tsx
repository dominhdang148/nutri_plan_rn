import React, { useRef, useState } from 'react';
import { NativeScrollEvent, NativeSyntheticEvent, ScrollView, View } from 'react-native';
import GlobalStyling from '../../components/GlobalStyling';
import Header from './components/Header';
import InfomationBox from './components/InfomationBox';
import PopularFeed from './components/PopularFeed';

const HomeScreen: React.FC = () => {
    const scrollViewRef = useRef<ScrollView>(null);
    const [prevScrollPos, setPrevScrollPos] = useState(0);

    const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const currentScrollPos = event.nativeEvent.contentOffset.y;
    
    if (currentScrollPos > prevScrollPos) {
      console.log('Scrolling down');
      
    } else {
      console.log('Scrolling up');
    }
    setPrevScrollPos(currentScrollPos);
  };

    return (
        <View style={GlobalStyling.screen}>
            {/* Header Section */}
            <Header />

            <ScrollView  ref={scrollViewRef} onScroll={handleScroll} showsVerticalScrollIndicator={false}>
                {/* Infomation Seciton */}
                <InfomationBox />
                {/* Popular Feed Section*/}
                <PopularFeed />
                <PopularFeed />
                <PopularFeed />
                <PopularFeed />
            </ScrollView>
        </View>
    )
}

export default HomeScreen;


// import React from 'react'
// import { ScrollView, View } from 'react-native'
// import GlobalStyling from '../../components/GlobalStyling'
// import Header from './components/Header'
// import InfomationBox from './components/InfomationBox'
// import PopularFeed from './components/PopularFeed'

// export default class HomeScreen extends React.Component {
    
//     render() {
//         return (
//             <View style={GlobalStyling.screen}>
//                 {/* Header Section */}
//                 <Header />
//                 <ScrollView showsVerticalScrollIndicator={false}>
//                     {/* Infomation Seciton */}
//                     <InfomationBox />
//                     {/* Popular Feed Section*/}
//                     <PopularFeed />
//                     <PopularFeed />
//                     <PopularFeed />
//                     <PopularFeed />
//                     <PopularFeed />
//                 </ScrollView>
//             </View>
//         )
//     }
// }