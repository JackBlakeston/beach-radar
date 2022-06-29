import { BeachViewCategory } from "./constants";

export type todoType = any;

// INTERFACES

export interface IBeach {
  coordinates: ICoordinates
  name: string;
  location: string;
  distance: number;
  score: number;
  surroundings: TSurrounding;
  size: TSize;
  terrain: TTerrain;
  images?: string[];
  weather?: IWeather;
  seaCondition?: ISeaCondition;
  amenities?: TAmenity[];
  activities?: IRatedActivity[];
  features?: TFeature[];
  accessibility?: TAccessibility;
  wildlife?: IWildlife;
  userRatings?: IUserRating[];
  userReviews?: IUserReview[];
};

export interface ICoordinates {
  lat: number;
  lon: number;
}

export interface IWeather {
  description: string;
  avgTemp: number;
  minTemp: number;
  maxTemp: number;
  uvIndex: string;
  rainChance: number;
  rainLevel: number;
  windSpeed: number;
  windDirection: number; // TODO check this in API
};

export interface ISeaCondition {
  avgTemp: number;
  waveHeight: number;
  waveDirection: number; // TODO check this in API
  waveInterval: number;
  highTide: string;
  lowTide: string;
};

export interface IRatedActivity {
  activity: TActivity;
  rating: number;
};

export interface IWildlife {
  fauna: string;
  flora: string;
  aquaticFauna: string;
};

export interface IUserRating {
  category: TRatingCategory;
  rating: number;
};

export interface IUserReview {
  username: string;
  rating: number;
  reviewText: string;
};

export interface IAccordionSection {
  title: BeachViewCategory;
  content: JSX.Element;
};

// TYPES

export type TSurrounding = 'urban' | 'rural';

export type TSize = 'long' | 'short' | 'cove';

export type TTerrain = 'sand' | 'small pebbles' | 'large pebbles' | 'boulders' | 'volcanic' | 'rocks' | 'mud' | 'concrete';

export type TAmenity = 'parking' | 'bike parking' | 'showers' | 'toilets' | 'bars and restaurants' | 'water parks' | 'water activity rentals' | 'pedalo rental' | 'exercise machines' | 'playground' | 'volleyball' | 'beach chair rental' | 'jumping platforms' | 'shops' | 'grills' | 'picnic tables';

export type TActivity = 'snorkeling' | 'scuba' | 'surf' | 'windsurf' | 'kitesurf' | 'paddlesurf' | 'fishing' | 'kayaking';

export type TFeature = 'dog friendly' | 'lifeguard' | 'blue flag' | 'black flag' | 'nudist' | 'natural reserve' | 'palm trees' | 'caves' | 'cliffs';

export type TAccessibility = 'beach ramp' | 'close to parking' | 'accessible parking';

export type TRatingCategory = 'general' | 'cleanliness' | 'accessibility' | 'nature' | 'water quality';

export type TStar = 'empty' | 'half' | 'full';