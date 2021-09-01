import React from 'react';
import { useSelector } from 'react-redux';

import HomeView from './Home.view';

const HomeScreen = ({navigation}) => {
  const color = useSelector((state) => state.settings.color);

  return (
    <HomeView color={color}/>
  )
};

export default HomeScreen;
