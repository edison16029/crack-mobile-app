import React from 'react';
import { View } from 'react-native'

import AppBarComponent from './AppBar/AppBar.view';
import styles from './Home.styles';

const HomeView = (props) => {
    return(
        <View style={styles.container}>
            <AppBarComponent />
        </View>
    )
}

export default HomeView;
