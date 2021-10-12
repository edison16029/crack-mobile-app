import { StyleSheet } from 'react-native';
import { padding, margin, dimensions, fonts, defaultColors } from '../../../common/utils/constants';
import { scaleResponsively } from '../../../common/utils/scaling';

export default StyleSheet.create({
    container : {
        flex : 3,
        padding : padding.md,
    },
    row_container : {
        flex : 1, //Must be 1/3 of container
        justifyContent : 'center',
        alignItems : 'center'
    },
    button_container  : {
        backgroundColor : defaultColors.primaryDark,
        borderRadius : scaleResponsively(20),
        borderWidth : scaleResponsively(0.5),
        alignItems : 'center',
        justifyContent : 'center',
        width : ((dimensions.fullWidth-(2* padding.md)) * 0.10) - (2 * margin.sm * 0.5),
        height : "85%",
        marginBottom : scaleResponsively(margin.sm),
        paddingHorizontal : scaleResponsively(padding.sm * 0.5),
        marginHorizontal : scaleResponsively(margin.sm * 0.5),
        elevation : scaleResponsively(4)
    },
    button_text : {
        color : defaultColors.accent,
        fontSize : scaleResponsively(dimensions.fullWidth * 0.40 * 0.14),
        fontFamily : fonts.primary
    },
    backspace_button_container : {
        alignItems : 'center',
        justifyContent : 'center',
        height : "85%",
        marginHorizontal : scaleResponsively(margin.sm * 0.5),
    },
    backspace_button : {
        paddingVertical : scaleResponsively(padding.md * 0.8),
        paddingHorizontal : scaleResponsively(padding.sm * 0.5),
        marginHorizontal : scaleResponsively(margin.sm * 0.5),
    }
});