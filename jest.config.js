// eslint-disable-next-line no-undef
module.exports = {
  preset: 'ts-jest/presets/js-with-babel',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^@root/(.*)': '<rootDir>/src/$1',
  },
  moduleFileExtensions: ['ts', 'js'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.js$': 'babel-jest',
  },
  // All modules within the /node_modules directory which are transpiled into es6+ syntax
  // must be listed in the array below
  // e.g. transformIgnorePatterns: ['node_modules/(?!sort-keys|is-plain-obj)'],
  // where 'sort-keys' and 'is-plain-obj' are npm modules which are transpiled into es6+ syntax
  // and therefore they cannot be handled by Jest.
};
