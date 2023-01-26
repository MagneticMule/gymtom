export default {
  type: 'object',
  name: 'setExcercise',
  fields: [
    { title: 'Excercise', name: 'excerciseReference', type: 'reference', to: { type: 'excercise' } },
    {
      type: 'repFields',
      name: 'repFields'
    }
  ],
  preview: {
    select: {
      title: 'excerciseReference.excerciseName',
      minReps: 'repFields.minReps',
      maxReps: 'repFields.maxReps',
      image: 'excerciseReference.cover.asset'
    },
    prepare(selection) {
      const { title, minReps, maxReps, image } = selection;
      return {
        title: `${title} | ${minReps} - ${maxReps} Repetitions`,
        media: image
      }
    }
  },
}