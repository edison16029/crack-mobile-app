import * as React from 'react';
import { View } from 'react-native';

import SettingsScreen from './Settings/Settings.screen';
import styles from './Home.styles';

const HomeCardView = ({color}) => {
    return (
        <View style = {{...styles.card_container, backgroundColor: color.primaryDark}}>
            <SettingsScreen />
        </View>
    )
}

export default HomeCardView;