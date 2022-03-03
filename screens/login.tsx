import * as React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const LoginScreen = ({ navigation }:
  {
    navigation: object;
  }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>GYMTOM</Text>
      <Text style={styles.subTitle}>Progress Over Perfection</Text>
      <Button
        style={styles.button}
        title="Login"
        onPress={() =>
          navigation.navigate('Workouts')
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 40 },
  title: { fontSize: 48, fontWeight: "bold", textAlign: "center", color: "lightblue" },
  subTitle: { fontSize: 16, textAlign: "center", marginBottom: 200, color: "lightblue" },
  button: { padding: 24, borderRadius: 8, },
});

export default LoginScreen;