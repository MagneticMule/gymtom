// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

// => object schemas
import businessDetails from './objects/businessDetails';
import hero from './objects/hero';
import cta from './objects/cta';
import heroTitle from './objects/heroTitle';
import news from './objects/news';

import set from './objects/set';
import social from './objects/social';
import staffMember from './objects/staffMember';
import video from './objects/video';

import client from './objects/client';
import membership from './objects/membership';
import instagram from './objects/instagram';
import alert from './objects/alert';
import fitnessClass from './objects/fitnessClass';

// => blog
import bodyPortableText from './objects/blog/bodyPortableText';
import bioPortableText from './objects/blog/bioPortableText';
import excerptPortableText from './objects/blog/excerptPortableText';
import mainImage from './objects/blog/mainImage';
import authorReference from './objects/blog/authorReference';

// => workout
import workout from './documents/workout';
import course from './documents/course';
import plan from './documents/plan';
import muscleGroup from './objects/workout/muscleGroup';
import setExcercise from './objects/workout/setExcercise';
import planBuilder from './objects/workout/planBuilder';
import setBuilder from './objects/workout/setBuilder';
import excercise from './objects/excercise';
import repFields from './objects/workout/repFields';
import target from './objects/target';
import terminology from './documents/terminology';
import lesson from './documents/lesson';

// document schemas
import page from './documents/page';
// import shop from './documents/shop';

// => blog
import post from './documents/blog/post';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    staffMember,
    client,
    page,
    businessDetails,
    hero,
    heroTitle,
    cta,
    news,
    membership,

    video,
    social,

    instagram,
    alert,
    fitnessClass,

    // blog
    post,
    mainImage,
    authorReference,
    bodyPortableText,
    bioPortableText,

    // workout
    course,
    workout,
    plan,
    set,
    excercise,
    muscleGroup,
    target,
    planBuilder,
    setExcercise,
    setBuilder,
    repFields,
    terminology,
    lesson
  ]),
});
