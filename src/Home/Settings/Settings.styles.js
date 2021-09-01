import { StyleSheet } from 'react-native';
import { defaultColors, margin, borderRadius, padding } from '../../common/utils/constants';

export default StyleSheet.create({
    containerStyle: {
        flex : 1,
        justifyContent:'space-between',
        width : "100%",
    },
    closeButtonContainerStyle: {
        flex : 0.1,
        marginTop : (-1 * margin.lg)  + margin.sm,
        marginRight : (-1 * margin.lg)  + margin.sm,
        alignItems : "flex-end"
    },
    rowContainerStyle: {
        flex : 0.33,
        justifyContent : 'center',
        width : "100%",
    },
    rowStyle: {
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems : 'center',
        padding : padding.sm,
        borderWidth : 1,
        borderColor : defaultColors.accent,
        borderRadius : borderRadius.radiusLg,
    },
    textStyle: {
        color : defaultColors.accent
    },

    //color circle styles
    colorCircle: {
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: defaultColors.accent,
        borderWidth: 1,
        borderRadius: 15,
        marginHorizontal: 2,
    }
});