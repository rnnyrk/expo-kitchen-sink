import type * as i from 'types';
import { useQuery } from '@tanstack/react-query';

import { supabase } from 'utils';

export async function fetchLocations(): Promise<i.Location[] | null> {
  const { data, error } = await supabase.from('locations').select('*');

  if (error) {
    console.error(error);
    return null;
  }

  return data;
}

export function useGetLocations() {
  return useQuery({
    queryKey: ['locations'],
    queryFn: () => fetchLocations(),
  });
}

export async function fetchLocationById(id: string): Promise<i.Location | null> {
  const { data, error } = await supabase.from('locations').select('*').eq('id', id).single();

  if (error) {
    console.error(error);
    return null;
  }

  return data;
}

export function useGetLocationById(id?: string) {
  return useQuery({
    queryKey: ['location', id],
    queryFn: ({ queryKey }) => fetchLocationById(queryKey[1]!),
    enabled: Boolean(id),
  });
}
