import React, {useState} from 'react';
import {
  FlatList,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Animated,
} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';

const ExerciseListItem = ({
  exercise,
  setVideo,
}: {
  exercise: Array<any>;
  setVideo: Function;
}) => {
  return (
    <TouchableOpacity
      style={[styles.container, styles.shadowProp]}
      onPress={() => {
        setVideo(exercise?.CloudVideo?.secure_url);
      }}>
      <View>
        <Text style={styles.title}>{exercise?.excerciseName.trim()}</Text>
        <Text style={styles.exerciseIntroduction}>
          {exercise?.introduction}
        </Text>
        {exercise?.steps.map((step, index) => (
          <View
            key={index}
            style={
              index >= exercise.steps.length
                ? styles.exerciseStepContainerIsLast
                : styles.exerciseStepContainer
            }>
            <Text style={styles.exerciseStepTitle}>Step {index + 1}</Text>
            <Text style={styles.exerciseStep}>{step}</Text>
          </View>
        ))}
        <ExerciseInputs />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 8,
  },
  container: {
    backgroundColor: '#f3f3f1',
    padding: 8,
    margin: 8,
    borderRadius: 8,
    overflow: 'hidden',
  },
  leftAction: {
    backgroundColor: 'blue',
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  actionText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 128,
    padding: 40,
  },
  infoContainer: {margin: 8},
  title: {
    color: '#565656',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'left',
    marginBottom: 10,
    marginTop: 0,
  },
  info: {flex: 1, flexDirection: 'row', justifyContent: 'space-between'},
  setType: {
    padding: 8,
    borderRadius: 8,
    backgroundColor: '#653322',
    color: '#e0dfe3',
    overflow: 'hidden',
  },
  setReps: {
    padding: 8,
    borderRadius: 8,
    backgroundColor: '#224433',
    color: '#e0dfe3',
    overflow: 'hidden',
  },
  exerciseIntroduction: {marginBottom: 32},
  exerciseStepTitle: {fontSize: 22},
  exerciseStepContainer: {
    padding: 8,
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
  },
  exerciseStepContainerIsLast: {padding: 8},
  exerciseStep: {lineHeight: 24},
});

export default ExerciseListItem;
