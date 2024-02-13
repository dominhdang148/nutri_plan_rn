import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import MainColors from '../../../utils/colors/MainColors'
import SubColors from '../../../utils/colors/SubColors'
import { Poppins, Raleway } from '../../../utils/constants/FontName'

export default function WaterBox() {
    return (
        <View style={styles.boxContainer}>
            <View style={styles.textContainer}>
                <Text style={styles.boxTitle}>Uống nước</Text>
                <Text style={styles.boxData}>1,5 Lit</Text>
                <Text style={styles.boxSubtitle}>1 giọt nước = 250ml </Text>
            </View>
            <View>
                <Text>Water Session</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    boxContainer: {
        marginVertical: 8,
        borderWidth: 1,
        borderColor: MainColors[50],
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    textContainer: {
        marginTop: 8,
        marginBottom: 15,
        marginLeft: 12,
    },
    iconContainer: {

    },
    boxTitle: {
        fontFamily: Raleway.semibold,
        fontSize: 14,
        color: SubColors.brown,
        marginBottom: 16.23,
    },
    boxData: {
        fontFamily: Poppins.semibold,
        fontSize: 24,
        color: SubColors.blue,
        includeFontPadding: false,

    },
    boxSubtitle: {
        fontFamily: Raleway.regular,
        fontSize: 12,
        color: MainColors[25]
    }
})