import { StyleSheet } from 'react-native';
import { defaultColors } from '../utils/constants'
import { scaleResponsively } from '../utils/scaling';

export default StyleSheet.create({
    play_button_container  : {
        backgroundColor : defaultColors.primaryDark,
        borderRadius : scaleResponsively(20),
        alignItems : 'center',
        justifyContent : 'center',
        elevation : scaleResponsively(10)
    },
    button_text : {
        color : defaultColors.accent,
        fontSize : scaleResponsively(20),
    },
})