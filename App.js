import * as React from 'react';
import { LogBox, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppLoading from 'expo-app-loading';

import LoginScreen from './screens/login';
import WorkoutListScreen from './screens/workouts';
import WorkoutScreen from './screens/workout';
import SetListScreen from './screens/sets';

import { Appearance } from 'react-native';


import {
  useFonts,
  Montserrat_100Thin,
  Montserrat_100Thin_Italic,
  Montserrat_200ExtraLight,
  Montserrat_200ExtraLight_Italic,
  Montserrat_300Light,
  Montserrat_300Light_Italic,
  Montserrat_400Regular,
  Montserrat_400Regular_Italic,
  Montserrat_500Medium,
  Montserrat_500Medium_Italic,
  Montserrat_600SemiBold,
  Montserrat_600SemiBold_Italic,
  Montserrat_700Bold,
  Montserrat_700Bold_Italic,
  Montserrat_800ExtraBold,
  Montserrat_800ExtraBold_Italic,
  Montserrat_900Black,
  Montserrat_900Black_Italic,
} from '@expo-google-fonts/montserrat';

LogBox.ignoreAllLogs();
const Stack = createNativeStackNavigator();
const App = () => {
  console.log(Appearance.getColorScheme());
  LogBox.ignoreLogs(['Setting a timer']);
  let [fontsLoaded] = useFonts({
    Montserrat_100Thin,
    Montserrat_100Thin_Italic,
    Montserrat_200ExtraLight,
    Montserrat_200ExtraLight_Italic,
    Montserrat_300Light,
    Montserrat_300Light_Italic,
    Montserrat_400Regular,
    Montserrat_400Regular_Italic,
    Montserrat_500Medium,
    Montserrat_500Medium_Italic,
    Montserrat_600SemiBold,
    Montserrat_600SemiBold_Italic,
    Montserrat_700Bold,
    Montserrat_700Bold_Italic,
    Montserrat_800ExtraBold,
    Montserrat_800ExtraBold_Italic,
    Montserrat_900Black,
    Montserrat_900Black_Italic,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1 }}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{
                title: "Let's get you started"
              }} />

            <Stack.Screen
              name="Workouts"
              component={WorkoutListScreen}
              options={{
                title: 'Workouts',
                headerStyle: {
                  backgroundColor: '#252837',
                },
                headerTitleStyle: {
                  color: '#ffffff',
                  fontWeight: 'bold'
                },
              }}
            />

            <Stack.Screen
              name="Workout"
              component={WorkoutScreen}
              options={{
                title: 'Workout',
                headerStyle: {
                  backgroundColor: '#252837',
                },
                headerTitleStyle: {
                  color: '#ffffff',
                  fontWeight: 'bold'
                },
              }}
            />
            <Stack.Screen
              name="Sets"
              component={SetListScreen}
              options={{
                title: 'SetList',
                headerStyle: {
                  backgroundColor: '#252837',
                },
                headerTitleStyle: {
                  color: '#ffffff',
                  fontWeight: 'bold'
                },
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    );
  }
};

export default App;