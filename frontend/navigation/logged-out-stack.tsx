import LoginScreen from '../screens/login-screen';

const LoggedOutStack = ({Stack}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default LoggedOutStack;
