import * as React from 'react';
import {LogBox, View} from 'react-native';
import AppLoading from 'expo-app-loading';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {NativeBaseProvider} from 'native-base';

import {UserContext, UserProvider} from './utils/contexts/user-context';

import AppStack from './navigation/app-stack';

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

const nativeBaseConfig = {
  dependencies: {
    'linear-gradient': require('expo-linear-gradient').LinearGradient,
  },
};

LogBox.ignoreAllLogs();

const App = () => {
  const Stack = createStackNavigator();
  // console.log(Appearance.getColorScheme());
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
      <UserProvider>
        <NativeBaseProvider config={nativeBaseConfig}>
          <View style={{flex: 1}}>
            <NavigationContainer>
              <AppStack Stack={Stack} />
            </NavigationContainer>
          </View>
        </NativeBaseProvider>
      </UserProvider>
    );
  }
};

export default App;
