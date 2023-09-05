module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "expo-router/babel",
      [
        "module-resolver",
        {
          root: ["src/"],
          extensions: [".ios.js", ".android.js", ".js", ".json"],
          alias: {
            "@": "./src/",
          },
        },
      ],
    ],
  };
};
