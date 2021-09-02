import { StyleSheet } from 'react-native';
import { defaultColors, dimensions, padding } from '../common/utils/constants';
import { scaleResponsively } from '../common/utils/scaling';

export default StyleSheet.create({
    container: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: defaultColors.primary
    },
    card_container : {
        backgroundColor : defaultColors.primaryDark,
        borderRadius : scaleResponsively(20),
        borderWidth : 0,
        alignItems : 'center',
        justifyContent : 'center',
        alignSelf: 'center',
        width : '80%',
        height : dimensions.fullWidth * 0.80, //Height should be same as width to get a square card
        marginVertical : scaleResponsively(padding.lg),
        paddingVertical : scaleResponsively(padding.lg),
        paddingHorizontal : scaleResponsively(padding.lg),
        elevation : scaleResponsively(10)
    }
})