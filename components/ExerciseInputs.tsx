import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

const ExerciseInputs = ({}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>+Weight</Text>
      <TextInput
        autoCorrect={false}
        maxLength={3}
        defaultValue={'10'}
        keyboardType={'numeric'}
        style={styles.input}
      />
      <Text style={styles.label}>Reps</Text>
      <TextInput
        autoCorrect={false}
        maxLength={3}
        defaultValue={'8'}
        keyboardType={'numeric'}
        style={styles.input}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    color: 'black',
    fontSize: 16,
    padding: 8,
    textAlign: 'left',
    textTransform: 'uppercase',
  },
  input: {
    height: 40,
    fontSize: 16,
    margin: 8,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 8,
    padding: 10,
  },
});

export default ExerciseInputs;
