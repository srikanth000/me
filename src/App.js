import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar, Container, Footer } from './components/organisms/Main';
import { ThemeProvider } from 'styled-components';
import theme from '../src/themes/index';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Container />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
