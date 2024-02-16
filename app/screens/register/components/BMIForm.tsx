import React from 'react'
import { StyleSheet, View } from 'react-native'
import { MainColors } from '../../../utils/Colors'
import FormBody from './FormBody'
import FormTitle from './FormTitle'

const BMIForm = () => {
    return (
        <View style={styles.formContainer}>
            <FormTitle />
            <FormBody />
        </View>
    )
}

export default BMIForm

const styles = StyleSheet.create({
    formContainer: {
        marginTop: 48,
        paddingLeft: 12,
        paddingRight: 20,
        paddingTop: 32,
        paddingBottom: 32,
        backgroundColor: MainColors[100],
        elevation: 5,
        borderRadius: 6,
        shadowOpacity: 0.5,
        shadowRadius: 10,
        shadowOffset: { width: 6, height: 0 }
    }
})