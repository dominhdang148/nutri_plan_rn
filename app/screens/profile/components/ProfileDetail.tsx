import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import DashedLine from 'react-native-dashed-line';
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

            {/* BMI section */}
            <View style={styles.bmiRow}>
                <View >
                    <Text style={styles.bmiTitle}>Chỉ số BMI</Text>
                    <Text style={styles.bmiSubtitle}>Tính toán thể trạng sức khỏe</Text>
                </View>
                <Text style={styles.bmiBox}>{BMICalculator(prop.user.weight, prop.user.height)}</Text>
            </View>


            {/* Infomation Section */}
            <View style={styles.infomationContainer}>
                <View style={styles.fieldContainer}>
                    <Text style={styles.label}>Giới tính</Text>
                    <TextInput editable={false} value={prop.user.gender.value} style={styles.informationField} />
                </View>
                <View style={styles.fieldContainer}>
                    <Text style={styles.label}>Chiều cao</Text>
                    <TextInput editable={false} value={prop.user.height.toString() + ' cm'} style={styles.informationField} />
                </View>
                <View style={styles.fieldContainer}>
                    <Text style={styles.label}>Cân nặng</Text>
                    <TextInput editable={false} value={prop.user.weight.toString() + ' kg'} style={styles.informationField} />
                </View>
            </View>

            {/* SeparateLine */}
            {/* <View style={styles.horizontalRule}>

            </View> */}
            <DashedLine dashLength={5} dashColor={MainColors[50]} dashGap={5} style={{ marginHorizontal: -16 }} />
            {/* Status Section */}
            <View>

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
    },
    infomationContainer: {
        marginBottom: 20,
    },
    label: {
        fontFamily: Raleway.bold,
        fontSize: 14,
    },
    fieldContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 9
    },
    informationField: {
        backgroundColor: MainColors[75],
        paddingVertical: 8,
        paddingHorizontal: 12,
        color: MainColors[0],
        fontSize: 12,
        borderRadius: 6,
        width: '70%'
    }


})