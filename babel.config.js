module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: './',
        extensions: ['.ios.js', '.android.js', '.ts', ',tsx', '.js', '.json'],
        alias: {
          '^@/(.+)': ([, name]) => `./src/${name}`,
        },
      },
    ],
    'nativewind/babel',
  ],
};
