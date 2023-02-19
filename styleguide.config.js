const path = require("path");
module.exports = {
  styleguideComponents: {
    Wrapper: path.join(__dirname, "./reduxStyleguide.jsx"),
  },
  require: ["babel-polyfill", path.join(__dirname, "./output.css")],
  components: "src/components/**/*.tsx",
  propsParser: require("react-docgen-typescript").withCustomConfig(
    "./tsconfig.json"
  ).parse,
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: "ts-loader",
        },
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: "babel-loader",
        },
        {
          test: /\.svg$/,
          use: [
            {
              loader: "svg-url-loader",
              options: {
                limit: 8192, // in bytes
                name: "[name].[hash:7].[ext]",
                outputPath: "images/",
                publicPath: "/images/",
              },
            },
          ],
        },
        {
          test: /\.(png|jpe?g|gif)$/i,
          use: [
            {
              loader: "url-loader",
              options: {
                limit: 8192,
                fallback: "file-loader",
                name: "[name].[hash:7].[ext]",
                outputPath: "images/",
                publicPath: "/images/",
              },
            },
          ],
        },
        {
          test: /\.scss$/,
          use: ["sass-loader", "style-loader", "css-loader"],
          exclude: /node_modules/,
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"],
          exclude: /node_modules/,
        },
      ],
    },
  },
};
