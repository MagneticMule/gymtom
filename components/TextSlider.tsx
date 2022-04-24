import * as React from 'react';
import {Animated, View, Text, StyleSheet} from 'react-native';
import Slider from '@react-native-community/slider';
import {useState, useRef} from 'react';

const defaultLevels = [
  'not important',
  'somewhat important',
  'important',
  'very important',
  'extremely important',
];

const TextSlider = ({levels = defaultLevels, labelText}, ...args) => {
  // textSpring will be used as the value for text size. Initial Value: 12
  const springVal = useRef(new Animated.Value(1)).current;

  const springIn = () => {
    springVal.setValue(1);
    Animated.timing(springVal, {
      toValue: 1.2,
      duration: 90,
      useNativeDriver: true,
    }).start();
  };

  const springOut = () => {
    Animated.spring(springVal, {
      toValue: 1,
      friction: 2,
      useNativeDriver: true,
    }).start();
  };
  const [sliderVal, setSliderVal] = useState(levels[0]);
  const handleSliderChange = (value: number) => {
    setSliderVal(levels[value]);
  };

  return (
    <View style={styles.sliderContainer}>
      <View style={styles.feedbackContainer}>
        <Text style={styles.label}>{labelText} is </Text>
        <Animated.Text
          style={[{transform: [{scale: springVal}]}, styles.levelContainer]}>
          {sliderVal}
        </Animated.Text>
      </View>
      <Slider
        style={{height: 40}}
        minimumValue={0}
        maximumValue={levels.length - 1}
        step={1}
        minimumTrackTintColor="#FFFFFF"
        maximumTrackTintColor="#000000"
        onValueChange={value => handleSliderChange(value)}
        onSlidingStart={value => springIn()}
        onSlidingComplete={value => springOut()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  feedbackContainer: {flexDirection: 'row', alignItems: 'center'},
  levelContainer: {
    backgroundColor: 'red',
    fontWeight: 'bold',
    color: 'white',
    padding: 8,
    borderRadius: 8,
  },
  sliderContainer: {},
  label: {},
});

export default TextSlider;
