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
})