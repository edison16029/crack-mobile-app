import * as React from 'react';
import { View } from 'react-native';

import Icon from '../../common/Icon/Icon.view';
import styles from './AppBar.styles';

const AppBarComponent = (props) => {
    return (
        <View style={styles.app_bar_container}>
            <Icon
                name={"cog"}
                size={45}
                color={'black'}
                style={styles.app_bar_icons}
                onPress={() => { console.log("Cog is pressed"); }}
            />
            <Icon
                name={"cog"}
                size={45}
                color={'white'}
                style={styles.app_bar_icons}
                onPress={() => { console.log("Cog is pressed"); }}
            />
        </View>
    )
}

export default AppBarComponent;