export default {
  name: 'setBuilder',
  title: 'Set Builder',
  type: 'object',
  fields: [
    { title: 'Set', name: 'set', type: 'set' },
  ],
  preview: {
    select: {
      excercise1: 'set.setExcercise.0.excerciseReference.excerciseName',
      excercise2: 'set.setExcercise.1.excerciseReference.excerciseName',
      excercise3: 'set.setExcercise.2.excerciseReference.excerciseName',
      excercise4: 'set.setExcercise.3.excerciseReference.excerciseName',
      setType: 'set.setType',
      image: 'set.setExcercise.0.excerciseReference.cover.asset'
    },
    prepare: ({ excercise1, excercise2, excercise3, excercise4, setType, image }) => {
      const excercises = [excercise1, excercise2, excercise3, excercise4]
        .filter((x) => x !== undefined);

      const subtitle = excercises.length > 0 ? `${excercises.join(' | ')}` : ' ';

      const hasMoreExcercises = Boolean(excercise3);
      
      return {
        title: setType.charAt(0).toUpperCase() + setType.substring(1) + ` Set`,
        subtitle: Boolean(excercise3) ? `${subtitle}...` : subtitle,
        media: image
      }
    }
  },
}