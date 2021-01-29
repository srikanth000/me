import React from 'react';
import Text from '../atoms/Text';
import { Flex } from 'rebass';
import styled, {keyframes} from 'styled-components';
import Icon from '../atoms/Icon'
import closeBlack from '../../assets/icons/close-modal.svg';
import {media} from '../../utils/mediaQueries';
const fromTop = keyframes`
    0% {top: -100px;}
    100% {top: 0px;} 

`

const ExtendedFlex = styled(Flex)`
  position: fixed;
  top: 0;
  z-index: 5;
  background-color: black;
  -webkit-animation: ${fromTop} 3s 2;
  animation: ${fromTop} 3s 2;
`
const ExtendedText = styled(Text)`
  ${media.desktop`
    display: inherit;
  `}

`
const Resume = styled(Text)`
  text-decoration: underline;
  cursor: pointer;
`
const TopBanner = ({updateBannner}) => {

  const downlodResume = () => {
    window.open('https://drive.google.com/file/d/1HLZ73_fw5XIVGkqRjbfzW5BPXzp_5Nhj/view')

  }
  return (
    <ExtendedFlex alignItems='center' justifyContent='space-around' width='100%' px={'24px'} py={'8px'}>
      <ExtendedText color='white' bold size='md' ml={'15%'}>Hello, Sorry for inconvenience . This is under developement. Meanwhile please download <Resume fontSize='md' onClick={() => downlodResume()} color='white' ml={'4px'} bold>My Resume</Resume></ExtendedText>
      <Flex alignItems='flex-end'>
        <Icon pointer src={closeBlack} onClick={updateBannner} size='md' />
      </Flex>
    </ExtendedFlex>

  )
}

export default TopBanner;