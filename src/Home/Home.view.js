import React from 'react';
import { View } from 'react-native'

import AppBar from './AppBar/AppBar.view';
import HomeCardView from './HomeCard.view';

import styles from './Home.styles';

const HomeView = (props) => {
    const {
        color,
        isShowSettings,
        toggleShowSettings
    } = props;
    return (
        <View style={{ ...styles.container, backgroundColor: color.primary }}>
            <AppBar color={color} toggleShowSettings={toggleShowSettings}/>
            <HomeCardView
                color={color}
                isShowSettings={isShowSettings}
                toggleShowSettings={toggleShowSettings} />
        </View>
    )
}

export default HomeView;