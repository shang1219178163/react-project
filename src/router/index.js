// import React from 'react';
// import { RouteConfig } from 'react-router-config';
// import { useRoutes } from 'react-router-config';
// import { useRoutes } from 'react-router-dom';
// import {Route} from 'react-router-dom';

import {
  Mall,  Mobile, Desktop,  Laptop
} from '../views/pages.js';

import Home from '../views/home';
import About from '../views/about';
import Unknown from '../views/unknown';

// import Root from '../App.js'

export const routes = [
  {
    path: '/',
    label: '首页',
    exact: true,
    component: Home,
  },
  {
    path: '/about',
    label: '关于',
    exact: true,
    component: About
  },
  {
    path: '/unknown',
    label: '404',
    component: Unknown
  },
  {
    path: '/mall',
    label: '商城',
    component: Mall,
    routes: [
      {
        path: '/mall/mobile',
        label: '移动',
        component: Mobile
      },
      {
        path: '/mall/desktop',
        label: '桌面',
        component: Desktop
      },
      {
        path: '/mall/laptop',
        label: '笔记本',
        component: Laptop
      }
    ]
  }
];

// export const RouteWithSubRoutes = (route) => {
// 	return (
// 		<Route
// 			path={route.path}
// 			render={props => (
// 				// pass the sub-routes down to keep nesting
// 				<route.component {...props} routes={route} />
// 			)}
// 		/>
// 	)
// }
