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
  ScrollView,
} from 'react-native';
import {useForm} from 'react-hook-form';
import TextSlider from '../components/TextSlider';
import {SafeAreaView} from 'react-native-safe-area-context';

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
    register('age', {required: true});
    register('weight', {required: true});
  }, [register]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={[styles.section, styles.lightSection]}>
          <Text style={styles.title}>The Basics</Text>
          <Text style={styles.subTitle}>We need some personal details</Text>
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
          <Text style={styles.label}>Age</Text>
          <TextInput
            // control={control}
            keyboardType="numeric"
            style={styles.input}
            onChangeText={(text: string) => setValue('age', text)}
          />
          <Text style={styles.label}>Weight (in Kilograms)</Text>
          <TextInput
            // control={control}
            keyboardType="numeric"
            style={styles.input}
            onChangeText={(text: string) => setValue('weight', text)}
          />
        </View>
        <View style={[styles.section, styles.neautralSection]}>
          <Text style={styles.title}>Motivations</Text>
          <Text style={styles.subTitle}>What is most important to you? </Text>
          <TextSlider labelText="Improved Health 💓" />
          <TextSlider labelText="Improved Endurance 🏃🏻‍♀️" />
          <TextSlider labelText="Improved Strength 🏋🏻" />
          <TextSlider labelText="Improved Muscle Mass 💪🏻" />
          <TextSlider labelText="Fat Loss 🏆" />
          <TextSlider labelText="Weight Gain 🍉" />
          {/* <TextSlider labelText="Sport Specific 🏸" /> */}
        </View>
        <View style={[styles.section, styles.lightSection]}>
          <View style={styles.button}>
            <Button title="Submit" onPress={handleSubmit(onSubmit)} />
          </View>
        </View>
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
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center'},
  scrollView: {maxWidth: 900},
  title: {
    fontSize: 48,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'darkblue',
  },
  subTitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 40,
    color: 'darkblue',
  },
  button: {
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 16,
  },
  label: {
    marginBottom: 8,
    fontSize: 16,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    color: 'darkblue',
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 8,
    marginBottom: 16,
    padding: 8,
  },
  section: {
    paddingTop: 16,
    paddingBottom: 16,
    padding: 16,
  },
  lightSection: {
    backgroundColor: '#eee',
  },
  neautralSection: {
    backgroundColor: '#ddd',
  },
  darkSection: {
    backgroundColor: '#ccc',
  },
});

export default SignupForm;
