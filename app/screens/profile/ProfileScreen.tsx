import React from 'react'
import { StyleSheet, View } from 'react-native'
import GlobalStyling from '../../components/GlobalStyling'
import AvatarSection from './components/AvatarSection'

const ProfileScreen: React.FC = () => {
    return (
        <View style={GlobalStyling.screen}>
            <AvatarSection />
        </View>
    )
}

export default ProfileScreen

const styles = StyleSheet.create({})