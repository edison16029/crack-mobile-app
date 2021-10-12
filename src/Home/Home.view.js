import React from 'react';
import { View } from 'react-native'

import AppBar from './AppBar/AppBar.view';
import HomeCardView from './HomeCard.view';
import Button from '../common/Button/Button.view';

import styles from './Home.styles';

const HomeView = (props) => {
    const {
        color,
        isShowSettings,
        toggleShowSettings,
        onPlayPress
    } = props;
    return (
        <View style={{ ...styles.container, backgroundColor: color.primary }}>
            <AppBar color={color} toggleShowSettings={toggleShowSettings}/>
            <HomeCardView
                color={color}
                isShowSettings={isShowSettings}
                toggleShowSettings={toggleShowSettings} />
            <Button
                containerStyle={styles.buttonContainer}
                color={color}
                onButtonPress={onPlayPress} />
        </View>
    )
}

export default HomeView;