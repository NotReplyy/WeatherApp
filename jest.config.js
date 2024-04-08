export default {
  testEnvironment: "jsdom",
  testMatch: [
    "**/__tests__/**/*.[jt]s?(x)",
    "**/?(*.)+(spec|test|tests).[tj]s?(x)",
  ],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        diagnostics: {
          ignoreCodes: [1343],
        },
        astTransformers: {
          before: [
            {
              path: 'node_modules/ts-jest-mock-import-meta',
              options: {
                metaObjectReplacement: {
                  env: {
                    VITE_APP_API_URL: 'https://example.com/api',
                    VITE_APP_API_FIND: 'https://example.com/find',
                    VITE_WEATHER_API_KEY: 'your-api-key'
                  },
                },
              },
            },
          ],
        },
      },
    ],
  },
  moduleDirectories: ["node_modules", "src"],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
  fakeTimers: {'enableGlobally': true}
};
