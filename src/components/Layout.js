import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import AppBar from '../components/AppBar/AppBar';
import Loader from './Loader/Loader';

const Layout = () => {
  return (
    <>
      <AppBar />
      <Suspense fallback={<Loader/>}>
        <Outlet />
      </Suspense>
      <Toaster position="top-center" />
    </>
  );
};

export default Layout;
