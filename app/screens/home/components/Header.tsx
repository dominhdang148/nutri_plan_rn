import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import SearchSvg from '../../../../assets/images/search.svg';
import { Raleway } from '../../../constants/FontName';
import { MainColors } from '../../../utils/Colors';


export default function Header() {
    const [val, setVal] = useState();
    return (
        <View>
            {/* Title Section */}
            <View style={styles.headerContainer}>
                <Text style={styles.headerStyle}>Nutriplan</Text>
            </View>

            {/* SearchBar Section */}
            <View style={styles.searchBarContainer}>
                <TextInput
                    style={styles.searchBarStyle}
                    placeholder='Tìm kiếm'
                    placeholderTextColor={MainColors[25]}
                />
                <SearchSvg width={24} height={24} fill={MainColors[25]} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        marginVertical: 50
    },

    headerStyle: {
        fontFamily: Raleway.medium,
        fontSize: 32,
    },

    searchBarContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 12,
        borderWidth: 1,
        borderColor: MainColors[50],
        paddingVertical: 10,
        paddingLeft: 12,
        paddingRight: 14,
        borderRadius: 8
    },
    searchBarStyle: {
        width: '90%',
        fontSize: 15,
        lineHeight: 20,
    }
})