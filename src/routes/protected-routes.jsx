import Layout from '../components/layout/Layout';
import { Outlet } from 'react-router-dom';
import LoginPage from '../pages/login/LoginPage';

const ProtectedRoutes = () => {
  const TOKEN = '698779087';
  return TOKEN ? (
    <Layout>
      <Outlet />
    </Layout>
  ) : (
    <LoginPage />
  );
};
export default ProtectedRoutes;
