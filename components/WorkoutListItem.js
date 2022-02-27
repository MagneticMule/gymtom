import React from "react";
import { Text, View, StyleSheet, Image, ImageBackground, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";


const WorkoutListItem = ({ title, description, image, level, id }) => {
  const navigation = useNavigation();

  const levelDisplay = (level) => {
    const levels = [
      { 1: "Entry Level" },
      { 2: "Beginner" },
      { 3: "Beginner" },
      { 4: "begginer" },
      { 5: "begginer" },
    ];
    return "Beginner";
  }

  return (
    <TouchableOpacity
      style={[styles.container, styles.shadowProp]}
      onPress={() => { navigation.navigate('Workout', { id: id }) }}
    >
      <ImageBackground source={{ uri: image }} style={styles.image} alt="" />
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
        <View style={styles.info}>
          <Text style={styles.difficulty}> Level: {levelDisplay(level)}</Text>
          {/* <View>
            {sets && sets.map((set) => (
              //console.log(set)
            ))}
          </View> */}
        </View>
      </View>
    </TouchableOpacity>
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
  container: { backgroundColor: "#252837", padding: 0, margin: 15, borderRadius: 8, overflow: "hidden" },
  image: { width: "100%", height: 200, marginBottom: 10 },
  infoContainer: { margin: 16 },
  title: { color: "#e0dfe3", fontSize: 24, fontWeight: "bold", textAlign: "left", marginBottom: 10, marginTop: 0, textTransform: "uppercase" },
  description: { marginBottom: 20, color: "#6b6972", lineHeight: 20 },
  info: { flex: 1, flexDirection: "row", justifyContent: "space-between" },
  difficulty: { backgroundColor: "#f03636", color: "#e0dfe3", padding: 8, borderRadius: 8, fontSize: 12 }
});

export default WorkoutListItem;