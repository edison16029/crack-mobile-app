import { StyleSheet } from 'react-native';
import { defaultColors, dimensions, padding } from '../common/utils/constants';

export default StyleSheet.create({
    container: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: defaultColors.primary
    },
    card_container : {
        backgroundColor : defaultColors.primaryDark,
        borderRadius : 20,
        borderWidth : 0,
        alignItems : 'center',
        justifyContent : 'center',
        alignSelf: 'center',
        width : '80%',
        height : dimensions.fullWidth * 0.80,
        marginVertical : padding.lg,
        paddingVertical : padding.lg,
        paddingHorizontal : padding.lg,
        elevation : 10
    }
})