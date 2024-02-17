import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Poppins, Raleway } from '../../../constants/FontName';
import { User } from '../../../model/User';
import { BMICalculator } from '../../../utils/BMICalculator';
import { MainColors } from '../../../utils/Colors';

type ProfileDetailProp = {
    user: User
}

const ProfileDetail = (prop: ProfileDetailProp) => {
    return (
        <View style={styles.detailContainer}>
            <View style={styles.bmiRow}>
                <View >
                    <Text style={styles.bmiTitle}>Chỉ số BMI</Text>
                    <Text style={styles.bmiSubtitle}>Tính toán thể trạng sức khỏe</Text>
                </View>
                <Text style={styles.bmiBox}>{BMICalculator(prop.user.weight, prop.user.height)}</Text>
            </View>
        </View>
    )
}

export default ProfileDetail

const styles = StyleSheet.create({
    detailContainer: {
        marginVertical: 16,
        paddingVertical: 12,
        paddingHorizontal: 16,
        elevation: 10,
        borderRadius: 6,
        shadowOpacity: 0.5,
        backgroundColor: MainColors[100],
    },
    bmiRow: {
        marginVertical: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    bmiTitle: {
        fontFamily: Raleway.bold,
        fontSize: 18,
        color: MainColors[0]
    },
    bmiSubtitle: {
        fontFamily: Raleway.medium,
        fontSize: 12,
        color: MainColors[25]
    },
    bmiBox: {
        backgroundColor: MainColors[0],
        color: MainColors[100],
        paddingVertical: 8,
        paddingHorizontal: 18,
        borderRadius: 6,
        fontFamily: Poppins.medium,
        fontSize: 16,
        includeFontPadding: false,
        textAlignVertical: 'center'
    }
})