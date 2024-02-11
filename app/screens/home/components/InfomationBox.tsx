import React from 'react'
import { View } from 'react-native'
import CaloriesBox from './CaloriesBox'
import ExerciseBox from './ExerciseBox'
import WaterBox from './WaterBox'

export default function InfomationBox() {
    return (
        <View>
            {/* Upper Box */}
            <View>
                <CaloriesBox />
                <ExerciseBox />
            </View>
            {/* Bottom Box */}
            <WaterBox />
        </View>
    )
}