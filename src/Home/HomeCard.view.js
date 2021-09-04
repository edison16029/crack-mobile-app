import * as React from 'react';
import { View } from 'react-native';

import SettingsScreen from './Settings/Settings.screen';
import Icon from '../common/Icon/Icon.view';
import styles from './Home.styles';
import { scaleResponsively } from '../common/utils/scaling';

const HomeCardView = (props) => {
    const {
        color,
        isShowSettings,
        toggleShowSettings
    } = props;
    console.log("IsShowSettings : ", isShowSettings);
    return (
        <View style={{ ...styles.card_container, backgroundColor: color.primaryDark }}>
            {
                isShowSettings ? (
                    <SettingsScreen
                        toggleShowSettings={toggleShowSettings} />
                ) : (
                    <Icon
                        name={"logo"}
                        size={scaleResponsively(300)}
                        color={color.accent}
                    />

                )
            }

        </View>
    )
}

export default HomeCardView;