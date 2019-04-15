import { IConfig } from 'umi-types';

// ref: https://umijs.org/config/
const config: IConfig = {
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
  routes: [
    {
      path: '/',
      component: '../layouts',
      routes: [
        { path: '/', redirect: '/home' },
        { path: '/home', component: './Home' },
        { path: '/menu', component: './Menu' },
        { path: './admin', component: './Admin' },
        {
          path: './about',
          component: './About',
          routes: [
            { path: '/about/history', component: './About/History' },
            { path: '/about/docs', component: './About/Docs' },
            { path: '/about/delivery', component: './About/Delivery' },
            { path: '/about/contact', component: './About/Contact' },
          ],
        },
        { path: './register', component: './Register' },
        { path: './login', component: './Login' },
      ],
    },
  ],
};

export default config;
