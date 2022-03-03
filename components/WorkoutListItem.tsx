import React from "react";
import { Text, View, StyleSheet, Image, ImageBackground, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";


const WorkoutListItem = ({ title, description, image, level, id }) => {
  const navigation = useNavigation();

  const levelDisplay = (level) => {
    let levels = [];
    levels[1] = "Entry Level";
    levels[2] = "Beginner";
    levels[3] = "Medium";
    levels[4] = "Advanced";
    levels[5] = "Expert";
    return levels[level];
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
    shadowColor: "#999",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.10,
    shadowRadius: 1.41,
    elevation: 8,
  },
  container: { backgroundColor: "white", padding: 0, margin: 12, borderRadius: 8, overflow: "hidden" },
  image: { width: "100%", height: 200, marginBottom: 10 },
  infoContainer: { margin: 16 },
  title: { color: "#454545", fontSize: 24, fontWeight: "bold", textAlign: "left", marginBottom: 10, marginTop: 0, textTransform: "uppercase" },
  description: { marginBottom: 20, color: "#6b6972", lineHeight: 20 },
  info: { flex: 1, flexDirection: "row", justifyContent: "space-between" },
  difficulty: { backgroundColor: "#f03636", color: "#e0dfe3", padding: 8, borderRadius: 8, fontSize: 12 }
});

export default WorkoutListItem;