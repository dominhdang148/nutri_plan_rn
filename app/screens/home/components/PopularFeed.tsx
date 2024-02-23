import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Raleway } from '../../../constants/FontName';
import HygraphAPI from '../../../services/HygraphAPI';

const PopularFeed: React.FC = () => {
    useEffect(() => {
        getPopularFeeds();
    }, []);

    const getPopularFeeds = () => {
        HygraphAPI.getPopularFeeds().then((response) => {
            console.log(response);
        })
    }
    return (
        <View style={styles.container}>

            {/* Heading session */}
            <Text style={styles.heading}>Nổi bật</Text>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 42,
    },
    heading: {
        fontFamily: Raleway.bold,
        fontSize: 20
    }
})

export default PopularFeed;