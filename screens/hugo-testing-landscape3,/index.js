import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const LandscapeScreen = () => {
  return <View style={styles.container}>
      <Image source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} style={styles.image} />
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover'
  }
});
export default LandscapeScreen;