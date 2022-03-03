import React, { useState, useEffect } from "react";
import { View, FlatList, StyleSheet, Text } from 'react-native';

import SetListItem from "./SetListItem";


const SetList = ({ sets, setVideo }: {
  sets: Object;
  setVideo: String;
}) => {

  return (
    <View>
      <FlatList data={sets}
        renderItem={({ item }) => (
          <SetListItem
            setVideo={setVideo}
            reps={item.set.reps}
            setType={item.set.type}
            excercises={item.set.excercises}
            id={item.id}
          />
        )
        } />
    </View>
  )
}

export default SetList;