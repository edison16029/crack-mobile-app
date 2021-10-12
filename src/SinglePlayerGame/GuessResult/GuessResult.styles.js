import { StyleSheet } from 'react-native';
import { fonts, padding, borderRadius, margin } from '../../common/utils/constants';
import { scaleResponsively } from '../../common/utils/scaling';

export default StyleSheet.create({
    cardContainer : {
        height: '100%',
        flex : 2,
        flexDirection : 'row',
        justifyContent : 'center',
        alignItems : 'center',
        marginTop : padding.md,
        marginHorizontal : padding.xl,
        borderRadius : borderRadius.radiusLg,
        elevation : 5,    
    },
    font : {
        fontSize : fonts.lg,
        flex : 1,
        textAlign : 'right',
        marginRight : margin.lg,
        textTransform : 'uppercase'
    },

    outerResultContainer: {
        flex : 1,
        alignItems : 'flex-start',
        justifyContent : 'space-around'
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