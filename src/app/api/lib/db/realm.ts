import Realm from 'realm';
import {
  bookmarksSchema,
  course_topicsSchema,
  coursesSchema,
  courses_languagesSchema,
  feed_backSchema,
  languagesSchema,
  preferencesSchema,
  programsSchema,
  schoolSchema,
  schoolsSchema,
  settingsSchema,
  user_permissionsSchema,
  user_rolesSchema,
} from './schema';

export const realmApp = new Realm.App({
  id: process.env.REALM_APP_ID as string,
});

export const realm = Realm.open({
  schema: [
    bookmarksSchema,
    course_topicsSchema,
    coursesSchema,
    courses_languagesSchema,
    feed_backSchema,
    languagesSchema,
    schoolSchema,
    schoolsSchema,
    preferencesSchema,
    settingsSchema,
    user_permissionsSchema,
    user_rolesSchema,
    programsSchema,
  ],
  inMemory: true,
});
