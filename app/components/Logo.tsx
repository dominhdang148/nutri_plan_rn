import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { Raleway } from '../constants/FontName'
import { MainColors } from '../utils/Colors'

const Logo: React.FC = () => {
    return (
        <View style={styles.logoContainer}>
            <Image style={styles.logoIcon} source={require('../../assets/images/logo_ball.png')} />
            <Text style={styles.title}>Nutriplan</Text>
            <Text style={styles.subTitle}>Ăn ngon - Sống khỏe - Cân bằng</Text>
        </View>
    )
}

export default Logo

const styles = StyleSheet.create({
    logoContainer: {
        alignItems: 'center'
    },
    logoIcon: {
        position: 'absolute',
        right: 12,
    },
    title: {
        fontFamily: Raleway.bold,
        fontSize: 36,
        color: MainColors[0]
    },
    subTitle: {
        fontFamily: Raleway.medium,
        fontSize: 16,
        color: MainColors[25]
    }
})