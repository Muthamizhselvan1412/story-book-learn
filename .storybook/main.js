/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const config = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y", //👈 The a11y addon goes here
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  staticDirs: ["../public"],
    storybook: {
      "url": "https://6548cf222cb82a0237bc844b-oxlmmulhnq.chromatic.com"
    }
  
};
// const path = require('path');
// const tailwindConfigPath = path.join(__dirname, '../tailwind.config.js'); // or your own config file
// require(tailwindConfigPath)
//   .default(tailwindConfigPath);
  
export default config;
