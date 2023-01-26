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
      duration: 60,
      useNativeDriver: true,
    }).start();
  };

  const springOut = () => {
    Animated.spring(springVal, {
      toValue: 1,
      friction: 1.2,
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
        <Text style={styles.label}>{labelText}</Text>
        <Animated.Text
          style={[{transform: [{scale: springVal}]}, styles.levelContainer]}>
          {sliderVal}
        </Animated.Text>
      </View>
      <Slider
        style={{height: 60}}
        minimumValue={0}
        maximumValue={levels.length - 1}
        step={1}
        minimumTrackTintColor="#ababab"
        maximumTrackTintColor="#000000"
        onValueChange={value => handleSliderChange(value)}
        onSlidingStart={value => springIn()}
        onSlidingComplete={value => springOut()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  feedbackContainer: {flexDirection: 'column', alignItems: 'center'},
  levelContainer: {
    textTransform: 'uppercase',
    // backgroundColor: '#dedeff',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#232323',
    paddingTop: 8,
    paddingBottom: 8,
    paddingRight: 12,
    paddingLeft: 12,
    borderRadius: 8,
    // borderColor: '#ababff',
    // borderWidth: 1,
  },
  sliderContainer: {
    marginBottom: 32,
    borderRadius: 8,
    backgroundColor: '#fff',
    padding: 16,
  },
  label: {textTransform: 'uppercase', fontSize: 18, marginBottom: 8},
});

export default TextSlider;
