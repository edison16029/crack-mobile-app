import * as React from 'react';
import { View, TouchableOpacity } from 'react-native';

import { getIconComponent } from './Icon.utils';

const Icon = props => {
    const {
        name,
        color = '#000', //default color is black
        onPress,
        containerStyle,
        height,
        width,
        size,
        style
    } = props;

    const WrapperComponent = onPress ? TouchableOpacity : View;
    const IconComponent = getIconComponent(name);

    return (
        <View style={containerStyle}>
            <WrapperComponent activeOpacity={0.5} onPress={onPress} style={{...style}}>
                <IconComponent
                    style={{ color }}
                    width={width ? width : size}
                    height={height ? height : size}
                />
            </WrapperComponent>
        </View>
    )
}

export default Icon;