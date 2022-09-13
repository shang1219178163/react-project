// import React from 'react'
// import { RouteConfig } from 'react-router-config';
// import { useRoutes } from 'react-router-config';

import { useRoutes } from 'react-router-dom';

import {
  Home, About, Unknown, Electronics,  Mobile, Desktop,  Laptop
} from '../views/pages.js'
import Root from '../App.js'

const routes = [
  {
    component: Root,
    routes: [
      {
        path: '/',
        label: '首页',
        exact: true,
        component: Home
      },
      {
        path: '/about',
        label: '关于',
        exact: true,
        component: About
      },
      {
        path: '/unknown',
        label: '书籍',
        component: Unknown
      },
      {
        path: '/elec',
        label: '商城',
        component: Electronics,
        routes: [
          {
            path: '/elec/mobile',
            label: '移动',
            component: Mobile
          },
          {
            path: '/elec/desktop',
            label: '桌面',
            component: Desktop
          },
          {
            path: '/elec/laptop',
            label: '笔记本',
            component: Laptop
          }
        ]
      }
    ]
  }
];

// const routes = () => {
//   return useRoutes(routes);
// }

export default routes;
