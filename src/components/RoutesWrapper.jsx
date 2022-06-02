import { lazy, Suspense } from 'react';
import { Spinner } from '@chakra-ui/react';
import { Routes, Route } from 'react-router-dom'
import {  rootPathNames } from './config/pathNames';
import ProtectedRoute from './ProtectedRoute';

const HomePage = lazy(() => import('./pages/HomePage'));
const RoutesWrapper = () => (
  <Suspense fallback={<Spinner />}>
    <Routes>
      <Route
        path={rootPathNames.homepage}
        element={<ProtectedRoute component={HomePage} isProtected={false} />}
      />
    </Routes>
  </Suspense>
);

export default RoutesWrapper;
