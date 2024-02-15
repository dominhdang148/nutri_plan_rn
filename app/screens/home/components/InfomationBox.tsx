import React from 'react'
import { StyleSheet, View } from 'react-native'
import CaloriesBox from './CaloriesBox'
import ExerciseBox from './ExerciseBox'
import WaterBox from './WaterBox'

const InfomationBox: React.FC = () => {
    return (
        <View >
            {/* Upper Box */}
            <View style={styles.upperBoxContainer}>
                <CaloriesBox />
                <ExerciseBox />
            </View>
            {/* Bottom Box */}
            <WaterBox />
        </View >
    )
}

export default InfomationBox;

const styles = StyleSheet.create({

    upperBoxContainer: {
        justifyContent: 'space-between',
        flexDirection: 'row',
    }
})