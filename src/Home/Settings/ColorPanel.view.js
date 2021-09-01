import * as React from 'react';
import { View } from 'react-native';

import ColorCircle from './ColorCircle.view';
import { themes } from '../../common/utils/constants';

const ColorPanel = ({onChooseColor}) => {
    return (
        <View style={{ flexDirection: 'row' }}>
            {
                themes.map((color, index) => {
                    return (
                        <ColorCircle key={index} color={color} onChooseColor={onChooseColor} />
                    )
                })
            }
        </View>
    );
}

export default ColorPanel;