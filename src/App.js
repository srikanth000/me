import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar, Container, Footer } from './components/organisms/Main';
import { ThemeProvider } from 'styled-components';
import theme from '../src/themes/index';
import SideBar from './components/molecules/SideBar';
import TopBanner from './components/molecules/TopBanner';


function App() {

  const [sideBar, toggleSideBar] = useState(false)
  const [pages, updatePages] = useState({about: true, exp: false, projects: false, contact: false})
  const [topBanner, updateBannner] = useState(true)
  const updatePage = (newPage) => {
    toggleSideBar(false)
    if(newPage){
      let pageStates = Object.keys(pages)
      pageStates.map((page) => {
          if(pages[page]){
            updatePages({...pages, [newPage]: true, [page]: false})
          }
        })
    }
  
  }

  

  return (
    <ThemeProvider theme={theme}>
     {topBanner &&  <TopBanner updateBannner={() =>  updateBannner(false)} /> }
      <Navbar topBanner={topBanner} sideBar={sideBar} toggleSideBar={(sidebar) => toggleSideBar(sidebar)} />
      <SideBar open={sideBar} updatePages={(event) => updatePage(event)} toggleSideBar={() => toggleSideBar(false)} />
      <Container pages={pages}  sideBar={sideBar} />
      <Footer pages={pages} updatePages={(event) => updatePage(event)} />
    </ThemeProvider>
  );
}

export default App;
