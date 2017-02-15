module.exports = {
  entry: "./js/index.js",
  devtool: "source-map",
  output: {
      path: "./public/dist",
      filename: "bundle.js"
  },
module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader?presets[]=es2015&presets[]=react'
        },
        {
          test: /\.scss/,
          exclude: /node_modules/,
          loader: 'style!css?modules&importLoaders=2&sourceMap&localIdentName=[local]___[hash:base64:5]!autoprefixer?browsers=last 2 version!sass?outputStyle=expanded&sourceMap&includePaths[]=node_modules/compass-mixins/lib'
        },
        {
          test: /\.css$/,
          loader: 'style-loader!css-loader'
        },
      ]
    }
}
