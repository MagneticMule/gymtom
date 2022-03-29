import {View, FlatList, StyleSheet, Text} from 'react-native';
import {Swipeable} from 'react-native-gesture-handler';
import SetListItem from './SetListItem';

const SetList = ({sets, setVideo}: {sets: Object; setVideo: string}) => {
  const expandSetReps = (sets, reps) => {};
  return (
    <FlatList
      data={sets}
      renderItem={({item}) => (
        <SetListItem
          setVideo={setVideo}
          reps={item.set.reps}
          setType={item.set.type}
          exercises={item.set.exercises}
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
