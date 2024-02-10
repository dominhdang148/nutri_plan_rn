import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Header() {
    return (
        <View style={styles.headerContainer}>
            <Text>Header</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        marginVertical: 50
    }
})