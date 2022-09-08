const path = require("path");

module.exports = {
  webpack: (config, { webpack }) => {
    config.plugins.push(
      new webpack.IgnorePlugin({
        resourceRegExp: /^electron$/,
      })
    );
    return config;
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};
