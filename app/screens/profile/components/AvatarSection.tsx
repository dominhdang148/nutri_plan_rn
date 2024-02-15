import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { Raleway } from '../../../constants/FontName'

const AvatarSection: React.FC = () => {
    return (
        <View style={styles.avatarContainer}>
            <Image source={require('../../../../assets/images/ayaka.jpg')} style={styles.avatarImage} />
            <Text style={styles.avatarName}>Đỗ Minh Đăng</Text>
        </View>
    )
}

export default AvatarSection;

const styles = StyleSheet.create({
    avatarContainer: {
        width: "100%",
        alignItems: 'center',
    },
    avatarImage: {
        width: 120,
        height: 120,
        marginTop: 56,
        marginBottom: 20,
        borderRadius: 100
    },
    avatarName: {
        fontFamily: Raleway.bold,
        fontSize: 20,
    }
})