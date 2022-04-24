import * as React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const LoginScreen = ({navigation}: {navigation: any}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>GYMTOM</Text>
      <Text style={styles.subTitle}>Progress Over Perfection</Text>
      <View style={styles.button}>
        <Button title="Login" onPress={() => navigation.navigate('Workouts')} />
      </View>
      <View style={styles.button}>
        <Button title="Stats" onPress={() => navigation.navigate('Stats')} />
      </View>
      <View style={styles.button}>
        <Button title="Sign Up" onPress={() => navigation.navigate('Signup')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', padding: 40, maxWidth: 400},
  title: {
    fontSize: 48,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'darkblue',
  },
  subTitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 200,
    color: 'darkblue',
  },
  button: {
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 16,
  },
});

export default LoginScreen;
