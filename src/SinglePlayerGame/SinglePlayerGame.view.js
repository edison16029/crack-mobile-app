import React from 'react';
import { View } from 'react-native'

import AppBar from './AppBar/AppBar.view';

import styles from './SinglePlayerGame.styles';

const HomeView = (props) => {
    const {
        color,
    } = props;
    return (
        <View style={{ ...styles.container, backgroundColor: color.primary}}>
            <AppBar color={color} toggleShowSettings={toggleShowSettings}/>
        </View>
    )
}

export default HomeView;