import * as React from 'react';
import {Text, StyleSheet} from 'react-native';
import {StatusBar} from 'expo-status-bar';
import '../config/firebase';
import {
  Image,
  Center,
  Button,
  Stack,
  Input,
  Link,
  Box,
  Icon,
  FormControl,
  KeyboardAvoidingView,
} from 'native-base';
import {MaterialIcons} from '@expo/vector-icons';
import logo from '../assets/gymtom-title.png';
import {useState} from 'react';
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth';
import {useContext} from 'react';
import {UserContext} from '../utils/contexts/user-context';
import LoggedInStack from '../navigation/logged-in-stack';
import LoggedOutStack from '../navigation/logged-out-stack';

const LoginScreen = ({navigation}: {navigation: any}) => {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const [, setUser] = useContext(UserContext);
  const auth = getAuth();

  const validateInput = () => {
    const emailRegEx =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const validEmail = emailRegEx.exec(email);
    const validPassword = password.length > 8;
    return validEmail && validPassword;
  };

  const handleLogin = () => {
    console.log('Starting logging in');
    if (email && password) {
      signInWithEmailAndPassword(
        auth,
        email.trimStart().trim(),
        password.trimStart().trim(),
      )
        .then(userCredential => {
          // Signed in
          const user = userCredential.user;
          console.log(user.email);
          setUser({
            isLoggedIn: true,
            email: user.email,
          });
        })
        .catch(error => {
          const errorCode = error.code;
          const errorMessage = error.message;
          const errorText =
            'OOPS! there is a problem ' + errorMessage + ' ' + errorCode;
          console.log(errorText);
          setError(errorText);
        });
    }
  };

  return (
    <Center
      bg={{
        linearGradient: {
          colors: ['purple.500', 'violet.800'],
          start: [1, 0],
          end: [0, 1],
        },
      }}
      flex={1}>
      <StatusBar style="light" />
      <Image source={logo} size={'2xl'} />
      <Stack
        direction={{
          base: 'column',
        }}
        space={4}
        marginBottom={'12'}>
        <Input
          onChangeText={text => {
            setEmail(text);
          }}
          type={'text'}
          InputLeftElement={
            <Icon
              as={<MaterialIcons name="mail" />}
              size={5}
              ml="2"
              color="muted.100"
            />
          }
          color="muted.100"
          selectionColor={'muted.200'}
          placeholderTextColor={'muted.300'}
          focusOutlineColor={'muted.100'}
          size="lg"
          width={'260'}
          placeholder="Email"
        />
        <FormControl isRequired>
          <Input
            onChangeText={text => {
              setPassword(text);
            }}
            color={'muted.100'}
            selectionColor={'muted.200'}
            placeholderTextColor={'muted.300'}
            focusOutlineColor={'muted.100'}
            size="lg"
            type={'password'}
            width={'260'}
            type={show ? 'text' : 'password'}
            InputRightElement={
              <Icon
                as={
                  <MaterialIcons
                    name={show ? 'visibility' : 'visibility-off'}
                  />
                }
                size={5}
                mr="2"
                color="muted.100"
                onPress={() => setShow(!show)}
              />
            }
            placeholder="Password"
          />
        </FormControl>
      </Stack>
      <Stack
        direction={{
          base: 'column',
          md: 'column',
        }}
        space={4}>
        <Button
          colorScheme="red"
          isDisabled={!validateInput()}
          size={'lg'}
          width={'260'}
          shadow={8}
          onPress={() => handleLogin()}>
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
