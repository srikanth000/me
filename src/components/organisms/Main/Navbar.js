import React, {useState} from 'react';
import styled, { keyframes, css } from 'styled-components';
import { Flex, Box } from 'rebass';
import { media } from '../../../utils/mediaQueries'
import { isMobile } from '../../../utils/common';
import Text from '../../atoms/Text';
import Icon from '../../atoms/Icon';
import { alignLeft , alignRight} from '../../../assets/icons';
import resume  from '../../../assets/icons/resume.svg';

const fromTop = keyframes`
    0% {top: -100px;}
    100% {top: 0px;} 

`

const ExtendedFlex = styled(Flex)`
  position: fixed;
  top: 0;
  margin-bottom: 2%;
  background-color: #0A3D62;
  z-index: 1;
  ${({topBanner}) => topBanner && css`
    margin-top: 16px !important;
    transition: .1s;
  `}
`

const Title = styled.p`
  font-family: 'Judson', serif;
  font-size: 48px;
  font-weight: bold;
  color: white;

`

const Navbar = ({sideBar, toggleSideBar, topBanner}) => {

  const Title = () => {
    return '<Srikanth Margam/>'
  }

  const downloadResume = () => {
    window.open('https://drive.google.com/file/d/1HLZ73_fw5XIVGkqRjbfzW5BPXzp_5Nhj/view')
  }

  return (
    <>
      <ExtendedFlex topBanner={topBanner} width='100%'>
        {!isMobile() && <Flex width={['20%','30%', '20%']}>
          { !sideBar && <Icon  ml='24px' mt='30px' src={alignLeft} size='md' pointer onClick={() => toggleSideBar(!sideBar)} />}
        </Flex>}
        <Flex mb={'16px'} ml={['16%', 0]} justifyContent='center' width={['100%','80%']}>
          <Text color='white' letterSpacing='1px'   mt={'28px'}  fontSize='xl' bolder>{Title()}</Text>
        </Flex>
        <Flex  justifyContent='flex-end' width={['25%','20%']}>
          <Flex flexDirection='row' mr={'24px'}>
            <Icon  ml='24px' pointer onClick={downloadResume} mt='28px' src={resume} size='xl' />
          </Flex>
        </Flex>
      </ExtendedFlex>
    </>
  )
}

export default Navbar;
