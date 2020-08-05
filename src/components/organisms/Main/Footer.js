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
  return (
    <FooterBar py='16px' justifyContent='space-between'>
      <Flex ml={'16px'} justifyContent='flex-start' flexDirection='row'>
        Made with love , No copy rights
      </Flex>
      <Flex justifyContent='flex-end'flexDirection='row'>
        <Flex justifyContent='space-between'  >
          <Icon mr='16px' src={github} size='md' />
          <Icon mr='16px' src={stackOverflow} size='md' />
          <Icon mr='16px' src={linkedin} size='md' />
        </Flex>
      </Flex>
    </FooterBar>
  )
}

export default Footer;