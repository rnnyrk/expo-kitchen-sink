module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo', '@babel/typescript'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./'],
          alias: {
            common: ['src/components/common'],
            'common/*': ['src/components/common/*'],
            modules: ['src/components/modules'],
            'modules/*': ['src/components/modules/*'],
            utils: ['src/utils'],
            'utils/*': ['src/utils/*'],
            hooks: ['src/utils/hooks'],
            'hooks/*': ['src/utils/hooks/*'],
            queries: ['src/queries'],
            'queries/*': ['src/queries/*'],
            client: ['src/queryClient'],
            images: ['src/assets/images'],
            'images/*': ['src/assets/images/*'],
            fonts: ['src/assets/fonts'],
            'fonts/*': ['src/assets/fonts/*'],
            store: ['src/store'],
            'store/*': ['src/store/*'],
            styles: ['src/styles'],
            'styles/*': ['src/styles/*'],
            env: ['src/utils/env'],
            types: ['src/types'],
          },
          extensions: [
            '.ios.ts',
            '.android.ts',
            '.ts',
            '.ios.tsx',
            '.android.tsx',
            '.tsx',
            '.jsx',
            '.js',
            '.json',
          ],
        },
      ],
      'react-native-reanimated/plugin',
      'babel-plugin-styled-components',
    ],
  };
};
