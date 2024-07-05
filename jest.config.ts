import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  verbose: true,
  testEnvironment: "node",
  testMatch: ["**/__tests__/**/*.test.ts"],
  transform: {
    "^.+\\.ts?$": "ts-jest",
  },
  moduleFileExtensions: ["js", "ts"],
  setupFilesAfterEnv: ["<rootDir>/src/__tests__/setup.ts"], // add this line
  globals: {
    "ts-jest": {
      tsconfig: "./tsconfig.json",
    },
  },
};

export default config;
