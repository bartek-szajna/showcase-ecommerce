import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";



import { ThemeProvider } from 'styled-components';
import { lightMode, darkMode } from '../utils/themes';
import GlobalStyle from '../utils/globalStyles';
import PrivateRoute from '../routing/PrivateRoute';

import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import HomePage from '../containers/HomePage';
import CategoriesPage from '../containers/CategoriesPage';
import CategoryPage from '../containers/CategoryPage';
import ProductPage from '../containers/ProductPage';
import ErrorPage from '../containers/ErrorPage';
import ProfilePage from '../containers/ProfilePage';
import ShopingCartPage from '../containers/ShopingCartPage';
import LoginPage from '../containers/LoginPage';
import UserDataProvider from '../components/UserDataContext/UserDataContext';


export const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  useEffect(() => {
    let darkModeValue = localStorage.getItem('darkMode');

    if (darkModeValue === null) {
      const matchesDarkMode = window.matchMedia(
        '(prefers-color-scheme: dark)'
      ).matches;
      setIsDarkMode(matchesDarkMode);
    } else {
      const darkModeBooleanValue = darkModeValue === "true";
      setIsDarkMode(darkModeBooleanValue);
    }
  }, []);

  useEffect(() => {
    if (isDarkMode !== null) {
      localStorage.setItem('darkMode', String(isDarkMode));
    }
  }, [isDarkMode]);


  const themeToggler = () => {
    setIsDarkMode((prevMode) => {
      return !prevMode;
    });
  };

  return (
    <UserDataProvider>
      <ThemeProvider theme={isDarkMode ? darkMode : lightMode}>
        <GlobalStyle />
        <BrowserRouter>
          <NavBar isDarkMode={isDarkMode} themeHandler={themeToggler} />
          <div className='app-container'>
            <Routes>
              <Route path='/' element={<HomePage/>} />
              <Route path='/categories' element={<CategoriesPage />} />
              <Route path='/category/:id' element={<CategoryPage />} />
              <Route path='/product/:id' element={<ProductPage />} />
              <Route path='/cart' element={<ShopingCartPage />} />
              <Route path='/login' element={<LoginPage />} />
              <Route path='/profile' element={<PrivateRoute><ProfilePage /></PrivateRoute>} />
              <Route path='*' element={<ErrorPage/>} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </ThemeProvider>
    </UserDataProvider>
  );
}

export default App;
