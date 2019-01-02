// module.exports is not ES6.  It's from common JS.
module.exports = {
  // starting file for client-side JS application
  entry: ["babel-polyfill", "./source/client.js"],
  output: {
    path: "/c/users/quoc_/source/repos/react-reusable/001-component/public",
    filename: "index.js"
  },
  mode: "development",
  // dev server configuration... set the following:
  // inline, base content folder, and port
  devServer: {
    inline: true, // server will refresh and recompile and refresh browser on any file change
    contentBase: "./public", // web root folder
    port: 3000
  },
  module: {
    rules: [
      {
        test: /\.js$/, // any file with .js extension
        loader: "babel-loader", // use babel loader with .js files to allow use of different versions of JS
        query: {
          // query contains parameters that will be sent in to babel
          cacheDirectory: true,
          presets: ["es2015", "react"] // the suffices of babel-preset-[suffix]
        }
      }
    ]
  }
};
