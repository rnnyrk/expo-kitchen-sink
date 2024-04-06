import qs from 'qs';

export const fetcher = <T = any>(
  path: string,
  options?: RequestInit & {
    type?: 'default' | 'mapbox';
  },
  query?: any,
  json?: boolean,
): Promise<T | void> => {
  const endpoint = options?.type === 'mapbox' ? 'https://api.mapbox.com/geocoding/v5' : '';

  let formatAsJson = true;
  if (json === false) formatAsJson = false;

  return new Promise((resolve, reject) => {
    fetch(`${endpoint}${path}${query ? `?${qs.stringify(query)}` : ''}`, options)
      .then(async (response) => {
        console.log({ response });

        if (response.ok) {
          if (response.ok) {
            if (response.status === 204) resolve();
            if (formatAsJson) return response.json();
            return response.text();
          }
        }

        return Promise.reject(response.json());
      })
      .then((json) => {
        resolve(json);
      })
      .catch((json) => {
        reject(json);
      });
  });
};
