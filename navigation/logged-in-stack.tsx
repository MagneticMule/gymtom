import WorkoutListScreen from '../screens/workouts-list-screen';
import WorkoutScreen from '../screens/workout-screen';
import SetListScreen from '../screens/sets-screen';
import HistoryScreen from '../screens/history-screen';

const LoggedInStack = ({Stack}) => {
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
