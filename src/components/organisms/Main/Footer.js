import React from 'react';
import { Flex } from 'rebass';
import styled from 'styled-components';
import {  linkedin, stackOverflow, github } from '../../../assets/icons';
import Icon from '../../atoms/Icon';

const FooterBar = styled(Flex)`
  width: 100%;

  position: absolute;
  bottom: 0;

`
const Footer  = () => {
  const redirect = (link) => {
    window.open(link, '_blank')
  }
  return (
    <FooterBar py='16px' justifyContent='space-between'>
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
    </FooterBar>
  )
}

export default Footer;