import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = "exerciseProgressData";

const SaveProgress = async (data) => {
  const [isSaving, setIsSaving] = useState(true);
  try {
    const j = JSON.stringify(data);
    await AsyncStorage.mergeItem(STORAGE_KEY, j); 
  } catch (e) {
    setIsSaving(false);
    console.log(e);
  }
}

const LoadProgress = async () => {
  try {
    const j = await AsyncStorage.getItem(STORAGE_KEY);
    return j != null ? JSON.parse(j) : null;
  } catch (e) {
    console.log(e);
    return e;
  }
}

export { SaveProgress, LoadProgress };