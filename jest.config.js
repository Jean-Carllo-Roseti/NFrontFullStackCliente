/* eslint-disable no-undef */
module.exports = {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest'
  },
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node'],
  transformIgnorePatterns: [
    '<rootDir>/node_modules/(?!axios)' // Permite que o Axios seja transformado
  ]
}
