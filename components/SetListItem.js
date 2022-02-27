import React from "react";
import { FlatList, Text, View, StyleSheet, TouchableOpacity } from "react-native";

const SetListItem = ({ reps, setType, excercises, setVideo, id }) => {
  return (
    <View>
      <View style={styles.infoContainer}>
        <View style={styles.info}>
          <Text style={styles.setReps}>Repeat this set {reps} {reps === 1 ? "time" : "times"}</Text>
          <Text style={styles.setType}>{setType} set</Text>
        </View>
        <View>
          <FlatList scrollEnabled={false} data={excercises} renderItem={({ item }) => (
            <View>
              <ExcerciseListItem setVideo={setVideo} excercise={item?.excercise} />
              <Text>Repetitions: {item?.reps?.minReps} to {item?.reps?.maxReps}</Text>
            </View>
          )} />
        </View>
      </View>
    </View>
  );
}

const ExcerciseListItem = ({ excercise, setVideo }) => {
  return (
    <TouchableOpacity
      style={[styles.container, styles.shadowProp]}
      onPress={() => { setVideo(excercise?.CloudVideo?.secure_url) }}
    >
      <View>
        <Text style={styles.title}>{excercise?.excerciseName}</Text>
        <Text style={styles.excerciseIntroduction}>{excercise?.introduction}</Text>
        {/* <Text>{excercise?.CloudVideo?.secure_url}</Text> */}
        {
          excercise?.steps.map((step, index) => (
            <View style={index >= excercise.steps.length ? styles.excerciseStepContainerIsLast : styles.excerciseStepContainer}>
              <Text style={styles.excerciseStepTitle}>Step {index + 1}</Text>
              <Text style={styles.excerciseStep}>{step}</Text>
            </View>
          ))
        }
      </View>
    </TouchableOpacity >
  );
}

const styles = StyleSheet.create({
  shadowProp: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    elevation: 2,
  },
  container: { backgroundColor: "#252837", padding: 8, margin: 8, borderRadius: 8, overflow: "hidden" },
  infoContainer: { margin: 8 },
  title: { color: "#e0dfe3", fontSize: 24, fontWeight: "bold", textAlign: "left", marginBottom: 10, marginTop: 0 },
  info: { flex: 1, flexDirection: "row", justifyContent: "space-between" },
  setType: { padding: 8, borderRadius: 8, backgroundColor: "#653322", color: "#e0dfe3" },
  setReps: { padding: 8, borderRadius: 8, backgroundColor: "#224433", color: "#e0dfe3" },
  excerciseIntroduction: { marginBottom: 32 },
  excerciseStepTitle: { fontSize: 22 },
  excerciseStepContainer: { padding: 8, borderBottomColor: "#222", borderBottomWidth: 1 },
  excerciseStepContainerIsLast: { padding: 8 },
  excerciseStep:{lineHeight:24}
});

export default SetListItem;