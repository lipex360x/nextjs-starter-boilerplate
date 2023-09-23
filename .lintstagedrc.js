module.exports = {
  "*.{js,jsx,ts,tsx,json,css,html}": ["prettier --write"],
  "*.{js,ts,tsx}": [
    "eslint . --ext .ts,.tsx --fix",
    // 'jest --bail --findRelatedTests --passWithNoTests',
  ],
  "**/*.ts": () => "yarn typecheck",
};
