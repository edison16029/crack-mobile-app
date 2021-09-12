import * as React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import styles from './Button.styles';

const Button = (props) => {
    const { 
        color,
        containerStyle,
        onButtonPress } = props;
    return (
        <TouchableOpacity
          onPress = {onButtonPress}
          style={{...styles.play_button_container, ...containerStyle, backgroundColor : color.primaryDark}}>
            <Text style={{ ...styles.button_text, color : color.accent}}>{"PLAY"}</Text>
        </TouchableOpacity>
    );
}

export default Button;