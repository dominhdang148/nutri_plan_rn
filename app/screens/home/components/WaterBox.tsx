import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import WaterDropSvg from '../../../../assets/images/water_drop.svg'
import { Poppins, Raleway } from '../../../constants/FontName'
import { MainColors, SubColors } from '../../../utils/Colors'
import { waterDrops } from '../../../utils/Water'

export default function WaterBox() {
    const [drinkTime, setDrinkTime] = useState(0);

    return (
        <TouchableOpacity style={styles.boxContainer} onPress={() => { setDrinkTime(drinkTime + 250) }}>
            <View style={styles.textContainer}>
                <Text style={styles.boxTitle}>Uống nước</Text>
                <Text style={styles.boxData}>1,5 Lit</Text>
                <Text style={styles.boxSubtitle}>1 giọt nước = 250ml </Text>
            </View>
            <View style={styles.iconContainer}>
                {
                    waterDrops.map(value => (
                        <WaterDropSvg width={26} height={26} key={String(value)} fill={drinkTime < value ? MainColors[50] : SubColors.blue} />
                    ))
                }
            </View>
        </TouchableOpacity>
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
        flex: 2,
        alignItems: 'center',
        justifyContent: 'space-around',
        marginLeft: 16,
        marginRight: 16,
        flexDirection: 'row',
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