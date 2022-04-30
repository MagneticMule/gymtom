import {createStackNavigator} from '@react-navigation/stack';
import WorkoutListScreen from '../screens/workouts';
import WorkoutScreen from '../screens/workout';
import SetListScreen from '../screens/sets';
import HistoryScreen from '../screens/history';

const LoggedInStack = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Workouts"
        component={WorkoutListScreen}
        options={{
          title: 'Workouts',
        }}
      />
      <Stack.Screen
        name="Workout"
        component={WorkoutScreen}
        options={{
          title: 'Workout',
        }}
      />
      <Stack.Screen
        name="Sets"
        component={SetListScreen}
        options={{
          title: 'SetList',
        }}
      />
      <Stack.Screen
        name="Progress"
        component={HistoryScreen}
        options={{
          title: 'Progress',
        }}
      />
      {/* <Stack.Screen
          name="Signup"
          component={SignupForm}
          options={{
            title: 'All about you',
          }}
        /> */}
    </Stack.Navigator>
  );
};

export default LoggedInStack;
