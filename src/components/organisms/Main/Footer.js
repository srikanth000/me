import React, {useState} from 'react';
import { Flex } from 'rebass';
import styled, {css} from 'styled-components';
import {  linkedin, stackOverflow, github } from '../../../assets/icons';
import Icon from '../../atoms/Icon';
import { media } from '../../../../src/utils/mediaQueries';
import {isMobile} from '.../../../src/utils/common';
import { profile, workingExp, message, alignRight, user } from '../../../assets/icons';
import Text  from '../../atoms/Text'; 

const FooterBar = styled(Flex)`
  width: 100%;
  position: fixed;
  bottom: 0;
`
const BottomBar =  styled(Flex)`
  border-top: 1px solid black;
  background-color: #0A3D62;
  position: fixed;
  bottom: 0;
`

const BottomCell = styled(Flex)`
  :hover {
    font-color: black;
  }

`
const ExtendedText = styled(Text)`
  :hover {
    color: black;
  }
  ${({active}) => active && css`
      color: black;
  `}
  ${({active}) => !active && css`
      color: white;
  `}
`
const Footer  = ({pages, updatePages}) => {

  const [state, updateState] = useState({active: pages.about})

  const updatePage = (newPage) => {
    updatePages(newPage)
    updateState(pages.about)
  }
  const redirect = (link) => {
    window.open(link, '_blank')
  }
  return (
    <FooterBar py={['0px','16px']} justifyContent='space-between'>
      {isMobile() ?
      <BottomBar pb={'8px'} width='100%' flexDireciton='row' justifyContent='space-between'>
        <BottomCell onClick={() => updatePage('about')} px={'24px'}  flexDirection='column' justifyContent='flex-start' mt='18px'  >
          <Flex  flexDirection='row' justifyContent='center'>
            <Icon  src={user} size='md' pointer />
          </Flex>
          <ExtendedText  active={state.active}  mt={'8px'}  mb={'0px'} color='white'>About</ExtendedText>
        </BottomCell>
        <BottomCell data-value={'exp'}  onClick={() => updatePage('exp')}  px={'24px'}   flexDirection='column' justifyContent='flex-start' mt='18px' >
          <Flex flexDirection='row' justifyContent='center'>
            <Icon src={workingExp} size='md' pointer />
          </Flex>
          <ExtendedText mt={'8px'}  mb={'0px'} color='white'>Experience</ExtendedText>
        </BottomCell>
        <BottomCell data-value={'projects'}  onClick={() => updatePage('projects')}  px={'24px'}   flexDirection='column' justifyContent='flex-start' mt='18px' >
          <Flex flexDirection='row' justifyContent='center'>
            <Icon src={profile} size='md' pointer />
          </Flex>
          <ExtendedText mt={'8px'}  mb={'0px'} color='white'>Projects</ExtendedText>
        </BottomCell>
        <BottomCell data-value={'contact'}  onClick={() => updatePage('contact')}  px={'24px'} flexDirection='column' justifyContent='flex-start' mt='18px' >
          <Flex flexDirection='row' justifyContent='center'>
            <Icon src={message} size='md' pointer />
          </Flex>
          <ExtendedText mt={'8px'}  mb={'0px'} color='white'>Contact</ExtendedText>
        </BottomCell>
      </BottomBar>
      :
      <>
        <Flex ml={'16px'} justifyContent='flex-start' flexDirection='row'>
          Made with love , No copy rights 
        </Flex>
        <Flex justifyContent='flex-end'flexDirection='row'>
          <Flex justifyContent='space-between'  >
            <Icon mr='16px' pointer onClick={() => redirect('https://github.com/srikanth000')} src={github} size='md' />
            <Icon mr='16px' pointer onClick={() => redirect('https://stackoverflow.com/users/7702448/srikanth-margam')}  src={stackOverflow} size='md' />
            <Icon mr='16px'  pointer onClick={() => redirect('https://www.linkedin.com/in/srikanthmargam-cs7/')} src={linkedin} size='md' />
          </Flex>
        </Flex>
      </>}
    </FooterBar>
  )
}

export default Footer;