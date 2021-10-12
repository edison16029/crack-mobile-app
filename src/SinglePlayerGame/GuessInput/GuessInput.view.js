import React, {useState} from 'react'
import {TextInput, View, StyleSheet, TouchableOpacity} from 'react-native'

import Icon from '../../common/Icon/Icon.view';
import { dimensions } from '../../common/utils/constants';
import { scaleResponsively } from '../../common/utils/scaling';
import KeyboardView from './Keyboard/Keyboard.view';

import styles from './GuessInput.styles';

const GuessInputView = (props) =>  {
    const { color } = props;
    const [keyboardInput, setKeyboardInput] = useState("");

    const isGuessButtonDisabled = keyboardInput.length < 4 ? true : false;
    
    /* Styles */
    const guessButtonColour = isGuessButtonDisabled ? color.primary : color.accent
    const textInput = StyleSheet.flatten({
        ...styles.textInput,
        backgroundColor : color.primaryDark, 
        color : color.accent
    }); 
    const uparrowContainer = StyleSheet.flatten({
        ...styles.uparrowContainer,
        backgroundColor : color.primaryDark,
        borderColor : isGuessButtonDisabled ? color.primary: color.accent,
        elevation : isGuessButtonDisabled ? 0 : 5
    });
    /* Styles end */

    const handleKeyPress = (key) => {
        console.log(" [GuessInputComponent.js -> handleKeyPress] " + "Key : ",key )
        // SoundAndVibrate.play('keyPress', theme.sound)
        setKeyboardInput(keyboardInput + key)
    }

    const handleBackspacePress = () => {
        console.log(" [GuessInputComponent.js -> handleBackspacePress] ")
        // SoundAndVibrate.play('keyPress', theme.sound)
        setKeyboardInput(keyboardInput.slice(0,-1))
    }

    return (
        <View style = {styles.container} >
            <View style = {styles.rowContainer}>
                <TextInput 
                    value={keyboardInput}
                    style = {textInput}
                    maxLength = {4}
                    editable = {false}
                    placeholder = ". . . ."
                    autoCapitalize = {'characters'}
                    placeholderTextColor = {color.accent} />
                    
                    <View style={uparrowContainer}>
                        <Icon
                            name={"uparrow"}
                            size={scaleResponsively(20)}
                            color={isGuessButtonDisabled ? color.primary : color.accent}
                            onPress = { () => {} }
                        />
                    </View>
            </View>
            <KeyboardView 
                color = {color}
                input = {keyboardInput}
                onKeyPress = {handleKeyPress}
                onBackspacePress = {handleBackspacePress}/>
        </View>
    );
}

export default GuessInputView;