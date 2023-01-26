import { GiWeightLiftingUp as icon } from 'react-icons/gi';
export default {
  title: "Set",
  name: "set",
  type: "object",
  icon,
  fields: [
    {
      Title: 'Type of set',
      name: 'setType',
      type: 'string',
      options: {
        list: [
          { title: 'Standard Set', value: 'standard' },
          { title: 'Super Set', value: 'super' },
          { title: 'Drop Set', value: 'drop' },
          { title: 'Giant Set', value: 'giant' },
          { title: 'Circuit Set', value: 'circuit' },
        ],
        layout: 'dropdown',
        direction: 'horizontal'
      }
    },
    {
      title: 'Set Repetitions (how many times should this set be performed?)',
      name: 'setRepetitions',
      type: 'number',
    },
    {
      name: 'setExcercise',
      type: 'array',
      of: [
        { type: 'setExcercise' }
      ],
    },
  ],
  initialValue: {
    setRepetitions: 2,
    setType: 'standard'
  }

}