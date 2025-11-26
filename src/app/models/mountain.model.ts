export interface Trail {
  name: string;
  distance: string;
  duration: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

export interface MountainDetails {
  description: string;
  imageUrl: string;
  imageAttribution: string;
  latitude: number;
  longitude: number;
  trails: Trail[];
}

export interface Mountain {
  id: number;
  name: string;
  height: number;
  region: string;
  country: string;
  difficulty: 'easy' | 'medium' | 'hard';
  climbed: boolean;
  details: MountainDetails;
}

export interface ClimbedData {
  version: string;
  exportDate: string;
  climbedIds: number[];
}

export type SortColumn = 'name' | 'height' | 'region' | 'country' | 'difficulty' | 'climbed';
export type SortDirection = 'asc' | 'desc';
