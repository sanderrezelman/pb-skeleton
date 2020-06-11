(() => ({
  // Path to Prefab without the .js extension.
  // https://github.com/bettyblocks/cli/wiki/Usage
  name: 'Enter your component name here',
  type: 'Enter the component type (e.g. ROW)',
  allowedTypes: [],
  orientation: 'Set the orientation (e.g. HORIZONTAL/VERTICAL)',
  jsx: Enter your JSX code in here,
  styles: B => theme => {
    const style = new B.Styling(theme);
    return {
      root: {
        // Examples of all style getter methods
        color: ({ options: { color } }) => style.getColor(color),
        fontSize: ({ options: { fontsize } }) => fontsize,
        margin: ({ options: { margin } }) => style.getSpacing(margin),
        fontFamily: ({ options: { font } }) => style.getFontFamily(font),
        fontWeight: ({ options: { font } }) => style.getFontWeight(font),
        textTransform: ({ options: { font } }) => style.getTextTransform(font),
        letterSpacing: ({ options: { font } }) => style.getLetterSpacing(font),
        borderSize: ({ options: { border } }) => style.getBorderSize(border),
        borderRadius: ({ options: { border } }) => style.getBorderRadius(border),
        width: ({ options: { icon } }) => style.getIconSize(icon),
      }
    };
  }
}))();