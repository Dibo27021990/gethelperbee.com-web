// lib/i18n.js
const path = require('path');

module.exports = {
  i18n: {
    defaultLocale: 'de',
    locales: ['de', 'en'],
  },
  localePath: path.resolve('./public/locales'),
};
