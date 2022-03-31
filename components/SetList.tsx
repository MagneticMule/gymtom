import {View, FlatList, StyleSheet, Text} from 'react-native';
import {Swipeable} from 'react-native-gesture-handler';
import SetListItem from './SetListItem';

const SetList = ({sets, setVideo}: {sets: object; setVideo: string}) => {
  const expandSetReps = (sets: Array<object>) => {
    let newSets = new Array();
    for (let i = 0; i < sets.length; i++) {
      for (let j = 0; j < sets[i].set.reps; j++) {
        newSets.push(sets[i].set);
      }
    }
    return newSets;
  };
  return (
    <FlatList
      data={expandSetReps(sets)}
      renderItem={({item}) => (
        <SetListItem
          setVideo={setVideo}
          reps={item.reps}
          setType={item.type}
          exercises={item.exercises}
          id={item.id}
        />
      )}
    />
  );
};

const Styles = StyleSheet.create({
  done: {fontSize: 64, color: 'black'},
  container: {
    margin: 0,
    alignContent: 'center',
    justifyContent: 'center',
    width: 70,
  },
});

export default SetList;
