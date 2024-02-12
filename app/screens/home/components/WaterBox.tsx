import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function WaterBox() {
    return (
        <View style={styles.boxContainer}>
            <View>
                <Text>WaterBox</Text>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    boxContainer: {
        borderWidth: 1,
    }
})