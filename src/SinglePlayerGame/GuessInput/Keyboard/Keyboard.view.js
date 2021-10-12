import * as React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

import Icon from '../../../common/Icon/Icon.view';
import { scaleResponsively } from '../../../common/utils/scaling';

import styles from './Keyboard.styles';

const KeyboardView = (props) => {
    const { 
        color,
        input,
        onKeyPress,
        onBackspacePress
     } = props;
    const renderLetter = ({item}) => {
        var disabled = input.includes(item) || input.length >= 4
        var disabledStyle = input.includes(item)
        if(item !== '0') {
            return (
                <TouchableOpacity
                    disabled = {disabled}
                    onPress = { () =>  onKeyPress(item) }    
                    style={{ ...styles.button_container, backgroundColor : color.primaryDark, borderColor : disabledStyle ? color.primary : color.accent, elevation : disabledStyle ? 0 : 4 }}>
                    <Text style={{ ...styles.button_text, color : disabledStyle ? color.primary : color.accent}}>{item}</Text>
                </TouchableOpacity>
            )
        } else {
            return (
                    <Icon
                        name={"backspace"}
                        size={scaleResponsively(32)}
                        color={color.primaryDark}
                        style={{ ...styles.backspace_button_container }}
                        onPress={onBackspacePress}
                    />
            )
        }
    }

    const row1 = ['Q','W','E','R','T','Y','U','I','O','P']
    const row2 = ['A','S','D','F','G','H','J','K','L']
    const row3 = ['Z','X','C','V','B','N','M','0']

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