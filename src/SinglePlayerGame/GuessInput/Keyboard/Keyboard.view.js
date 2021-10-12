import * as React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

import styles from './Keyboard.styles';
import { dimensions } from '../../../common/utils/constants';

const KeyboardView = (props) => {
    const { color } = props;
    const renderLetter = ({item}) => {
        var disabled = props.input.includes(item) || props.input.length >= 4
        var disabledStyle = props.input.includes(item)
        if(item !== '0') {
            return (
                <TouchableOpacity
                    disabled = {disabled}
                    onPress = { () =>  props.onKeyPress(item) }    
                    style={{ ...styles.button_container, backgroundColor : color.primaryDark, borderColor : disabledStyle ? color.primary : color.accent, elevation : disabledStyle ? 0 : 4 }}>
                    <Text style={{ ...styles.button_text, color : disabledStyle ? color.primary : color.accent}}>{item}</Text>
                </TouchableOpacity>
            )
        } else {
            const iconSize = dimensions.fullWidth * 0.07
            return (
                <TouchableOpacity 
                    onPress = { () => props.onBackspacePress() }
                    disabled = {props.input.length === 0}>
                    {/* <Icon color={color.primaryDark} name="backspace" 
                    type="font-awesome" size={iconSize} style={styles.backspace_button} /> */}
                </TouchableOpacity>     
            )
        }
    }


    const row1 = ['Q','W','E','R','T','Y','U','I','O','P']
    const row2 = ['A','S','D','F','G','H','J','K','L']
    const row3 = ['Z','X','C','V','B','N','M','0']
    // const row1 = ['Q']
    return(
        <View style={styles.container}>
            <View style={styles.row_container}>
                <FlatList
                    horizontal = {true}
                    data = {row1}
                    keyExtractor = { (item) => item}
                    renderItem = {renderLetter}
                    />
            </View>
            <View style={styles.row_container}>
                <FlatList
                    horizontal = {true}
                    data = {row2}
                    keyExtractor = { (item) => item}
                    renderItem = {renderLetter}
                    />
            </View>
            <View style={styles.row_container}>
                <FlatList
                    horizontal = {true}
                    data = {row3}
                    keyExtractor = { (item) => item}
                    renderItem = {renderLetter}
                    />
            </View>
        </View>
    )
}

export default KeyboardView;