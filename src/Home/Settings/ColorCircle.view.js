import * as React from 'react';
import { View, TouchableOpacity } from 'react-native';

import Icon from '../../common/Icon/Icon.view';
import styles from './Settings.styles';
import { scaleResponsively } from '../../common/utils/scaling';

const ColorCircle = props => {
    const {
        color,
        onChooseColor,
        currentColorName
    } = props;

    return (
        <TouchableOpacity onPress={() => onChooseColor(color)}>
            <View style={{ ...styles.colorCircle, backgroundColor: color.primary, borderColor: color.accent }}>
                {
                    currentColorName === color.name && (
                        <Icon
                            name={"tick"}
                            size={scaleResponsively(15)}
                            color={color.accent}
                        />
                    )
                }
            </View>
        </TouchableOpacity>
    )
}

export default ColorCircle;