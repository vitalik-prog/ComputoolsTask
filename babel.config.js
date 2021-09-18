module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'babel-plugin-root-import',
        {
          rootPathPrefix: 'src',
          rootPathSuffix: 'src'
        }
      ],
      ['module:react-native-dotenv', {
        'moduleName': '@env',
        'path': '.env',
        'blocklist': null,
        'allowlist': null,
        'safe': false,
        'allowUndefined': true,
        'verbose': false
      }]
    ]
  };
};
