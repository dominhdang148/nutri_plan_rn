import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import LeftArrowSvg from '../../../assets/images/arrow-left.svg'
import GlobalStyling from '../../components/GlobalStyling'
import Logo from '../../components/Logo'
import { MainColors } from '../../utils/Colors'
import BMIForm from './components/BMIForm'

const RegisterScreen: React.FC = () => {
    const navigation = useNavigation<StackNavigationProp<any>>();
    return (
        <View style={GlobalStyling.screen}>

            {/* Back button section */}
            <TouchableOpacity
                style={styles.backButtonContainer}
                onPress={() => navigation.pop()}
            >
                <LeftArrowSvg width={24} height={24} fill={MainColors[25]} />
            </TouchableOpacity>

            {/* Logo section */}
            <View style={styles.logoContainer}>
                <Logo />
            </View>

            {/* BMI-Form section */}
            <BMIForm />

        </View>
    )
}

export default RegisterScreen

const styles = StyleSheet.create({
    backButtonContainer: {
        marginVertical: 24
    },
    logoContainer: {
        alignItems: 'center',
        marginVertical: 24,
    }
})