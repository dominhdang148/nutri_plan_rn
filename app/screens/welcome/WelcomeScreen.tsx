import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import ArrowSvg from '../../../assets/images/arrow-right.svg';
import GlobalStyling from '../../components/GlobalStyling';
import Logo from '../../components/Logo';
import { Raleway } from '../../constants/FontName';
import { MainColors } from '../../utils/Colors';

const WelcomeScreen: React.FC = () => {

    const navigation = useNavigation<StackNavigationProp<any>>()

    return (
        <View style={GlobalStyling.screen}>
            {/* Logo section */}
            <View style={styles.logoContainer}>
                <Logo />
            </View>

            {/* Image section */}
            <View style={styles.imageContainer}>
                <Image source={require('../../../assets/images/welcome.png')} />
            </View>

            {/* Button section */}
            <TouchableOpacity
                style={styles.buttonContainer}
                onPress={() => navigation.push('register')}
            >
                <Text style={styles.textButton}>
                    Khám phá ngay
                </Text>
                <ArrowSvg width={24} height={24} fill={MainColors[25]} />
            </TouchableOpacity>
        </View>
    )
}

export default WelcomeScreen

const styles = StyleSheet.create({
    logoContainer: {
        alignItems: 'center',
        marginVertical: 62,
    },
    imageContainer: {
        marginVertical: 40,
    },
    buttonContainer: {
        marginVertical: 12,
        flexDirection: 'row',
        gap: 12,
        justifyContent: 'center',
    },
    textButton: {
        fontFamily: Raleway.medium,
        fontSize: 16,
        color: MainColors[25]
    }
})