/** @type { import('@storybook/react').Preview } */
import '../src/index.css'
const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
      parameters: {
        github: {
          baseURL: "https://github.com/Muthamizhselvan1412/tamil-hacks",
          repository: "tamil-hacks",
          branch: "main",
        }
      },
    },
  },
  globalTypes: {
    theme: {
      description: 'Global theme for components',
      defaultValue: 'dark',
      toolbar: {
        // The label to show for this toolbar item
        title: 'Theme',
        icon: 'circlehollow',
        // Array of plain string values or MenuItem shape (see below)
        items: ['light', 'dark'],
        // Change title based on selected value
        dynamicTitle: true,
      },
    },
  },
};

export default preview;
