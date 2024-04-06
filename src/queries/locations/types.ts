import type * as i from 'types';

export type Location = {
  id: string;
  title: string;
  description?: string;
  lat: number;
  long: number;
  is_reviewed: boolean;
  categories: string[];
  subcategories?: string[];
  address: string;
};

export type FormattedLocation = Omit<Location, 'categories'> & {
  categories: i.Category[];
};

export type LocationFeature = GeoJSON.Feature & {
  id: string;
  text_nl: string;
  place_name_nl: string;
  center: [lat: number, long: number];
  address?: string;
};
