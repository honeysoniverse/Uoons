import React, { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { pathNames } from './components/config/pathNames';
import RoutesWrapper from './components/RoutesWrapper';
import Login from './components/pages/Login';
import Homepage from './components/pages/HomePage';
import Header from './components/Header';
import Footer from './components/Footer';
import DesktopMenu from './components/Menu/DesktopMenu';
import ReduxTesting from './components/pages/ReduxTesting'


function App() {
  const navigateTo = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showLabel, setShowLabel] = useState(true)
  const [showImg, setShowImg] = useState(true)
  const[categoryId, setCategoryId] = useState('')
  const [productId, setProductId] = useState('')
  const [showSuccessText, setShowSeccessText] = useState(false)

  
 const redirect = () => {
    navigateTo(pathNames.homepage)
  }
  return (
      <ChakraProvider>
        {!isAuthenticated && <Login setIsAuthenticated={setIsAuthenticated} setShowImg={setShowImg}/>}
        {isAuthenticated && <Header setShowLabel={setShowLabel} showSuccessText={showSuccessText}/>}
        {isAuthenticated && <DesktopMenu setIsAuthenticated={setIsAuthenticated} showLabel={showLabel}/>}
        {isAuthenticated && <RoutesWrapper setCategoryId={setCategoryId} categoryId={categoryId} showLabel={showLabel} 
        setProductId={setProductId} productId={productId} setShowSeccessText={setShowSeccessText} showSuccessText={showSuccessText}/>}
        {isAuthenticated && <Footer/>} 
 
 {/* added by me delete it. */}
 
 {/* {isAuthenticated && <ReduxTesting/>}  */}
     
      </ChakraProvider>
  );
}

export default App;
