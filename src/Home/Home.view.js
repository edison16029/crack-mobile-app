import React from 'react';
import { View } from 'react-native'

import AppBarComponent from './AppBar/AppBar.view';
import HomeCardView from './HomeCard.view';

import styles from './Home.styles';

const HomeView = ({ color }) => {
    return(
        <View style={{...styles.container, backgroundColor : color.primary}}>
            <AppBarComponent />
            <HomeCardView color={color}/>
        </View>
    )
}

export default HomeView;
