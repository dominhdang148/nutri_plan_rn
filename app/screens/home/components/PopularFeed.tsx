import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Raleway } from '../../../constants/FontName'

export default function PopularFeed() {
    return (
        <View style={styles.container}>
            {/* Heading session */}
            <Text style={styles.heading}>Nổi bật</Text>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 42
    },
    heading: {
        fontFamily: Raleway.bold,
        fontSize: 20
    }
})