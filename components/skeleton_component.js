(() => ({
  // Path to Prefab without the .js extension.
  // https://github.com/bettyblocks/cli/wiki/Usage
  name: 'Enter your component name here',
  type: 'Enter the component type (e.g. ROW)',
  allowedTypes: [],
  orientation: 'Set the orientation (e.g. HORIZONTAL/VERTICAL)',
  jsx: Enter your JSX code in here,
  styles: B => ({ typography }) => ({
    root: {
      Fill in your different styles in here
    },
  }),
}))();
