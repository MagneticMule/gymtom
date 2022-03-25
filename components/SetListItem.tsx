import React, {useState} from 'react';
import {FlatList, Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import ExerciseInputs from './ExerciseInputs';

const SetListItem = ({
  reps,
  setType,
  exercises,
  setVideo,
  id,
  onSwipeFromLeft,
  onRightPress,
}: {
  reps: number;
  setType: string;
  exercises: Array<any>;
  setVideo: string;
  id: number;
}) => {
  return (
    <Swipeable>
      <View>
        <View style={styles.infoContainer}>
          <View style={styles.info}>
            <Text style={styles.setReps}>
              Repeat this set {reps} {reps === 1 ? 'time' : 'times'}
            </Text>
            <Text style={styles.setType}>{setType} set</Text>
          </View>
          <View>
            <FlatList
              scrollEnabled={false}
              data={exercises}
              keyExtractor={item => item.id}
              renderItem={({item}) => (
                <View>
                  <ExerciseListItem
                    key={item._id}
                    setVideo={setVideo}
                    exercise={item?.exercise}
                  />
                  <Text>
                    Repetitions: {item?.reps?.minReps} to {item?.reps?.maxReps}
                  </Text>
                </View>
              )}
            />
          </View>
        </View>
      </View>
    </Swipeable>
  );
};

const ExerciseListItem = ({
  exercise,
  setVideo,
}: {
  exercise: Array<any>;
  setVideo: Function;
}) => {
  const [isActive, setIsActive] = useState(true);
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
  },
  setReps: {
    padding: 8,
    borderRadius: 8,
    backgroundColor: '#224433',
    color: '#e0dfe3',
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

export default SetListItem;
