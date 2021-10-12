import React from 'react';
import { Text, View, FlatList } from 'react-native';

import Icon from '../../common/Icon/Icon.view';
import { scaleResponsively } from '../../common/utils/scaling';

import styles from './GuessHistory.styles';

const GuessHistory = (props) => {
    const { guesses, color } = props
    console.log("Guesss : ", guesses);
    const renderGuessHistoryRow = ({ item, index }) => (
        <View key={item.id} style={{ ...styles.guessRow, backgroundColor: color.primaryDark }}>
            <Text style={{ ...styles.font, color: color.accent }}>{item.word}</Text>
            <View style={styles.outerResultContainer} >
                <View style={styles.resultContainer}>
                    <Icon
                        name={"crosshair"}
                        size={scaleResponsively(32)}
                        color={color.accent}
                    />
                    <Text style={{ ...styles.resultContainerFont, color: color.accent }}>{" : " + item.cows}</Text>
                </View>
                <View style={styles.resultContainer}>
                    <Icon
                        name={"bullseye"}
                        size={scaleResponsively(32)}
                        color={color.accent}
                    />
                    <Text style={{ ...styles.resultContainerFont, color: color.accent }}>{" : " + item.bulls}</Text>
                </View>
            </View>
        </View>
    );

    return (
        <View style={{ ...styles.container, backgroundColor: color.primary }}>
            <FlatList
                data={guesses}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderGuessHistoryRow}
                inverted />
        </View>
    );
}

export default GuessHistory;