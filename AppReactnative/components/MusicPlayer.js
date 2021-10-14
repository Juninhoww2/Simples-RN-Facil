import React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

const MusicPlayer = () => {
  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.mainContainer}>
      
    </View>
    <View style={{
      borderTopColor: '#393E46',
    }}>
    <Ionicons name="heart-outline" size={30} color="#777777" />

    </View>
    </SafeAreaView>
  );
};

export default MusicPlayer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222831',
  },
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
