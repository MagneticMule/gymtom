import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text} from 'react-native';

import SetList from '../components/SetList';
import VideoPlayer from '../components/VideoPlayer';

import {SaveProgress} from '../lib/localStore';

const handleSave = (exerciseName: string, weight: number, reps: number) => {
  const d = {
    date: Date.now(),
    exerciseName,
    weight,
    reps,
  };
  console.log(d);
  SaveProgress(d);
};

const SetListScreen = ({navigation, route}) => {
  const {workout, title} = route.params;
  const sets = workout.sets;
  handleSave('Hammer Curl', 12, 13);

  const [videoUri, setVideoUri] = useState(
    'https://res.cloudinary.com/fitness-republic/video/upload/v1632980748/excercises/ben/Kettlebell_Swing_hrwlcb.mp4',
  );

  return (
    <View style={styles.container} safeAreaTop>
      <VideoPlayer uri={videoUri} />
      {/* <Text style={styles.largeText}>GymTom</Text>
      <Text style={styles.smallText}>Workout Development</Text> */}
      <SetList sets={sets} setVideo={setVideoUri} handleSave={handleSave} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, padding: 0, margin: 0, backgroundColor: 'white'},
  largeText: {
    color: 'white',
    fontSize: 58,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  smallText: {
    color: 'lightgrey',
    fontSize: 20,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});

export default SetListScreen;
