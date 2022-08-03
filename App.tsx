/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {Text} from 'react-native';
import Counter from './Counter';
import MessageForm from './MessageForm';
import Profile from './Profile';

const App = () => {
  return (
    <>
      <Profile name="jin">
        <Text>Hellow World</Text>
      </Profile>
      <MessageForm />
      <Counter />
    </>
  );
};

export default App;
