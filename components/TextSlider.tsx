import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Slider from '@react-native-community/slider';
import {useEffect, useState} from 'react';

const defaultLevels = [
  'not important',
  'somewhat important',
  'important',
  'very important',
  'extremely important',
];

const TextSlider = ({levels = defaultLevels, labelText}, ...args) => {
  const [sliderVal, setSliderVal] = useState(levels[0]);
  const handleSliderChange = (value: number) => {
    setSliderVal(levels[value]);
  };

  return (
    <>
      <View style={styles.sliderContainer}>
        <Text style={styles.label}>
          {labelText} is {sliderVal}
        </Text>
        <Slider
          style={{height: 40}}
          minimumValue={0}
          maximumValue={levels.length - 1}
          step={1}
          minimumTrackTintColor="#FFFFFF"
          maximumTrackTintColor="#000000"
          onValueChange={value => handleSliderChange(value)}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  sliderContainer: {},
  label: {},
});

export default TextSlider;
