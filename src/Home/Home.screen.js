import * as React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <TouchableOpacity
        style={{backgroundColor: 'red', height: '50%'}}
        onPress={() => {
          navigation.navigate('SinglePlayerGame');
        }}>
        <Text>This is a placeholder for Home Screen</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
