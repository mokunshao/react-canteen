import { IConfig } from 'umi-types';
import path from 'path';
import { Redirect } from 'react-router';

// ref: https://umijs.org/config/
const config: IConfig = {
  base: '/react-canteen/',
  alias: {
    Assets: path.resolve(__dirname, './src/assets'),
    '@': path.resolve(__dirname, './src/'),
  },
  treeShaking: true,
  history: 'hash',
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    [
      'umi-plugin-react',
      {
        antd: true,
        dva: true,
        dynamicImport: false,
        title: 'react-canteen',
        dll: false,
        routes: {
          exclude: [
            /models\//,
            /services\//,
            /model\.(t|j)sx?$/,
            /service\.(t|j)sx?$/,
            /components\//,
          ],
        },
      },
    ],
    'umi-plugin-gh-pages',
  ],
};

export default config;
