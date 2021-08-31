import React from 'react';
import {TouchableOpacity} from 'react-native';
import toJson from 'enzyme-to-json';
import {shallow} from 'enzyme';

import HomeScreen from '../Home.screen';

const setupHomeScreen = inProps => {
  const props = {
    navigation: {
      navigate: jest.fn(),
    },
    ...inProps,
  };
  const component = shallow(<HomeScreen {...props} />);
  return {
    component,
    props,
  };
};
describe('Home Screen', () => {
  it('should match snapshot', () => {
    const {component} = setupHomeScreen();
    expect(toJson(component)).toMatchSnapshot();
  });

  it('`onPress` should call navigate with value `SinglePlayerGame`', () => {
    const mockNavigate = jest.fn();
    const navigation = {
      navigate: mockNavigate,
    };
    const {component} = setupHomeScreen({navigation: navigation});
    const touchableComponentProps = component.find(TouchableOpacity).at(0).props();
    touchableComponentProps.onPress();
    expect(mockNavigate).toBeCalledTimes(1);
    expect(mockNavigate).toBeCalledWith('SinglePlayerGame');
  });
});
