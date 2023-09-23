module.exports = {
  "*.{js,jsx,ts,tsx,json,css,html}": ["prettier --write"],
  "*.{js,ts,tsx}": [
    "yarn eslint . --ext .ts,.tsx --fix",
    // 'jest --bail --findRelatedTests --passWithNoTests',
  ],
  "**/*.ts": () => "yarn typecheck",
};
