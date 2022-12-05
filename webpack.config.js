const webpack = require('webpack');
const path = require('path');

module.exports = {
  mode: 'development',

  entry: {
    main: path.resolve('./src/app.js'),
  },

  output: {
    filename: '[name].js',
    path: path.resolve('./dist'),
  },

  module: {
    rules: [
      // {
      //   // .js로 끝나는 모든 파일을 로더에서 처리하겠다
      //   // 정규표현식에서 .은 모든 문자를 의미하므로 이스케이프 처리 해주어야 함
      //   test: /\.js$/,
      //   use: [
      //     // 위와 일치하는 패턴의 파일이 전달될 로더를 설정합니다.
      //     path.resolve('./myLoader.js'),
      //   ],
      // },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        type: 'asset/inline',
      },
    ],
  },
  plugins: [
    new webpack.BannerPlugin({
      banner: '마지막 빌드 시간은 ' + new Date().toLocaleString() + ' 입니다.',
    }),
  ],
};
