import * as React from 'react';
import { View } from 'react-native';

import ColorCircle from './ColorCircle.view';
import styles from './Settings.styles';
import { themes } from '../../common/utils/constants';

const ColorPanel = ({ onChooseColor, currentColorName }) => {
    return (
        <View style={styles.colorPanelContainer}>
            {
                themes.map((color, index) => {
                    return (
                        <ColorCircle
                            key={index}
                            color={color}
                            onChooseColor={onChooseColor}
                            currentColorName={currentColorName} />
                    )
                })
            }
        </View>
    );
}

export default ColorPanel;