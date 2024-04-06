# expo-kitchen-sink

- Expo
- [`expo-router`](https://expo.github.io/router)

## Notes

- [Expo Router: Docs](https://expo.github.io/router)
- [Expo Router: Repo](https://github.com/expo/router)
- [Expo + Supabase Google Auth](https://blog.spirokit.com/google-authentication-with-expo-supabase)

### Commands

Always

- Update the `BUILD_VERSION` in `env.js` before creating a new build

- Create a build for a simulator

  - iOS `eas build --profile development-simulator --platform ios`
  - Android `eas build --profile development --platform android`

- Create a build for a device

  - iOS `eas device:create` && `eas build --profile development --platform ios`
  - Android `eas build --profile development --platform android`

Connect manually to the development server via `http://127.0.0.1:8081`

### Create Testflight (ACC) / Android App Tester build

- `npm run prebuild:staging`
- `npm run build:staging:ios`
- `npm run build:staging:android`
- `APP_ENV=staging eas submit -p ios`
- `APP_ENV=staging eas submit -p android`

#### Create production build

If logged in to the wrong account

- `npx expo logout`
- `npx expo login`

- `APP_ENV=production eas submit -p ios`

Run on iOS device

- `npx expo run:ios --device`
