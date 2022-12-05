const webpack = require('webpack');
const path = require('path');
const childProcess = require('child_process');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
require('dotenv').config();

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
      banner: `
    Commit version : ${childProcess.execSync('git rev-parse --short HEAD')}
    Committer : ${childProcess.execSync('git config user.name')}
    Commit Date : ${new Date().toLocaleString()}
`,
    }),
    new webpack.DefinePlugin({
      // 외부에 노출되면 안되는 비밀번호
      pw: 123456,
      // 이제 pw는 환경변수가 됨! 어플리케이션 내에서 어디서든 접근이 가능하다.
      dev: JSON.stringify(process.env.DEV_API), // 혹은 "'https://dev.api.com'"
      pro: JSON.stringify(process.env.PRO_API),
    }),
    new HtmlWebpackPlugin({
      // 목표 html 파일의 위치
      template: './src/index.html',
    }),
    new CleanWebpackPlugin(),
    // dist 폴더에 있던 필요없는 이미지 파일이 제거됨
  ],
};
