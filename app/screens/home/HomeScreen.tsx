import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import Sound from '../../../assets/images/sound.svg'

export default function HomeScreen() {
    useEffect(() => {
        console.log('hello');
    })
    return (
        <View>
            <Text>HomeScreen</Text>
            <Sound width={30} height={30} />
        </View>
    )
}


