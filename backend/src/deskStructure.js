import S from '@sanity/desk-tool/structure-builder';
import { BsFillInfoCircleFill as infoIcon } from 'react-icons/bs';
import { CgGym as excerciseIcon } from 'react-icons/cg';
import { GiWeightLiftingUp as workoutIcon } from 'react-icons/gi';
import { BsSun as workoutBuilderIcon } from 'react-icons/bs';
import { RiCalendarTodoLine as planIcon } from 'react-icons/ri';
import { BsCardList as courseIcon } from 'react-icons/bs';
import { GoBook as dictionaryIcon } from 'react-icons/go';
import { GrArticle as lessonIcon } from 'react-icons/gr';
export default () =>
  S.list()
    .title('GymTom Course Platform')
    .items([
      // List out the rest of the document types, but filter out the config type
      ...S.documentTypeListItems().filter(
        (listItem) => !['media.tag', 'workout', 'excercise', 'plan', 'course', 'businessDetails', 'hero', 'video', 'alert', 'terminology', 'lesson'].includes(listItem.getId())
      ),
      S.divider(),
      S.listItem()
        .title('Course Builder')
        .icon(workoutBuilderIcon)
        .child(
          S.list()
            .title('Exercises, Workouts & Plans')
            .items([
              S.listItem()
                .title('Exercises')
                .icon(excerciseIcon)
                .child(
                  S.list()
                    .title('Exercises')
                    .items([
                      S.listItem('all')
                        .title('All Exercises')
                        .icon(() => { return "A" })
                        .child(S.documentTypeList('excercise')),
                      S.divider(),
                      S.listItem('chest')
                        .title('Chest')
                        .icon(() => { return "C" })
                        .child(
                          S.documentList()
                            .title('Exercises that Target the Chest')
                            .filter('_type == "excercise" && $muscle in muscles.general')
                            .params({ muscle: "chest" })
                        ),
                      S.listItem('arms')
                        .title('Arms')
                        .icon(() => { return "A" })
                        .child(
                          S.documentList()
                            .title('Exercises that Target the Arms')
                            .filter('_type == "excercise" && $muscle in muscles.general')
                            .params({ muscle: "arms" })
                        ),
                      S.listItem('shoulders')
                        .title('Shoulders')
                        .icon(() => { return "S" })
                        .child(
                          S.documentList()
                            .title('Exercises that Target the Arms')
                            .filter('_type == "excercise" && $muscle in muscles.general')
                            .params({ muscle: "shoulders" })
                        ),
                      S.listItem('back')
                        .title('Back')
                        .icon(() => { return "B" })
                        .child(
                          S.documentList()
                            .title('Exercises that Target the Back')
                            .filter('_type == "excercise" && $muscle in muscles.general')
                            .params({ muscle: "back" })
                        ),
                      S.listItem('stomach')
                        .title('Stomach')
                        .icon(() => { return "A" })
                        .child(
                          S.documentList()
                            .title('Exercises that Target the Stomach')
                            .filter('_type == "excercise" && $muscle in muscles.general')
                            .params({ muscle: "stomach" })
                        ),
                      S.listItem('legs')
                        .title('Legs')
                        .icon(() => { return "L" })
                        .child(
                          S.documentList()
                            .title('Exercises that Target the Legs')
                            .filter('_type == "excercise" && $muscle in muscles.general')
                            .params({ muscle: "legs" })
                        ),
                      S.divider(),
                      S.listItem('deltoids')
                        .title('Deltoids')
                        .icon(() => { return "D" })
                        .child(
                          S.documentList()
                            .title('Exercises that Target Biceps')
                            .filter('_type == "excercise" && $muscle in muscles.primary')
                            .params({ muscle: "deltoids" })
                        ),
                      S.listItem('biceps')
                        .title('Biceps')
                        .icon(() => { return "B" })
                        .child(
                          S.documentList()
                            .title('Exercises that Target Biceps')
                            .filter('_type == "excercise" && $muscle in muscles.primary')
                            .params({ muscle: "biceps" })
                        ),
                      S.listItem('triceps')
                        .title('Triceps')
                        .icon(() => { return "T" })
                        .child(
                          S.documentList()
                            .title('Exercises that Target Biceps')
                            .filter('_type == "excercise" && $muscle in muscles.primary')
                            .params({ muscle: "triceps" })
                        ),
                      S.listItem('pectorals')
                        .title('Pectorals')
                        .icon(() => { return "P" })
                        .child(
                          S.documentList()
                            .title('Exercises that Target Biceps')
                            .filter('_type == "excercise" && $muscle in muscles.primary')
                            .params({ muscle: "pectorals" })
                        ),
                      S.listItem('forearms')
                        .title('Forearms')
                        .icon(() => { return "F" })
                        .child(
                          S.documentList()
                            .title('Exercises that Target Biceps')
                            .filter('_type == "excercise" && $muscle in muscles.primary')
                            .params({ muscle: "foreArms" })
                        ),
                      S.listItem('sideabs')
                        .title('Side Abs')
                        .icon(() => { return "S" })
                        .child(
                          S.documentList()
                            .title('Exercises that Target Biceps')
                            .filter('_type == "excercise" && $muscle in muscles.primary')
                            .params({ muscle: "sideAbs" })
                        ),
                      S.listItem('abdominals')
                        .title('Abdominals')
                        .icon(() => { return "A" })
                        .child(
                          S.documentList()
                            .title('Exercises that Target Biceps')
                            .filter('_type == "excercise" && $muscle in muscles.primary')
                            .params({ muscle: "abdominals" })
                        ),
                      S.listItem('quadriceps')
                        .title('Quadriceps')
                        .icon(() => { return "Q" })
                        .child(
                          S.documentList()
                            .title('Exercises that Target Biceps')
                            .filter('_type == "excercise" && $muscle in muscles.primary')
                            .params({ muscle: "quadriceps" })
                        ),
                      S.listItem('trapezius')
                        .title('Trapezius')
                        .icon(() => { return "T" })
                        .child(
                          S.documentList()
                            .title('Exercises that Target Biceps')
                            .filter('_type == "excercise" && $muscle in muscles.primary')
                            .params({ muscle: "trapezius" })
                        ),
                      S.listItem('tibialisAnterior')
                        .title('TibialisAnterior')
                        .icon(() => { return "T" })
                        .child(
                          S.documentList()
                            .title('Exercises that Target Biceps')
                            .filter('_type == "excercise" && $muscle in muscles.primary')
                            .params({ muscle: "tibialisAnterior" })
                        ),
                      S.listItem('glutes')
                        .title('Glutes')
                        .icon(() => { return "G" })
                        .child(
                          S.documentList()
                            .title('Exercises that Target Biceps')
                            .filter('_type == "excercise" && $muscle in muscles.primary')
                            .params({ muscle: "glutes" })
                        ),
                      S.listItem('hamstrings')
                        .title('Hamstrings')
                        .icon(() => { return "H" })
                        .child(
                          S.documentList()
                            .title('Exercises that Target Biceps')
                            .filter('_type == "excercise" && $muscle in muscles.primary')
                            .params({ muscle: "hamstrings" })
                        ),
                      S.listItem('calves')
                        .title('Calves')
                        .icon(() => { return "C" })
                        .child(
                          S.documentList()
                            .title('Exercises that Target Biceps')
                            .filter('_type == "excercise" && $muscle in muscles.primary')
                            .params({ muscle: "calves" })
                        ),
                      S.listItem('lats')
                        .title('Lats')
                        .icon(() => { return "L" })
                        .child(
                          S.documentList()
                            .title('Exercises that Target Biceps')
                            .filter('_type == "excercise" && $muscle in muscles.primary')
                            .params({ muscle: "lats" })
                        ),
                    ])),
              S.listItem().title('Workouts').child(S.documentTypeList('workout')).title('Workouts').icon(workoutIcon),
              S.listItem()
                .title('Workout Plans')
                .child(S.documentTypeList('plan'))
                .icon(planIcon),
              S.listItem()
                .title('Courses')
                .child(S.documentTypeList('course'))
                .icon(courseIcon),
              S.listItem()
                .title('Theory Lessons')
                .child(S.documentTypeList('lesson'))
                .icon(lessonIcon),
              S.divider(),
              S.listItem()
                .title('Terminology Dictionary')
                .child(S.documentTypeList('terminology'))
                .icon(dictionaryIcon),
            ]),
        ),
      S.divider(),
      S.listItem()
        .title('GymTom Info')
        .icon(infoIcon)
        .child(S.document()
          .schemaType('businessDetails')
          .documentId('companyInfo')),
    ]);
