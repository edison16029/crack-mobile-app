import { StyleSheet } from 'react-native';
import { fonts } from '../../common/utils/constants';
import { scaleResponsively } from '../../common/utils/scaling';

export default StyleSheet.create({
    container: {
        height: '100%',
    },  
    rowContainer : {
        flex : 1,
        flexDirection : 'row',
        justifyContent : 'center',
        alignItems : 'center',
        paddingTop : scaleResponsively(5),
    },
    textInput : {
        width : scaleResponsively(140),
        height : scaleResponsively(50),
        marginRight : scaleResponsively(15),
        textAlign : 'center',
        textAlignVertical: 'center',
        fontFamily : fonts.primary,
        fontSize : scaleResponsively(25),
        borderRadius : scaleResponsively(15),
        elevation : scaleResponsively(5),
    },
    guessButton : {
        width : scaleResponsively(45),
        height : scaleResponsively(45),
        justifyContent : 'center',
        alignItems : 'center',
        borderRadius : scaleResponsively(22),
        borderWidth : scaleResponsively(1.5),
        elevation : scaleResponsively(5),
    },
    uparrowContainer: {
        width : scaleResponsively(50),
        height : scaleResponsively(50),
        borderRadius : 50,
        justifyContent : 'center',
        alignItems : 'center',
        elevation : scaleResponsively(5),
        borderWidth: scaleResponsively(1)
    }
})