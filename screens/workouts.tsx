import React, {useState, useEffect} from 'react';
import {View, FlatList, StyleSheet, Text} from 'react-native';

import sanity from '../lib/sanity';
import WorkoutListItem from '../components/WorkoutListItem';

const query = `*[_type == "workout"] | order(_updatedAt desc) {
  "id": _id,
  name,
  description,
  "image": image.asset -> url,
  "level": excerciseLevel,
  "sets": setBuilder[]{
    "id": _key,
    "type": setType,
      set {
        "reps": setRepetitions,
        "id": sets._ref,
        "exercises":setExcercise[]{
          "id": _id,
          "reps":repFields{
            minReps,
            maxReps
          },
          "exercise":excerciseReference->
        }
    }
  }
}`;
const buildDuplicates = (arr: any, repeat: number) => {
  const a = arr.map((i: any) => {
    i.sets.map((s: any) => s.set);
  });
  console.log('-----START-----');
  console.log(a);
  console.log('-----END-----');
  return arr;
};
const WorkoutListScreen = ({navigation}: {navigation: any}) => {
  const [workouts, setWorkouts] = useState({data: {}});
  useEffect(() => {
    sanity
      .fetch(query)
      .then(workouts => setWorkouts(buildDuplicates(workouts, 3)))
      .catch(console.error);
  }, []);
  return (
    <View style={styles.container} safeAreaTop>
      <FlatList
        data={workouts}
        renderItem={({item}) => (
          <WorkoutListItem
            title={item.name}
            description={item.description}
            image={item.image}
            level={item.level}
            sets={item.sets}
            id={item.id}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
  largeText: {
    color: 'black',
    fontSize: 58,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  smallText: {
    color: 'lightgrey',
    fontSize: 20,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});

export default WorkoutListScreen;
