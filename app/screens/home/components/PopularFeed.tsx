import React, { useEffect, useState } from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import { Raleway } from '../../../constants/FontName';
import HygraphAPI from '../../../services/HygraphAPI';
import { MainColors } from '../../../utils/Colors';

const PopularFeed: React.FC = () => {
    const [feeds, setFeeds] = useState<PopularFeed[]>();
    useEffect(() => {
        getPopularFeeds();
    }, []);

    const getPopularFeeds = () => {
        HygraphAPI.getPopularFeeds().then(feedList => {
            if (feedList !== null) {
                setFeeds(feedList);
            } else {
                console.log("Cannot load Popular Feed for some reasons")
            }
        }).catch(error => {
            console.log(error);
        });
    }
    return (
        <View style={styles.container}>

            {/* Heading session */}
            <Text style={styles.heading}>Nổi bật</Text>

            {/* Slider */}
            <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={feeds}
                renderItem={({ item, index }) => (
                    <View style={styles.feedBox}>
                        <Image style={styles.feedImage} source={{ uri: item?.image?.url }} />
                        <View style={styles.titleBox}>
                            <Text style={styles.title}> {item.title} </Text>
                        </View>
                    </View>
                )}
            />
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
    },
    feedBox: {
        width: 312,
        height: 248,
        backgroundColor: MainColors[75],
        marginTop: 16,
        marginRight: 16,
        borderRadius: 8,
    },
    feedImage: {
        width: '100%',
        height: 184,
        borderRadius: 8
    },
    titleBox: {
        height: 64,
        margin: 8
    },
    title: {
        fontFamily: Raleway.medium,
        fontSize: 16

    }

})

export default PopularFeed;