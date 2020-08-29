import React, {useState} from 'react';
import styled, {keyframes} from 'styled-components';
import { Flex, Box } from 'rebass';
import About from '../About';
import Experience from './../Experience';

import SideBar from '../../molecules/SideBar';


const fromLeft = keyframes`
  0% {left: -50px;}
  100% {left: 0px;} 
  
`

const fromRight = keyframes`
  0% {right: -50px;}
  100% {right: 0px;} 
`

const Body = styled(Box)`
	position: relative;
	-webkit-animation: ${props => props.direction == 'l' ? fromLeft : fromRight} .5s 1;
  animation: ${props => props.direction == 'l' ? fromLeft : fromRight} .5s 1;
  animation-direction: alternate;
  -webkit-animation-direction: alternate; 
`

const Container = ({sideBar, pages, toggleSideBar}) => {

  return (
    <Body>
      {pages.about && <About />}
      {pages.exp && <Experience />}

    </Body>
  )
}

export default Container;