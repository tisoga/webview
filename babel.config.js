module.exports = {
  presets: ['module:@react-native/babel-preset', 'module:react-native-dotenv'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          '@components': './src/_components',
        },
      },
    ],
  ],
}
