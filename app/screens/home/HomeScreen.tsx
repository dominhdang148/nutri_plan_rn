import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import Sound from '../../../assets/images/sound.svg'

export default function HomeScreen() {
    return (
        <View>
            <Text>HomeScreen</Text>
            <Sound width={50} height={50} />
        </View>
    )
}

