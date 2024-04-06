import type * as i from 'types';
import { useQuery } from '@tanstack/react-query';

import { supabase } from 'utils';

export async function fetchCategories(): Promise<i.Category[] | null> {
  const { data, error } = await supabase.from('categories').select('*');

  if (error) {
    console.error(error);
    return null;
  }

  return data;
}

export function useGetCategories() {
  return useQuery({
    queryKey: ['categories'],
    queryFn: () => fetchCategories(),
  });
}
