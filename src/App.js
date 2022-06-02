import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { pathNames } from './components/config/pathNames';
import RoutesWrapper from './components/RoutesWrapper';
import Login from './components/pages/Login';
import Homepage from './components/pages/HomePage';

function App() {
  const navigateTo = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const redirect = () => {
    navigateTo(pathNames.homepage)
    console.log('surbhi')
  }
  return (
      <ChakraProvider>
        {!isAuthenticated ? <Login setIsAuthenticated={setIsAuthenticated}/> : redirect()}
        <RoutesWrapper />
      </ChakraProvider>
  );
}

export default App;
