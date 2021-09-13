import React from 'react';
import { View } from 'react-native'

import AppBar from './AppBar/AppBar.view';
import GuessInputView from './GuessInput/GuessInput.view';

import styles from './SinglePlayerGame.styles';

const HomeView = (props) => {
    const {
        color,
    } = props;
    return (
        <View style={{ ...styles.container, backgroundColor: color.primary}}>
            <AppBar color={color}/>
            <GuessInputView color={color}/>
        </View>
    )
}

export default HomeView;