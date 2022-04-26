import * as React from 'react';
import {Text, StyleSheet} from 'react-native';
import {StatusBar} from 'expo-status-bar';
import {Image, Center, Button, Stack, Input, Link, Box} from 'native-base';
import logo from '../assets/gymtom-title.png';
const LoginScreen = ({navigation}: {navigation: any}) => {
  return (
    <Center backgroundColor={'purple.700'} flex={1}>
      <StatusBar style="light" />
      <Image source={logo} size={'2xl'} />
      {/* <Text style={styles.title}>GYMTOM</Text>
      <Text style={styles.subTitle}>Progress Over Perfection</Text> */}
      <Stack
        direction={{
          base: 'column',
        }}
        space={4}
        marginBottom={'12'}>
        <Input
          color={'amber.100'}
          selectionColor={'amber.300'}
          size="lg"
          width={'260'}
          placeholder="Name"
        />
        <Input
          color={'amber.100'}
          selectionColor={'amber.300'}
          size="lg"
          width={'260'}
          placeholder="Password"
          type={'password'}
        />
      </Stack>
      <Stack
        direction={{
          base: 'column',
          md: 'row',
        }}
        space={4}>
        <Button
          shadow={'2'}
          // variant="outline"
          colorScheme="purple"
          size={'lg'}
          width={'260'}
          onPress={() => navigation.navigate('Workouts')}>
          <Text style={styles.buttonText}>Login</Text>
        </Button>

        {/* <Button
          shadow={'2'}
          // variant="outline"
          colorScheme="green"
          size={'lg'}
          width={'260'}
          onPress={() => navigation.navigate('Signup')}>
          <Text style={styles.buttonText}>Your Details</Text>
        </Button>
        <Button
          shadow={'2'}
          variant="outline"
          colorScheme="red"
          size={'lg'}
          width={'260'}
          onPress={() => navigation.navigate('Stats')}>
          <Text style={styles.buttonText}>ProgressS</Text>
        </Button> */}
        <Box
          _text={{
            color: 'purple.100',
          }}
          alignItems="center">
          Developed with 💓 by
          <Link
            href="https://seventhstage.uk"
            isExternal
            _text={{
              color: 'purple.100',
            }}>
            Seventh Stage UK
          </Link>
        </Box>
      </Stack>
    </Center>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#7788ff',
    flex: 1,
    alignItems: 'center',
    padding: 40,
    maxWidth: 500,
  },
  title: {
    fontSize: 48,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'darkblue',
  },
  subTitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 200,
    color: 'darkblue',
  },
  button: {
    textAlign: 'center',
    width: 300,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 8,
    borderWidth: 2,
    borderColor: 'white',
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});

export default LoginScreen;
