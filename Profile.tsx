import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

interface Props {
  name: string;
  isActive?: boolean;
  image?: string;
}

function Profile({
  name,
  isActive,
  image = 'https://blankspace-dev.tistory.com/200',
}: Props) {
  return (
    <View style={isActive && styles.activeStyle}>
      <Image source={{uri: image}} />
      <Text>{name}</Text>
    </View>
  );
}

// Profile.defaultProps = {
//   image: 'https://blankspace-dev.tistory.com/200',
// };

const styles = StyleSheet.create({
  activeStyle: {
    backgroundColor: 'yellow',
  },
});

export default Profile;
