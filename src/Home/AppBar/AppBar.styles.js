import { StyleSheet } from 'react-native';
import { padding } from '../../common/utils/constants';
import { scaleResponsively } from '../../common/utils/scaling';

export default StyleSheet.create({
    app_bar_container : {
        flexDirection : 'row-reverse',
        alignItems : 'flex-start',
        padding : scaleResponsively(padding.sm),
        width : "100%",
    },
    app_bar_icons : {
        paddingVertical : scaleResponsively(padding.sm),
        paddingRight : scaleResponsively(padding.sm)
    },
})