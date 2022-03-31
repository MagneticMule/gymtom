import React from 'react';
import {Dimensions, StyleSheet} from 'react-native';
import {Video} from 'expo-av';
const {height: SCREEN_HEIGHT, width: SCREEN_WIDTH} = Dimensions.get('window');

const VideoPlayer = ({uri}: {uri: string}) => {
  return (
    <Video
      style={styles.player}
      shouldPlay
      resizeMode="cover"
      isLooping
      isMuted
      source={{uri}}
    />
  );
};

const styles = StyleSheet.create({
  player: {
    left: 0,
    top: 0,
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT / 3.333,
    margin: 0,
    padding: 0,
    // paddingBottom: '56.25%',
    elevation: 8,
  },
});

export default VideoPlayer;
