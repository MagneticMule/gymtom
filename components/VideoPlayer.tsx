import React from 'react';
import {StyleSheet} from 'react-native';
import {Video} from 'expo-av';

const VideoPlayer = ({uri}: {uri: string}) => {
  return (
    <Video
      style={styles.player}
      shouldPlay
      resizeMode="contain"
      isLooping
      isMuted
      source={{uri}}
    />
  );
};

const styles = StyleSheet.create({
  player: {width: '100%', height: '30%', margin: 0, padding: 0, elevation: 8},
});

export default VideoPlayer;
