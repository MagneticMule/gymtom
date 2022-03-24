import React, {useState, useEffect} from 'react';
import {View, FlatList, StyleSheet, Text} from 'react-native';
import {SwipeListView} from 'react-native-swipe-list-view';

import SetListItem from './SetListItem';

const SetList = ({sets, setVideo}: {sets: Object; setVideo: string}) => {
  return (
    <SwipeListView
      data={sets}
      useFlatList={true}
      rightOpenValue={-55}
      renderItem={({item}, rowMap) => (
        <SetListItem
          setVideo={setVideo}
          reps={item.set.reps}
          setType={item.set.type}
          exercises={item.set.exercises}
          id={item.id}
        />
      )}
      renderHiddenItem={(data, rowMap) => <View></View>}
    />
  );
};

export default SetList;
