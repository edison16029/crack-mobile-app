import React from 'react';
import { View, Text } from 'react-native';

import Icon from '../../common/Icon/Icon.view';
import { scaleResponsively } from '../../common/utils/scaling';

import styles from './GuessResult.styles';

const GuessResult = (props) => {
    const { color, cows, bulls } = props;

    return (
        <View style={{ ...styles.cardContainer, backgroundColor: color.primaryDark }}>
            <Text style={{ ...styles.font, color: color.accent }}>{"guess"}</Text>
            <View style={styles.outerResultContainer}>
                <View style={styles.resultContainer}>
                    <Icon
                        name={"crosshair"}
                        size={scaleResponsively(32)}
                        color={color.accent}
                    />
                    <Text style={{ ...styles.resultContainerFont, color: color.accent }}>{" : " + cows}</Text>
                </View>
                <View style={styles.resultContainer}>
                    <Icon
                        name={"bullseye"}
                        size={scaleResponsively(32)}
                        color={color.accent}
                    />
                    <Text style={{ ...styles.resultContainerFont, color: color.accent }}>{" : " + bulls}</Text>
                </View>
            </View>
        </View>
    )

    // if(guess) { 

    // } else {
    //     return (
    //         <View style = {{ ...styles.cardContainer, backgroundColor: colors.primaryDark }}>
    //             <Icon name = "logo" size = {logoSize} style = {{color : theme.colors.accent}} />
    //         </View>
    //     );
    // }
}

export default GuessResult;