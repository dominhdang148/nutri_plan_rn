import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Raleway } from '../../../constants/FontName'
import { MainColors } from '../../../utils/Colors'

const FormTitle: React.FC = () => {
    return (
        <View>
            <Text style={styles.title}>Chỉ số BMI</Text>
            <Text style={styles.subTitle}>Tính toàn thể trạng sức khỏe</Text>
        </View>
    )
}

export default FormTitle

const styles = StyleSheet.create({
    title: {
        fontFamily: Raleway.bold,
        fontSize: 18,
        color: MainColors[0]
    },
    subTitle: {
        fontFamily: Raleway.medium,
        fontSize: 12,
        color: MainColors[25]
    },
})