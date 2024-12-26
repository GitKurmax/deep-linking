/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {LinkingOptions, NavigationContainer, NavigatorScreenParams} from '@react-navigation/native';
import RootStack from './components/navigation/RootStack.tsx';

const linking: LinkingOptions<{
    Home: NavigatorScreenParams<{
        Second: 'second'
    }>,
    Third: 'third'
}> = {
    prefixes: ['rndl://'],
    config: {
        screens: {
            Home: {
                screens: {
                    Second: 'home/second', // nested screen will be accessed by rndl://home/second
                },
            },
            Third: 'third', // nested screen will be accessed by rndl://third
        },
    },
};


function App(): React.JSX.Element {
  return (
      <NavigationContainer linking={linking}>
        <RootStack />
      </NavigationContainer>
  );
}

export default App;
