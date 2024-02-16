import { Picker } from '@react-native-picker/picker'
import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { Raleway } from '../../../constants/FontName'
import { MainColors, SubColors } from '../../../utils/Colors'

const genders: object[] = [
    { label: 'Khác', value: 0 },
    { label: 'Nam', value: 1 },
    { label: 'Nữ', value: 2 },
]

const FormBody: React.FC = () => {
    const [genderValue, setGenderValue] = useState(0);

    return (
        <View style={styles.bodyContainer}>
            <View style={styles.fieldContainer}>
                <Text style={styles.label}>Tên</Text>
                <TextInput
                    placeholder='Nhập tên của bạn'
                    placeholderTextColor={MainColors[25]}
                    style={styles.formField}
                />
            </View>
            <View style={styles.fieldContainer}>
                <Text style={styles.label}>Giới tính</Text>
                <View
                    style={{
                        width: '65%',
                        backgroundColor: MainColors[75],
                        borderRadius: 8,
                    }}
                >
                    <Picker
                        selectedValue={genderValue}
                        style={styles.dropDown}
                        onValueChange={(item, index) => setGenderValue(index)}
                    >
                        <Picker.Item style={styles.dropDownItem} label='Khác' value={0} />
                        <Picker.Item style={styles.dropDownItem} label='Nam' value={1} />
                        <Picker.Item style={styles.dropDownItem} label='Nữ' value={2} />
                    </Picker>
                </View>
            </View>
            <View style={styles.fieldContainer}>
                <Text style={styles.label}>Chiều cao (cm)</Text>
                <TextInput
                    placeholder='Nhập chiều cao của bạn'
                    placeholderTextColor={MainColors[25]}
                    style={styles.formField}
                />
            </View>
            <View style={styles.fieldContainer}>
                <Text style={styles.label}>Cân nặng (kg)</Text>
                <TextInput
                    placeholder='Nhập cân nặng của bạn'
                    placeholderTextColor={MainColors[25]}
                    style={styles.formField}
                />
            </View>
            <TouchableOpacity style={styles.submitButton}>
                <Text style={styles.buttonText}>Bắt đầu</Text>
            </TouchableOpacity>
        </View>
    )
}

export default FormBody

const styles = StyleSheet.create({
    bodyContainer: {
        marginTop: 20,
    },
    fieldContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8,
    },
    dropDown: {
        width: '100%',
        paddingVertical: 8,
        paddingHorizontal: 12,
    },
    dropDownItem: {
        fontSize: 12,
    },
    label: {
        fontFamily: Raleway.bold,
        fontSize: 14,
        color: SubColors.brown,
    },
    formField: {
        backgroundColor: MainColors[75],
        fontSize: 12,
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 6,
        width: '65%',
    },
    buttonText: {
        fontFamily: Raleway.medium,
        fontSize: 14,
        color: MainColors[100]
    },
    submitButton: {
        marginTop: 12,
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 6,
        alignItems: 'center',
        backgroundColor: MainColors[0]
    }
})