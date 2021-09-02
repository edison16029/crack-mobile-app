import * as React from 'react';
import { View } from 'react-native';

import Icon from '../../common/Icon/Icon.view';
import styles from './AppBar.styles';
import { scaleResponsively } from '../../common/utils/scaling';

const AppBar = (props) => {
    const {
        color,
        toggleShowSettings
    } = props;
    return (
        <View style={styles.app_bar_container}>
            <Icon
                name={"cog"}
                size={scaleResponsively(32)}
                color={color.accent}
                style={styles.app_bar_icons}
                onPress={toggleShowSettings}
            />
            <Icon
                name={"question_mark"}
                size={scaleResponsively(32)}
                color={color.accent}
                style={styles.app_bar_icons}
            />
        </View>
    )
}

export default AppBar;