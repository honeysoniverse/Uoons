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
const SubCategories = lazy(()=>import('./pages/SubCategories'))
const ViewProducts = lazy(()=>import('./pages/ViewProduct'));
const EditCategory = lazy(()=>import('./pages/EditCategory'));
const EditProduct = lazy(()=>import('./pages/EditProduct'));

const RoutesWrapper = ({setCategoryId, categoryId, showLabel, setProductId, productId, setShowSeccessText, showSuccessText}) => (
  <Suspense fallback={<Spinner/>}>
    <Routes>
      <Route
        path={rootPathNames.homepage}
        element={<ProtectedRoute component={HomePage} isProtected={false} showLabel={showLabel}/>}
      />
       <Route
        path={rootPathNames.orders}
        element={<ProtectedRoute component={OrdersPage} isProtected={false} />}
      />
        <Route
        path={rootPathNames.products}
        element={<ProtectedRoute component={ProductPage} isProtected={false} showLabel={showLabel} setProductId={setProductId} productId={productId}/>}
      />
        <Route
        path={rootPathNames.categories}
        element={<ProtectedRoute component={Categories} isProtected={false} setCategoryId={setCategoryId} categoryId={categoryId} showLabel={showLabel}/>}
      />
      <Route
        path={rootPathNames.subCategories}
        element={<ProtectedRoute component={SubCategories} isProtected={false} setCategoryId={setCategoryId} categoryId={categoryId} showLabel={showLabel}/>}
      />
       <Route
        path={rootPathNames.addProduct}
        element={<ProtectedRoute component={AddProduct} isProtected={false}  setProductId={setProductId} productId={productId} categoryId={categoryId} showLabel={showLabel}
        setShowSeccessText={setShowSeccessText} showSuccessText={showSuccessText}/>}
      />
      <Route
        path={rootPathNames.viewProduct}
        element={<ProtectedRoute component={ViewProducts} isProtected={false} categoryId={categoryId} showLabel={showLabel}/>}
      />
        <Route
        path={rootPathNames.editCategory}
        element={<ProtectedRoute component={EditCategory} isProtected={false} setCategoryId={setCategoryId} categoryId={categoryId}/>}
      />
    <Route
        path={rootPathNames.editProduct}
        element={<ProtectedRoute component={EditProduct} isProtected={false}  setProductId={setProductId} productId={productId}/>}
      />
    </Routes>
   
  </Suspense>
);

export default RoutesWrapper;
