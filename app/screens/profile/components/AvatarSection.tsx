import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { Raleway } from '../../../constants/FontName'


interface AvatarComponentProp {
    name: string | undefined
}

const AvatarSection: React.FC<AvatarComponentProp> = (prop: AvatarComponentProp) => {
    return (
        <View style={styles.avatarContainer}>
            <Image source={require('../../../../assets/images/ayaka.jpg')} style={styles.avatarImage} />
            <Text style={styles.avatarName}>{prop.name}</Text>
        </View>
    )
}

export default AvatarSection;

const styles = StyleSheet.create({
    avatarContainer: {
        width: "100%",
        marginTop: 56,
        marginBottom: 20,
        alignItems: 'center',
    },
    avatarImage: {
        width: 120,
        height: 120,
        marginBottom: 20,
        borderRadius: 100
    },
    avatarName: {
        fontFamily: Raleway.bold,
        fontSize: 20,
    }
})