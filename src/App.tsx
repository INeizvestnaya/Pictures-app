import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Outlet,
  Route,
  RouterProvider
} from 'react-router-dom';

import { LOGIN, MAIN_PATH, PICTURE_PAGE, PICTURES } from './constants/routes';
import ErrorPage from './pages/ErrorPage';
import Login from './pages/Login';
import PicturePage from './pages/PicturePage';
import Pictures from './pages/Pictures';
import PrivateRoute from './routes/PrivateRoute';
import RestrictedRoute from './routes/RestrictedRoute';

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path={MAIN_PATH} element={<Outlet />} errorElement={<ErrorPage />}>
        <Route index element={<Navigate to={LOGIN} replace />} />
        <Route
          path={LOGIN}
          element={
            <RestrictedRoute>
              <Login />
            </RestrictedRoute>
          }
        />
        <Route
          path={PICTURES}
          element={
            <PrivateRoute>
              <Pictures />
            </PrivateRoute>
          }
        />
        <Route
          path={PICTURE_PAGE}
          element={
            <PrivateRoute>
              <PicturePage />
            </PrivateRoute>
          }
        />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
