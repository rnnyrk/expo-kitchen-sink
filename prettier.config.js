/** @type {import('prettier').Config} */
const config = {
  singleQuote: true,
  singleAttributePerLine: true,
  printWidth: 100,
  importOrder: [
    '^@types$',
    '^(react|react-dom)$',
    '^next(.*)$',
    '<THIRD_PARTY_MODULES>',
    '',
    '^(@env|@rnnyrk|@modules|@common)(/.*|$)',
    '^(@src|@vectors|@images|@utils|@hooks|@queries|@store|@styles|@server|@config|@navigators|@screens|@static)(/.*|$)',
    '',
    '^[./]',
  ],
  plugins: ['@ianvs/prettier-plugin-sort-imports'],
};

module.exports = config;
