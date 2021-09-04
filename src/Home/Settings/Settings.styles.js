import { StyleSheet } from 'react-native';
import { defaultColors, margin, borderRadius, padding } from '../../common/utils/constants';
import { scaleResponsively } from '../../common/utils/scaling';

export default StyleSheet.create({
    containerStyle: {
        flex : 1,
        justifyContent:'space-between',
        width : "100%",
    },
    closeButtonContainerStyle: {
        //Negative Margins to push the button further top
        marginTop : scaleResponsively(margin.sm - margin.lg),
        marginRight : scaleResponsively(margin.sm - margin.lg),
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
        padding : scaleResponsively(padding.sm),
        borderWidth : 1,
        borderColor : defaultColors.accent,
        borderRadius : scaleResponsively(borderRadius.radiusLg),
    },
    textStyle: {
        color : defaultColors.accent,
        paddingLeft: scaleResponsively(5)
    },

    //color circle styles
    colorCircle: {
        width: scaleResponsively(30),
        height: scaleResponsively(30),
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: defaultColors.accent,
        borderWidth: scaleResponsively(1),
        borderRadius: scaleResponsively(15),
        marginHorizontal: scaleResponsively(2),
    },

    //color panel styles
    colorPanelContainer: {
        flexDirection: 'row'
    }
});