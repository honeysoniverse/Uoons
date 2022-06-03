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

function App() {
  const navigateTo = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showLabel, setShowLabel] = useState(true)
 const redirect = () => {
    navigateTo(pathNames.homepage)
  }
  return (
      <ChakraProvider>
        {!isAuthenticated && <Login setIsAuthenticated={setIsAuthenticated}/>}
        {isAuthenticated && <Header setShowLabel={setShowLabel}/>}
        {isAuthenticated && <DesktopMenu setIsAuthenticated={setIsAuthenticated} showLabel={showLabel}/>}
        {isAuthenticated && <RoutesWrapper/>}
        {isAuthenticated && <Footer/>}
         
      </ChakraProvider>
  );
}

export default App;
