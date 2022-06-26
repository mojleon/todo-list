module.exports = {
  target: "node",
  mode: "development",
  module: {
    rules: [{ test: /\.exe$/i, use: "raw-loader" }],
  },
};
