import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Poppins, Raleway } from '../../../constants/FontName'
import { MainColors, SubColors } from '../../../utils/Colors'

const ExerciseBox: React.FC = () => {
    return (
        <View style={styles.boxContainer}>
            <Text style={styles.boxTitle}>Tập luyện</Text>
            <Text style={styles.boxData}>5</Text>
            <Text style={styles.boxSubTitle}>Bài tập/ngày</Text>
        </View>
    )
}

export default ExerciseBox;

const styles = StyleSheet.create({
    boxContainer: {
        borderWidth: 1,
        borderColor: MainColors[50],
        marginVertical: 8,
        marginLeft: 8,
        paddingTop: 8,
        borderRadius: 8,
        flex: 2,
        paddingBottom: 16,
        paddingLeft: 12
    },
    boxTitle: {
        fontFamily: Raleway.semibold,
        color: SubColors.brown,
        fontSize: 14,
        paddingBottom: 22,
    },
    boxData: {
        color: SubColors.pink,
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