import React from 'react';
import { useSelector } from 'react-redux';

import HomeView from './Home.view';
import { useHome } from './useHome';

const HomeScreen = ({ navigation }) => {
  const color = useSelector((state) => state.settings.color);
  const {
    isShowSettings,
    toggleShowSettings
  } = useHome();
  
  const onPlayPress = () => {
    navigation.navigate('SinglePlayerGame');
  }
  
  return (
    <HomeView
      color={color}
      isShowSettings={isShowSettings}
      toggleShowSettings={toggleShowSettings}
      onPlayPress={onPlayPress}
    />
  )
};

export default HomeScreen;
