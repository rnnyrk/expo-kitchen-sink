import type * as i from 'types';

import { useGetCategories } from 'queries/categories';
import { useGetLocations } from 'queries/locations';

export function useFormattedLocations(): i.FormattedLocation[] | null {
  const { data: categories } = useGetCategories();
  const { data: locations } = useGetLocations();

  if (!locations || !categories) return null;

  return locations.map((location) => {
    return {
      ...location,
      categories: location.categories.map((id) => {
        return categories.find((c) => c.id === id)!;
      }),
    };
  });
}
