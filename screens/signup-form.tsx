import * as React from 'react';
import {useEffect, useState} from 'react';
import {
  View,
  CheckBox,
  Text,
  Button,
  StyleSheet,
  Alert,
  TextInput,
} from 'react-native';
import {useForm} from 'react-hook-form';
import TextSlider from '../components/TextSlider';

const SignupForm = ({navigation}: {navigation: any}) => {
  const {
    control,
    register,
    handleSubmit,
    setValue,
    watch,
    formState: {errors},
  } = useForm();
  const onSubmit = (data: any) => Alert.alert('Form Data', data);

  useEffect(() => {
    register('firstName', {required: true});
    register('lastName', {required: true});
  }, [register]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}></Text>
      <Text style={styles.subTitle}>Progress Over Perfection</Text>
      <Text style={styles.label}>First name</Text>
      <TextInput
        // control={control}
        style={styles.input}
        onChangeText={(text: string) => setValue('firstName', text)}
      />
      <Text style={styles.label}>Last name</Text>
      <TextInput
        // control={control}
        style={styles.input}
        onChangeText={(text: string) => setValue('lastName', text)}
      />
      <View style={styles.button}>
        <Button title="Submit" onPress={handleSubmit(onSubmit)} />
      </View>
      <TextSlider labelText="Improved Health" />
      <TextSlider labelText="Improved Endurance" />
      <TextSlider labelText="Improved Strength" />
      <TextSlider labelText="Improved Muscle Mass" />
      <TextSlider labelText="Fat Loss" />
      <TextSlider labelText="Weight Gain" />
      <TextSlider labelText="Sport Specific" />
      {/* <Button
        style={styles.button}
        title="Login"
        onPress={() => navigation.navigate('Workouts')}
      />
      <Button
        style={styles.button}
        title="Stats"
        onPress={() => navigation.navigate('Stats')}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', padding: 40},
  title: {
    fontSize: 48,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'lightblue',
  },
  subTitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 200,
    color: 'lightblue',
  },
  button: {
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 16,
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 8,
    marginBottom: 16,
    padding: 8,
  },
});

export default SignupForm;
