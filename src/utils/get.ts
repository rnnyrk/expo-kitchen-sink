import { Env } from './env';

export const getApiUrl = Env.EXPO_PUBLIC_SITE_URL;

export function getInviteCode(length: number) {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const charactersLength = characters.length;

  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }

  return result;
}

export function getOuraApiUrl() {
  return 'https://api.ouraring.com/v2';
}

export const getHerokuUrl = () => {
  switch (process.env.NODE_ENV) {
    case 'production':
      return 'https://libris-python-app.herokuapp.com';
    case 'test':
      return 'https://libris-python-app.herokuapp.com';
    default:
      return 'https://libris-python-app.herokuapp.com';
  }
};
