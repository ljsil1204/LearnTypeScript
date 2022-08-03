import React from 'react';
import {View, Text} from 'react-native';

interface Props {
  name: string;
}

function Profile({name}: Props) {
  return (
    <View>
      <Text>{name}</Text>
    </View>
  );
}

export default Profile;
