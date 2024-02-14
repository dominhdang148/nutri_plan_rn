import { AntDesign } from '@expo/vector-icons'
import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import WaterDropSvg from '../../../../assets/images/water_drop.svg'
import { Poppins, Raleway } from '../../../constants/FontName'
import { MainColors, SubColors } from '../../../utils/Colors'
import { waterDrops } from '../../../utils/Water'

export default function WaterBox() {
    const [drinkTime, setDrinkTime] = useState(0);

    return (
        <View style={styles.boxContainer}>
            <View style={styles.textContainer}>
                <Text style={styles.boxTitle}>Đã uống</Text>
                <Text style={styles.boxData}>{drinkTime < 1000 ? drinkTime : drinkTime / 1000} {drinkTime < 1000 ? "ml" : "L"} </Text>
                <Text style={styles.boxSubtitle}>1 giọt nước = 250ml </Text>
            </View>
            <View style={styles.waterCounterContainer}>

                {/* Water Icon session */}
                <View style={styles.iconContainer}>
                    {
                        waterDrops.map(value => (
                            <WaterDropSvg width={26} height={26} key={String(value)} fill={drinkTime < value ? MainColors[50] : SubColors.blue} />
                        ))
                    }
                </View>

                {/* Button Session */}
                <View style={styles.buttonContainer}>
                    <TouchableOpacity onPress={() => { setDrinkTime(drinkTime - 250) }} disabled={drinkTime == 0}>
                        <AntDesign name="minus" size={24} color={drinkTime == 0 ? MainColors[50] : SubColors.blue} style={{ paddingHorizontal: 8 }} />
                    </TouchableOpacity>
                    <WaterDropSvg width={24} height={26} fill={SubColors.blue} />
                    <TouchableOpacity onPress={() => { setDrinkTime(drinkTime + 250) }} disabled={drinkTime == 1500}>
                        <AntDesign name="plus" size={24} color={drinkTime == 1500 ? MainColors[50] : SubColors.blue} style={{ paddingHorizontal: 8 }} />
                    </TouchableOpacity>
                </View>
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
    waterCounterContainer: {
        flex: 2,
        marginLeft: 16,
        marginRight: 16,
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
        flexDirection: 'row',
    },
    buttonContainer: {
        marginVertical: 8,
        flexDirection: 'row',
        justifyContent: 'center',
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