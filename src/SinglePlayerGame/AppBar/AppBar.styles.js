import { StyleSheet } from 'react-native';
import { padding } from '../../common/utils/constants';
import { scaleResponsively } from '../../common/utils/scaling';

export default StyleSheet.create({
    app_bar_container : {
        flexDirection : 'row',
        padding : scaleResponsively(padding.sm),
        justifyContent : 'space-between'
    },
    app_bar_icons : {
        paddingVertical : scaleResponsively(padding.sm),
        paddingLeft : scaleResponsively(padding.sm)
    },
    right_top_container : {
        flexDirection : 'row',
        paddingRight : scaleResponsively(padding.sm),
        alignItems: 'center'
    }
})