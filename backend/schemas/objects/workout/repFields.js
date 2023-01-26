
export default {
  type: 'object',
  name: 'repFields',
  title: 'Exercise Repetitions',
  options: {
    columns: 2
  },
  fieldsets: [
    { name: 'excerciseRepetitionsFieldSet' }
  ],
  fields: [
    { title: 'Minimum Number of Repetitions', name: 'minReps', type: 'number' },
    { title: 'Maximum Number of Repetitions', name: 'maxReps', type: 'number' },
    {
      title: 'Time this exercise should be performed (in seconds)', name: 'time', type: 'number',
      options: {
        placeholder: "Enter a time in seconds"
      }
    },
  ],
  initialValue: {
    minReps: 10,
    maxReps: 12,
    time: 60
  }
}