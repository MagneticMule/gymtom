import * as React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from 'react-native';
import logo from '../assets/gymtom-title.png';
const LoginScreen = ({navigation}: {navigation: any}) => {
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <Image source={logo} style={{width: 400, height: 400}} />
      {/* <Text style={styles.title}>GYMTOM</Text>
      <Text style={styles.subTitle}>Progress Over Perfection</Text> */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Workouts')}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Stats')}>
        <Text style={styles.buttonText}>Stats</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#7788ff',
    flex: 1,
    alignItems: 'center',
    padding: 40,
    maxWidth: 500,
  },
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
    textAlign: 'center',
    width: 300,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 8,
    borderWidth: 2,
    borderColor: 'white',
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});

export default LoginScreen;
