import * as React from 'react';
import { View, TouchableOpacity } from 'react-native';

import styles from './Settings.styles';
const ColorCircle = props => {
    const {
        color,
        onChooseColor
    } = props;
    return (
        <TouchableOpacity onPress={() => onChooseColor(color)}>
            <View style={{...styles.colorCircle, backgroundColor: color.primary, borderColor: color.accent}}>
                {/* {setIcon(colors)} */}
            </View>
        </TouchableOpacity>
    )
}

export default ColorCircle;

    // const setIcon = (colors) => {
    //     if(theme.colors.primary === colors.primary){
    //         return(
    //             <Icon color={colors.accent} name="check" 
    //                 type="font-awesome" size={15}
    //             />
    //         )
    //     }
    //     else{
    //         return(
    //             <></>
    //         )
    //     }
    // }
