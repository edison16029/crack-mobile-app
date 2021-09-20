import { StyleSheet } from 'react-native';
import { fonts, padding, borderRadius } from '../../common/utils/constants';
import { scaleResponsively } from '../../common/utils/scaling';

export default StyleSheet.create({
    container : {
        flex : 4,
    },
    guessRow : {
        flex : 1,
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems : 'center',
        marginVertical : padding.xs,
        marginHorizontal : padding.sm,
        borderRadius : borderRadius.radiusLg,
        elevation : 5,
    },
    font : {
        flex : 1,
        textAlign : 'left',
        marginLeft : padding.lg,
        fontSize : fonts.md,
        textTransform : 'uppercase'
    },

    outerResultContainer: {
        flex : 1,
        alignItems : 'flex-start',
        justifyContent : 'space-around',
        flexDirection: 'row'
    },
    resultContainer : {
        flexDirection : 'row',
        paddingVertical : padding.sm,
    },
    resultContainerFont : {
        fontSize : fonts.md,
        paddingRight : padding.md,
        textAlign : 'left',
    }
})