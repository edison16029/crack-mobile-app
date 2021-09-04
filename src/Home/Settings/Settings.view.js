import * as React from 'react';
import { Text, View, Switch } from 'react-native';

import ColorPanel from './ColorPanel.view';
import Icon from '../../common/Icon/Icon.view';
import styles from './Settings.styles';
import { scaleResponsively } from '../../common/utils/scaling';

const SettingsView = (props) => {
    const {
        soundValue,
        vibrateValue,
        color,
        toggleSound,
        toggleVibrate,
        onChooseColor,
        onClosePress
    } = props;

    const switchColors = {
        true: '#41C300',
        false: '#d3d3d3',
        thumbColor: '#ffffff'
    }
    return (
        <View style={styles.containerStyle}>
            <View style={styles.closeButtonContainerStyle}>
                <Icon
                    name={"close"}
                    size={scaleResponsively(32)}
                    color={color.accent}
                    onPress={onClosePress}
                />
            </View>

            <View style={styles.rowContainerStyle}>
                <View style={{ ...styles.rowStyle, borderColor: color.accent }}>
                    <Text style={{ ...styles.textStyle, color: color.accent }}>{"Sound"}</Text>
                    <Switch
                        trackColor={{ true: switchColors.true, false: switchColors.false }}
                        thumbColor={switchColors.thumbColor}
                        onValueChange={toggleSound}
                        value={soundValue} />
                </View>
            </View>

            <View style={styles.rowContainerStyle}>
                <View style={{ ...styles.rowStyle, borderColor: color.accent }}>
                    <Text style={{ ...styles.textStyle, color: color.accent }}>{"Vibrate"}</Text>
                    <Switch
                        trackColor={{ true: switchColors.true, false: switchColors.false }}
                        thumbColor={switchColors.thumbColor}
                        onValueChange={toggleVibrate}
                        value={vibrateValue} />
                </View>
            </View>

            <View style={styles.rowContainerStyle}>
                <View style={{ ...styles.rowStyle, borderColor: color.accent }}>
                    <Text style={{ ...styles.textStyle, color: color.accent }}>{"Theme"}</Text>
                    <ColorPanel onChooseColor={onChooseColor} currentColorName={color.name} />
                </View>
            </View>
        </View>
    );
}

export default SettingsView;