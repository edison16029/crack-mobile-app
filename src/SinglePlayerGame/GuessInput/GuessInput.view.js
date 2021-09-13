import React, {useState} from 'react'
import {TextInput, View, StyleSheet, TouchableOpacity} from 'react-native'

import { dimensions } from '../../common/utils/constants';
import KeyboardView from './Keyboard/Keyboard.view';

import styles from './GuessInput.styles';

const GuessInputView = (props) =>  {
    const { color } = props;
    const [keyboardInput, setKeyboardInput] = useState("");

    const isGuessButtonDisabled = keyboardInput.length < 4 ? true : false
    
    /* Styles */
    const guessButtonColour = isGuessButtonDisabled ? color.primary : color.accent
    const textInput = StyleSheet.flatten({
        ...styles.textInput,
        backgroundColor : color.primaryDark, 
        color : color.accent
    }); 
    const guessButton = StyleSheet.flatten({
        ...styles.guessButton,
        backgroundColor : color.primaryDark,
        borderColor : isGuessButtonDisabled ? color.primary: color.accent,
        elevation : isGuessButtonDisabled ? 0 : 5
    });
    const guessButtonIcon = {color : guessButtonColour}
    const iconSize = dimensions.fullWidth * 0.07
    /* Styles end */

    const handleKeyPress = (key) => {
        console.log(" [GuessInputComponent.js -> handleKeyPress] " + "Key : ",key )
        // SoundAndVibrate.play('keyPress', theme.sound)
        setKeyboardInput(keyboardInput + key)
    }

    const handleBackspacePress = () => {
        console.log(" [GuessInputComponent.js -> handleBackspacePress] " + "Key : ",key )
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
                    placeholderTextColor = {'red'} />

                <TouchableOpacity
                    style = {guessButton} 
                    // onPress = {() => { setKeyboardInput(""), handleGuessButtonPress(keyboardInput)}} 
                    disabled = {isGuessButtonDisabled}>
                    {/* <Icon style = {guessButtonIcon} size = {iconSize} name = "arrow-up" type = "font-awesome"/> */}
                </TouchableOpacity>
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