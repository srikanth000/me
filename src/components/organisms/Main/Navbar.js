import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Flex, Box } from 'rebass';
import { media } from '../../../utils/mediaQueries'
import { isMobile } from '../../../utils/common';


const fromTop = keyframes`
    0% {top: -100px;}
    100% {top: 0px;} 

`

const ExtendedFlex = styled(Flex)`
  padding-left: 24px;
  padding-right: 24px;
  background-color: blue;
  position: relative;
  -webkit-animation: ${fromTop} 1s 2;
  animation: ${fromTop} 1s 2;
  flex-direction: row;
  margin-top: -32px;
  padding-top: 12px;
  border-radius: 100px;
  ${media.mobile`
    border-radius: 0;
  `}

`

const Title = styled.p`
  font-family: 'Judson', serif;
  font-size: 48px;
  font-weight: bold;
  color: white;

`

const Navbar = () => {
  return (
    isMobile() ?
      <ExtendedFlex>
        <Title>Srikanth Margam</Title>
      </ExtendedFlex>
    :
    <Flex flexDirection='row'>
      <Flex width={'25%'}></Flex>
      <ExtendedFlex  width={'50%'} flexDirection='row' justifyContent='center'>
        <Title>Srikanth Margam</Title>
      </ExtendedFlex>
      <Flex width={'25%'}></Flex> 
    </Flex>
  )
}

export default Navbar;