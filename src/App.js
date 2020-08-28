import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar, Container, Footer } from './components/organisms/Main';
import { ThemeProvider } from 'styled-components';
import theme from '../src/themes/index';
import SideBar from './components/molecules/SideBar';


function App() {

  const [sideBar, toggleSideBar] = useState(false)

  
  return (
    <ThemeProvider theme={theme}>
      <SideBar open={sideBar} toggleSideBar={() => toggleSideBar(false)} />
      <Navbar sideBar={sideBar} toggleSideBar={(sidebar) => toggleSideBar(sidebar)} />
      <Container sideBar={sideBar} />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
