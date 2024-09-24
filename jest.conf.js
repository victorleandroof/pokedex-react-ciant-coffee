module.exports = {
  roots: ["<rootDir>/src"],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest"
  },
  setupFilesAfterEnv: [
    "@testing-library/jest-dom/extend-expect"
  ],
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.jsx?$",
  moduleFileExtensions: ["js", "jsx", "json", "node"],
  verbose: true,
  clearMocks: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  moduleDirectories: ["node_modules", "src"],
  testEnvironment: "jsdom",
  moduleNameMapper: {
    '^axios$': 'axios/dist/node/axios.cjs',
     "\\.(css|less|scss|sass)$": "<rootDir>/styleMock.js"
  },
  bail: true,
  testMatch: ["**/*.spec.js"],
  transformIgnorePatterns: [
    "/node_modules/(?!axios)"
  ],
};
