import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Header = ({ title }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{title}</Text>
    </View >
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: "#252837", padding: 15, elevation: 8 },
  heading: { color: "white", fontSize: 16, fontWeight: "bold", textAlign: "left", textTransform: "uppercase" },

});

export default Header;