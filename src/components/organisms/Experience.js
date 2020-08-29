import React from 'react';
import { Flex } from 'rebass';
import Text from '../atoms/Text';
import styled from 'styled-components';
import me from '../../../src/assets/images/me.png'
import Image from '../atoms/Image';
import { media } from '../../utils/mediaQueries';

const ExtendedText = styled(Text)`
  text-decoration: underline;
  cursor: pointer;
`
const RoundedImage = styled.div`
  background-image: url(${me});
  padding; 20%;
`
const List = styled.ul`
`
const ListItem = styled.li`
  color: white;
`
const ExtendedImage = styled(Image)`
  min-width: 15%;
  width: 15%;
  ${media.mobile`
    min-width: 50%;
    width: 50%;
  `}
`
const Experience = () => {

  const goToResume = () => {
    window.open('https://drive.google.com/file/d/1iby2DafIdzUIAwGgdOhFJSjnAj-QUOPR/view?usp=sharing')
  }

  
  return (
    <Flex mx={['2%','10%']} mt={['24%','8%']} flexDirection='column'>
      <Text bold color='white' fontSize='lg' letterSpacing='1px'>PROFESSIONAL EXPERIENCE</Text>
      <Flex  alignItems='center' width={['100%', '100%']} alignContent='center' justifyContent='center' flexDirection='column'>
       
      </Flex>
      
    </Flex>
  )
}

export default Experience;