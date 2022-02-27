import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, ImageBackground, Button, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import sanity from '../lib/sanity';

const query = `*[_id == $id][0] {
  "id": _id,
  name,
  description,
  "image": image.asset -> url,
  "level": excerciseLevel,
  "sets": setBuilder[]{
    "id": _key,
    "reps": setRepetitions,
      set {
        "type": setType,
        "reps": setRepetitions,
        "id": _key,
        "excercises":setExcercise[]{
          "id":_key,
          "reps":repFields{
            minReps,
            maxReps
          },
          "excercise":excerciseReference->
        }
    }
  }
}`;

const WorkoutScreen = ({ navigation, route }) => {

  const { id } = route.params;
  console.log(`id: ${id}`);
  const [workout, setWorkout] = useState({ data: {} });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    sanity.fetch(query, { id }).then((workout) => {
      setWorkout(workout);
      setIsLoading(false);
    })
      .catch(console.error);
  }, [id]);


  if (isLoading) {
    return (
      <View style={styles.container} safeAreaTop>
        <Text style={styles.descriptionText}>Loading...</Text>
      </View>
    );
  } else {
    // {
    //   if (workout.sets) {
    //     workout.sets.map((item) => {
    //       // console.log(item.set.setType);
    //       item.set.excercises.map((e) => (
    //         // console.log(e)
    //       ));
    //     });
    //   }
    // }
    return (
      <View style={styles.container} safeAreaTop>
        <ImageBackground source={{ uri: workout.image }} resizeMode="cover" style={styles.image} alt="{workout.name">
          <LinearGradient
            colors={["rgba(0,0,0,0.1)", "rgba(0,0,0,0.9)"]}
            start={[0.5, 0.05]}
            style={styles.linearGradient}
          >
            <Text style={styles.titleText}>{workout.name}</Text>
            <Text style={styles.levelText}>Level: {workout.level}</Text>
          </LinearGradient>
        </ImageBackground>
        <View style={styles.infoContainer}>
          <Text style={styles.descriptionTitle}>Description</Text>
          <Text style={styles.descriptionText}>{workout.description}</Text>
          <View style={styles.statsContainer}>

            <View style={styles.statBox}>
              <Text style={styles.statsTitle}>Duration</Text>
              <Text style={styles.stat}>50</Text>
            </View>
            <View style={styles.vSeperator} />

            <View style={styles.statBox}>
              <Text style={styles.statsTitle}>Excercises</Text>
              <Text style={styles.stat}>12</Text>
            </View>

            <View style={styles.vSeperator} />

            <View style={styles.statBox}>
              <Text style={styles.statsTitle}>Challenge</Text>
              <Text style={styles.stat}>3/5</Text>
            </View>
          </View>
          <View style={styles.buttonContainer}>
            <Button
              title="Let's Go!"
              color="darkorange"
              onPress={() =>
                navigation.navigate('Sets', { workout: workout })
              }
            />
          </View>
        </View>
      </View >
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#1f1d2b" },
  infoContainer: { flex: 1, flexDirection: "column", padding: 28, backgroundColor: '#332242', borderTopLeftRadius: 32, borderTopRightRadius: 32, elevation: 8 },
  titleText: { color: "white", fontSize: 30, marginBottom: 16, marginLeft: 28, fontFamily: 'Montserrat_500Medium' },
  levelText: { color: "#fff", fontSize: 16, marginBottom: 64, marginLeft: 28, fontFamily: 'Montserrat_200ExtraLight' },
  linearGradient: { width: '100%', height: '100%', justifyContent: 'flex-end' },
  descriptionTitle: { color: "#ffffff", fontSize: 24, marginBottom: 12, fontFamily: 'Montserrat_500Medium' },
  descriptionText: { marginBottom: 28, color: "lightgrey", fontSize: 18, lineHeight: 28, fontFamily: 'Montserrat_300Light' },
  image: { flex: .6, width: "100%", height: "100%", marginBottom: -24, justifyContent: "center", padding: 0 },
  buttonContainer: { flex: 1, justifyContent: 'flex-end', marginBottom: 36, },
  statBox: { flex: 1, flexDirection: "column", alignItems: "center", },
  statsContainer: { flex: 1, flexDirection: "row", alignContent: "space-between", justifyContent: "space-between", },
  statsTitle: { color: "#ffaa45", fontFamily: 'Montserrat_300Light', textTransform: "uppercase" },
  stat: { color: "#ffaa45", fontSize: 48, fontFamily: 'Montserrat_600SemiBold' },
  vSeperator: { backgroundColor: "#aaa", width: 1, height: "100%" }
});

export default WorkoutScreen;