import * as React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const LoginScreen = ({ navigation }) => {
  console.log(navigation);
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
  container: { flex: 1, backgroundColor: "#1f1d2b", justifyContent: "center", padding: 40 },
  title: { fontSize: 48, fontWeight: "bold", textAlign: "center", color: "white" },
  subTitle: { fontSize: 16, textAlign: "center", marginBottom: 200, color: "white" },
  button: { padding: 24, borderRadius: 8, backgroundColor: "purple" },
});

export default LoginScreen;