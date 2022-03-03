import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Video, AVPlaybackStatus } from 'expo-av';

const VideoPlayer = ({ uri }) => {
  return (
    <Video
      style={styles.player}
      shouldPlay
      resizeMode="contain"
      isLooping
      isMuted
      source={{ uri }}
    />
  );
}

const styles = StyleSheet.create({
  player: { width: "100%", height: "31%", margin: 0, padding: 0, elevation: 8 }
});

export default VideoPlayer;