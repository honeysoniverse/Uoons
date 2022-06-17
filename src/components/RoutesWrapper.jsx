import { lazy, Suspense } from 'react';
import { Spinner } from '@chakra-ui/react';
import { Routes, Route } from 'react-router-dom'
import {  rootPathNames } from './config/pathNames';
import ProtectedRoute from './ProtectedRoute';


const HomePage = lazy(() => import('./pages/HomePage'));
const OrdersPage = lazy(() => import('./pages/Orders'));
const ProductPage = lazy(() => import('./pages/Product'));
const AddProduct = lazy(()=> import('./pages/AddProduct'));
const Categories = lazy(()=> import('./pages/Categories'));
const ViewProducts = lazy(()=>import('./pages/ViewProduct'))
const RoutesWrapper = ({setCategoryId, categoryId, setCatId, catId}) => (
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
        element={<ProtectedRoute component={Categories} isProtected={false} setCategoryId={setCategoryId} categoryId={categoryId}/>}
      />
       <Route
        path={rootPathNames.addProduct}
        element={<ProtectedRoute component={AddProduct} isProtected={false}  />}
      />
      <Route
        path={rootPathNames.viewProduct}
        element={<ProtectedRoute component={ViewProducts} isProtected={false} categoryId={categoryId}/>}
      />
      
    </Routes>
  </Suspense>
);

export default RoutesWrapper;
