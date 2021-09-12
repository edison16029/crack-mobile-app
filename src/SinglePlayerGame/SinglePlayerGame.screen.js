import React from 'react';
import { useSelector } from 'react-redux';

import SinglePlayerGameView from './SinglePlayerGame.view';
// import { useHome } from './useHome';

const SinglePlayerGameScreen = ({ navigation }) => {
  const color = useSelector((state) => state.settings.color);

  return (
    <SinglePlayerGameView 
      color={color} />
  )
};

export default SinglePlayerGameScreen;
