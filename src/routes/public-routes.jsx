import { Suspense } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ProtectedRoutes from './protected-routes';
import Chat from '../pages/chat/ChatPage';
import SettingsPage from '../pages/settings/SettingsPage';
import LoginPage from '../pages/login/LoginPage';

function PublicRoutes() {
  const router = createBrowserRouter([
    {
      path: `/`,
      element: <LoginPage />,
    },
    {
      path: `/auth/`,
      element: <ProtectedRoutes />,
      errorElement: <h1>hii</h1>,
      children: [
        { path: 'chat', element: <Chat /> },
        { path: 'settings', element: <SettingsPage /> },
      ],
    },
    {
      future: {
        v7_fetcherPersist: true,
        v7_normalizeFormMethod: true,
        v7_partialHydration: true,
        v7_relativeSplatPath: true,
        v7_skipActionErrorRevalidation: true,
        v7_startTransition: true,
      },
    },
  ]);
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <RouterProvider
        router={router}
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
          v7_skipActionErrorRevalidation: true,
        }}
      />
    </Suspense>
  );
}

export default PublicRoutes;
