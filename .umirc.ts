import { IConfig } from 'umi-types';
import path from 'path';
import { Redirect } from 'react-router';

// ref: https://umijs.org/config/
const config: IConfig = {
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
  ],
  // routes: [
  //   {
  //     path: '/',
  //     component: '../layouts',
  //     routes: [
  //       { path: '/' },
  //       { path: '/home', component: './Home' },
  //       { path: '/menu', component: './Menu' },
  //       { path: './admin', component: './Admin' },
  //       {
  //         path: './about/:section',
  //         component: './About',
  //         routes: [
  //           { path: '/about' },
  //           { path: '/about/history' },
  //           { path: '/about/docs' },
  //           { path: '/about/delivery' },
  //           {
  //             path: '/about/contact/:method',
  //             routes: [
  //               { path: '/about/contact', redirect: '/about/contact/phone' },
  //               { path: '/about/contact/phone' },
  //               { path: '/about/contact/address' },
  //             ],
  //           },
  //         ],
  //       },
  //       { path: './register', component: './Register' },
  //       { path: './login', component: './Login' },
  //     ],
  //   },
  // ],
};

export default config;
