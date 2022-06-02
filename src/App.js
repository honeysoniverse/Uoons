import React, { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { pathNames } from './components/config/pathNames';
import RoutesWrapper from './components/RoutesWrapper';
import Login from './components/pages/Login';
import Homepage from './components/pages/HomePage';

function App() {
  const navigateTo = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
 const redirect = () => {
    navigateTo(pathNames.homepage)
    console.log('redirested')
  }
  return (
      <ChakraProvider>
        {!isAuthenticated ? <Login setIsAuthenticated={setIsAuthenticated}/> : <RoutesWrapper/>}
      
      </ChakraProvider>
  );
}

export default App;
