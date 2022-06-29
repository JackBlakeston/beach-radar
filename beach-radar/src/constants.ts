import { Dimensions } from "react-native";

// STRINGS
export const NO_IMG_URL = 'https://firebasestorage.googleapis.com/v0/b/beach-radar.appspot.com/o/no-img.png?alt=media&token=f989e6d7-a0e0-45fa-ae5e-a2ffdb291f27';
export const SORT = 'Sort'
export const FILTERS = 'Filters'

// DIMENSIONS
export const SCREEN_WIDTH = Dimensions.get('window').width;
export const SCREEN_HEIGHT = Dimensions.get('window').height;

//?? Justified to use Enums here or would it be better with normal constants??
export enum StarTypes {
  EMPTY = 'empty',
  HALF = 'half',
  FULL = 'full',
};

export enum BeachViewCategory {
  WEATHER = 'Weather',
  SEA_CONDITION = 'Sea condition',
  AMENITIES = 'Amenities',
  ACTIVITIES = 'Activities',
  FEATURES = 'Features',
  ACCESSIBILITY = 'Accessibility',
  WILDLIFE = 'Wildlife',
  USER_RATINGS = 'User ratings',
  USER_REVIEWS = 'User reviews',
  LIVE_UPDATEDS = 'Live updates'
};