module.exports = {
    module: {
      rules: [
        {
            test: /\.less$/,
            use: [{
                loader: "style-loader"
            }, {
                loader: "css-loader"
            }, {
                loader: "less-loader"
            }]
          }
        // {
        //   test: /\.less$/i,
        //   loader: [
        //     // compiles Less to CSS
        //     "style-loader",
        //     "css-loader",
        //     "less-loader",
        //   ],
        // },
      ],
    },
  }