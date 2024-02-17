import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import React, { useEffect } from 'react'
import { StyleSheet, View } from 'react-native'
import Logo from '../../components/Logo'
import { getUser } from '../../services/LocalStorage'

const SplashScreen: React.FC = () => {
    const navigation = useNavigation<StackNavigationProp<any>>();
    useEffect(() => {
        checkUserExist()
    }, [])

    const checkUserExist = async (): Promise<void> => {
        const user = await getUser();
        if (user) {
            navigation.replace('main')
        } else {
            navigation.replace('getinfo')
        }
    }

    return (
        <View style={styles.splashContainer}>
            <Logo />
        </View>
    )
}

export default SplashScreen

const styles = StyleSheet.create({
    splashContainer: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center'
    }
})