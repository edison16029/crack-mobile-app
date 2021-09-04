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
  
  return (
    <HomeView
      color={color}
      isShowSettings={isShowSettings}
      toggleShowSettings={toggleShowSettings}
    />
  )
};

export default HomeScreen;
