export type todoType = any;

export interface Beach {
  lat: number;
  lon: number;
  name: string;
  location: string;
  distance: number;
  score: number;
  surroundings: Surrounding;
  size: Size;
  terrain: Terrain;
  pictures?: string[];
  weather?: Weather;
  seaCondition?: SeaCondition;
  amenities?: Amenity[];
  activities?: RatedActivity[];
  features?: Feature[];
  accessibility?: Accessibility;
  wildlife?: Wildlife;
  userRatings?: UserRating[];
  userReviews?: UserReview[];
};

export interface Weather {
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

export interface SeaCondition {
  avgTemp: number;
  waveHeight: number;
  waveDirection: number; // TODO check this in API
  waveInterval: number;
  highTide: string;
  lowTide: string;
};

export interface RatedActivity {
  activity: Activity;
  rating: number;
};

export interface Wildlife {
  fauna: string;
  flora: string;
  aquaticFauna: string;
};

export interface UserRating {
  category: RatingCategory;
  rating: number;
};

export interface UserReview {
  username: string;
  rating: number;
  reviewText: string;
};

export type Surrounding = 'urban' | 'rural';

export type Size = 'long' | 'short' | 'cove';

export type Terrain = 'sand' | 'small pebbles' | 'large pebbles' | 'boulders' | 'volcanic' | 'rocks' | 'mud' | 'concrete';

export type Amenity = 'parking' | 'bike parking' | 'showers' | 'toilets' | 'bars and restaurants' | 'water parks' | 'water activity rentals' | 'pedalo rental' | 'exercise machines' | 'playground' | 'volleyball' | 'beach chair rental' | 'jumping platforms' | 'shops' | 'grills' | 'picnic tables';

export type Activity = 'snorkeling' | 'scuba' | 'surf' | 'windsurf' | 'kitesurf' | 'paddlesurf' | 'fishing' | 'kayaking';

export type Feature = 'dog friendly' | 'lifeguard' | 'blue flag' | 'black flag' | 'nudist' | 'natural reserve' | 'palm trees' | 'caves' | 'cliffs';

export type Accessibility = 'beach ramp' | 'close to parking' | 'accessible parking';

export type RatingCategory = 'general' | 'cleanliness' | 'accessibility' | 'nature' | 'water quality';