const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader"
        },
        exclude: /node_modules/
      },
      {
        test: /\.(gif|png|jpg|jpeg|svg|woff|woff2|ott|eot|ttf)$/,
        use: {
          loader: "file-loader"
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html",
      showErrors: true
    })
  ],
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    port: 3000,
    stats: "minimal",
    proxy: [
      {
        path: "**",
        target: "http://localhost:9000",
        changeOrigin: true,
        secure: false
      }
    ]
  }
};
