import {View, FlatList, StyleSheet, Text} from 'react-native';
import {useEffect, useState} from 'react';
import {LoadProgress} from '../lib/localStore';

const HistoryScreen = () => {
  const [history, setHistory] = useState({});
  useEffect(() => {
    const load = async () => {
      const d = await LoadProgress();
      setHistory(d);
      console.log(d);
    };
    load();
  }, []);

  return (
    <View>
      <Text>Date: {new Date(history.date).toDateString()}</Text>
      <Text>Exercise Name: {history.exerciseName}</Text>
      <Text>Exercise Weight: {history.weight}</Text>
      <Text>Exercise Reps: {history.reps}</Text>
    </View>
  );
};

export default HistoryScreen;
