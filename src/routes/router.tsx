/* eslint-disable react-refresh/only-export-components */
import { Suspense, lazy } from 'react';
import { Outlet, createBrowserRouter } from 'react-router-dom';
import paths, { rootPaths } from './paths';
import MainLayout from 'layouts/main-layout';
import AuthLayout from 'layouts/auth-layout';
import Splash from 'components/loader/Splash';
import PageLoader from 'components/loader/PageLoader';

const App = lazy(() => import('App'));
const Dashboard = lazy(() => import('pages/dashboard'));
const Signin = lazy(() => import('pages/authentication/Signin'));
const Signup = lazy(() => import('pages/authentication/Signup'));
const router = createBrowserRouter(
  [
    {
      element: (
        <Suspense fallback={<Splash />}>
          <App />
        </Suspense>
      ),
      children: [
        {
          path: '/',
          element: (
            <AuthLayout>
              <Suspense fallback={<PageLoader />}>
                <Signin />
              </Suspense>
            </AuthLayout>
          ),
        },
        {
          path: rootPaths.authRoot,
          element: (
            <AuthLayout>
              <Outlet />
            </AuthLayout>
          ),
          children: [
            {
              path: paths.signin,
              element: <Signin />,
            },
            {
              path: paths.signup,
              element: <Signup />,
            },
          ],
        },
        {
          path: rootPaths.pageRoot,
          element: (
            <MainLayout>
              <Suspense fallback={<PageLoader />}>
                <Outlet />
              </Suspense>
            </MainLayout>
          ),
          children: [
            {
              path: paths.dashboard,
              element: <Dashboard />,
            },
          ],
        },
      ],
    },
  ],
  {
    basename: '/LocalKonnect/',
  },
);

export default router;

