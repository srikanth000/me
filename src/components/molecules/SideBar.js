import React from 'react';
import { Flex } from 'rebass';
import styled from 'styled-components';
import Icon from '../atoms/Icon';
import { profile, workingExp, message, alignRight, user } from '../../assets/icons';
import Text from '../atoms/Text';

const FlexBody = styled(Flex)`
  background-color: white;
  transition: all 0.2s ease-out;
  position: absolute;
  z-index:1;
`
const ExtendedText = styled(Text)`
  margin-left: 12px;
  cursor: pointer;
  :hover {
    color: #0A3D62;
    font-style: ProximaNova-ExtraBld;
    transform: scale(1.2);
  }
`
const SideBar = ({open, toggleSideBar}) => {
 return (
  <FlexBody flexDirection='column' width={!open ? '0vw' : ['50vw', '15vw'] } height='100vh'>
    { open &&   
      <Flex flexDirection='column' px='24px' >
        <Flex flexDirection='row' justifyContent='flex-end'>
          {/* <Text color='black' bold > Menu </Text> */}
          <Flex pt='18px'><Icon src={alignRight} size='md' pointer onClick={toggleSideBar} /></Flex>
        </Flex>
        <Flex mt={'24px'} flexDirection='column'>
          <Flex mb={'-16px'} flexDirection='row'>
            <Flex justifyContent='flex-start' mt='18px' mr='8px' ><Icon src={user} size='md' pointer onClick={toggleSideBar} /></Flex>
            <ExtendedText color='black' pt={3} bold > About </ExtendedText>
          </Flex>
          <Flex mb={'-16px'}  flexDirection='row'>
            <Flex justifyContent='flex-start' mt='18px' mr='8px' ><Icon src={workingExp} size='md' pointer onClick={toggleSideBar} /></Flex>
            <ExtendedText color='black'  pt={3} bold > Experience </ExtendedText>
          </Flex>
          <Flex mb={'-16px'} flexDirection='row'>
            <Flex justifyContent='flex-start' mt='18px' mr='8px' ><Icon src={profile} size='md' pointer onClick={toggleSideBar} /></Flex>
            <ExtendedText color='black'  pt={3} bold > Projects </ExtendedText>
          </Flex>
          <Flex mb={'-16px'} flexDirection='row'>
            <Flex justifyContent='flex-start' mt='18px' mr='8px' ><Icon src={message} size='md' pointer onClick={toggleSideBar} /></Flex>
            <ExtendedText color='black'  pt={3} bold > Contact</ExtendedText>
          </Flex>
        </Flex>
      </Flex>
     }
  </FlexBody>
 )
}


export default SideBar;