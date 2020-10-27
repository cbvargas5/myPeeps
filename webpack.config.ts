import path from "path";
import webpack from "webpack";

const config: webpack.Configuration = {
  entry: "./client/src/index.tsx",
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              "@babel/preset-typescript",
            ],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    path: path.resolve(__dirname, "client/dist"),
    filename: "bundle.js",
  },
  devServer: {
    contentBase: path.join(__dirname, "client/dist"),
    compress: true,
    port: 4000,
  },
};

export default config;