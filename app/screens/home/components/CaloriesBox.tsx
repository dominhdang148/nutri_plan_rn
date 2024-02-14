import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Poppins, Raleway } from '../../../constants/FontName'
import { MainColors, SubColors } from '../../../utils/Colors'



export default function CaloriesBox() {
    return (
        <View style={styles.boxContainer}>
            <Text style={styles.boxTitle}>Dinh dưỡng</Text>
            <Text style={styles.boxData}>2000</Text>
            <Text style={styles.boxSubTitle}>Calories/ngày</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    boxContainer: {
        borderWidth: 1,
        borderColor: MainColors[50],
        marginVertical: 8,
        paddingTop: 8,
        marginRight: 8,
        borderRadius: 8,
        flex: 2,
        paddingBottom: 16,
        paddingLeft: 12,

    },
    boxTitle: {
        fontFamily: Raleway.semibold,
        color: SubColors.brown,
        fontSize: 14,
        paddingBottom: 22,
    },
    boxData: {
        color: SubColors.tan,
        fontFamily: Poppins.semibold,
        fontSize: 24,
        includeFontPadding: false,
    },
    boxSubTitle: {
        fontFamily: Raleway.regular,
        fontSize: 12,
        color: MainColors[25],
        includeFontPadding: false,
    }
})