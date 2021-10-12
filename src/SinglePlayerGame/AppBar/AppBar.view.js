import * as React from 'react';
import { View } from 'react-native';

import Icon from '../../common/Icon/Icon.view';
import styles from './AppBar.styles';
import { scaleResponsively } from '../../common/utils/scaling';

const AppBar = (props) => {
    const {
        color
    } = props;
    return (
        <View style={{...styles.app_bar_container, backgroundColor: color.primary}}>
            <Icon
                name={"close"}
                size={scaleResponsively(32)}
                color={color.accent}
                style={styles.app_bar_icons}
                onPress={() => {}}
            />
            <View style={styles.right_top_container}>
                <Icon
                    name={"question_mark"}
                    size={scaleResponsively(32)}
                    color={color.accent}
                    style={styles.app_bar_icons}
                    onPress={() => {}}
                />
                <Icon
                    name={"flag"}
                    size={scaleResponsively(26)}
                    color={color.accent}
                    style={styles.app_bar_icons}
                    onPress={() => {}}
                />
            </View>
            
        </View>
    )
}

export default AppBar;