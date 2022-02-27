import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text } from 'react-native';

import sanity from '../lib/sanity';

import SetList from '../components/SetList';
import VideoPlayer from '../components/VideoPlayer';

// const query = `*[_type == "sets"] {
//   "id": _id,

//   "level": excerciseLevel,
//   "sets": setBuilder[]{
//       set {
//         "excercises": setExcercise[]{
//         "muscles": excerciseReference -> muscles{
//           general
//         }
//       }
//     }
//   }
// }`;

const SetListScreen = ({ navigation, route }) => {
  const { workout } = route.params;
  const sets = workout.sets;

  const [videoUri, setVideoUri] = useState('https://res.cloudinary.com/fitness-republic/video/upload/v1632980748/excercises/ben/Kettlebell_Swing_hrwlcb.mp4');


  // console.clear();
  // console.log(`Sets: ${JSON.stringify(sets)}`);

  // const [excercises, setExcercises] = useState({ data: {} });
  // // useEffect(() => {
  // //   sanity.fetch(query).then((excercises) => setExcercises(excercises))
  // //     .catch(console.error)
  // // }, []);

  return (
    <View style={styles.container} safeAreaTop>
      <VideoPlayer uri={videoUri} />
      {/* <Text style={styles.largeText}>GymTom</Text>
      <Text style={styles.smallText}>Workout Development</Text> */}
      <SetList sets={sets} setVideo={setVideoUri} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 0, margin: 0, backgroundColor: "#1f1d2b" },
  largeText: { color: "white", fontSize: 58, fontWeight: "bold", textTransform: "uppercase" },
  smallText: { color: "lightgrey", fontSize: 20, fontWeight: "bold", textTransform: "uppercase" }
});

export default SetListScreen;