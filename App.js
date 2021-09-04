import * as React from 'react';
import { Provider } from 'react-redux'

import store from './src/common/store';
import AppNavigator from './src/navigation/App.navigation';

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}