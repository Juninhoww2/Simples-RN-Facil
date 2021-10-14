import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const MusicPlayer = () => {
  return (
    <View style={styles.container}>
      <Text>React Native Music Player</Text>
    </View>
  );
};

export default MusicPlayer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
