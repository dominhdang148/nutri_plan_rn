import React from 'react'
import { View } from 'react-native'
import GlobalStyling from '../../components/GlobalStyling'
import AvatarSection from './components/AvatarSection'

export default function ProfileScreen() {
    return (
        <View style={GlobalStyling.screen}>
            <AvatarSection />
        </View>
    )
}
