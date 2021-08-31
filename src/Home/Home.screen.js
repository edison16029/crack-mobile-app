import React, { useState } from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { decrement, increment } from './Home.slice';

const HomeScreen = ({navigation}) => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <TouchableOpacity
        style={{backgroundColor: 'red', height: '10%'}}
        onPress={() => {
          console.log("Hello Eddie");
          dispatch(increment());
          // navigation.navigate('SinglePlayerGame');
        }}>
        <Text>INCREMENT</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{backgroundColor: 'green', height: '10%'}}
        onPress={() => {
          console.log("Hello Eddie");
          dispatch(decrement());
          // navigation.navigate('SinglePlayerGame');
        }}>
        <Text>DECREMENT</Text>
      </TouchableOpacity>

      <Text>The counter value is {count}</Text>
       
    </View>
  );
};

export default HomeScreen;
