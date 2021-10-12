import React from 'react';
import { View } from 'react-native'

import AppBar from './AppBar/AppBar.view';
import GuessHistoryView from './GuessHistory/GuessHistory.view';
import GuessInputView from './GuessInput/GuessInput.view';
import GuessResultView from './GuessResult/GuessResult.view';

import styles from './SinglePlayerGame.styles';

const dummyGuessList = [
    {
        id: 1,
        word: 'HULK',
        cows: 2,
        bulls: 3
    },
    {
        id: 2,
        word: 'HULK',
        cows: 2,
        bulls: 3
    },
    {
        id: 3,
        word: 'HULK',
        cows: 2,
        bulls: 3
    },
    {
        id: 4,
        word: 'HULK',
        cows: 2,
        bulls: 3
    },
    {
        id: 5,
        word: 'HULK',
        cows: 2,
        bulls: 3
    },
]
const SinglePlayerGameView = (props) => {
    const {
        color,
    } = props;
    return (
        <View style={{ ...styles.container, backgroundColor: color.primary}}>
            <AppBar color={color}/>
            <View style={{flex : 3.5}}>
                <GuessHistoryView color={color} guesses={dummyGuessList}/>
            </View>
            <View style={{flex : 1.8}}>
                <GuessResultView color={color} cows={2} bulls={2} />
            </View>
            <View style={{flex : 3}}>
                <GuessInputView color={color} />
            </View>
            
            
        </View>
    )
}

export default SinglePlayerGameView;