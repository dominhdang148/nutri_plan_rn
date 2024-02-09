import { View, Text } from 'react-native'
import React from 'react'
import TabNavigation from './TabNavigation'
import { NavigationContainer } from '@react-navigation/native'

export default function RootNavigation() {
    return (
        <NavigationContainer>
            <TabNavigation />
        </NavigationContainer>
    )
}