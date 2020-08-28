import React, {useState} from 'react';
import styled, { keyframes } from 'styled-components';
import { Flex, Box } from 'rebass';
import { media } from '../../../utils/mediaQueries'
import { isMobile } from '../../../utils/common';
import Text from '../../atoms/Text';
import Icon from '../../atoms/Icon';
import { alignLeft , alignRight} from '../../../assets/icons';

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

const Navbar = ({sideBar, toggleSideBar}) => {

  const Title = () => {
    return '<Srikanth Margam/>'
  }
  return (
    <>
      <Flex width='100%'>
        <Flex width={['80%','30%', '20%']}>
          { !sideBar && <Icon  ml='24px' mt='30px' src={alignLeft} size='md' pointer onClick={() => toggleSideBar(!sideBar)} />}
        </Flex>
        <Flex justifyContent='center' width='80%'>
          <Text color='white' letterSpacing='1px' fontSize='xl' bolder>{Title()}</Text>
        </Flex>
        <Flex width='20%'>
        </Flex>
      </Flex>
    </>
  )
}

export default Navbar;