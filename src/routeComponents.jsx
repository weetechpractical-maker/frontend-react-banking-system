import LoginPage from "./LoginPage";
import Dashboard from "./Dashboard";
import { END_POINTS } from "./authConstants";
import AuthGuard from "./AuthGuard";
import GuestGuard from "./GuestGuard";
import AuthLayout from "./AuthLayout";
import MainLayout from "./MainLayout";

export const routeComponents = [
  {
    element: <GuestGuard />,
    children: [
      {
        element: <AuthLayout />,
        children: [
          {
            index: true,
            element: <LoginPage />,
          },
          {
            path: `/${END_POINTS.LOGIN}`,
            element: <LoginPage />,
          },
        ],
      },
    ],
  },
  {
    element: <AuthGuard />,
    children: [
      {
        element: <MainLayout />,
        children: [
          {
            index: true,
            element: <Dashboard />,
          },
          {
            path: `/${END_POINTS.DASHBOARD}`,
            element: <Dashboard />,
          },
        ],
      },
    ],
  },
];
