import { lazy, Suspense } from 'react';
import { Spinner } from '@chakra-ui/react';
import { Routes, Route } from 'react-router-dom'
import {  rootPathNames } from './config/pathNames';
import ProtectedRoute from './ProtectedRoute';


const HomePage = lazy(() => import('./pages/HomePage'));
const OrdersPage = lazy(() => import('./pages/Orders'));
const ProductPage = lazy(() => import('./pages/Product'));
const AddProduct = lazy(()=> import('./pages/AddProduct'));
const Categories = lazy(()=> import('./pages/Categories'))
const RoutesWrapper = () => (
  <Suspense fallback={<Spinner/>}>
    <Routes>
      <Route
        path={rootPathNames.homepage}
        element={<ProtectedRoute component={HomePage} isProtected={false} />}
      />
       <Route
        path={rootPathNames.orders}
        element={<ProtectedRoute component={OrdersPage} isProtected={false} />}
      />
        <Route
        path={rootPathNames.products}
        element={<ProtectedRoute component={ProductPage} isProtected={false} />}
      />
        <Route
        path={rootPathNames.categories}
        element={<ProtectedRoute component={Categories} isProtected={false} />}
      />
       <Route
        path={rootPathNames.addProduct}
        element={<ProtectedRoute component={AddProduct} isProtected={false} />}
      />
      
    </Routes>
  </Suspense>
);

export default RoutesWrapper;
