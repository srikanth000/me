import React from 'react';
import { Flex } from 'rebass';
import Text from '../atoms/Text';
import styled from 'styled-components';


const ExtendedText = styled(Text)`
  text-decoration: underline;
  cursor: pointer;
`
const About = () => {

  const goToResume = () => {
    window.open('https://drive.google.com/file/d/1iby2DafIdzUIAwGgdOhFJSjnAj-QUOPR/view?usp=sharing')
  }
  return (
    <Flex mt={'10%'} pl={['18%', '30%']} width={['100%', '100%']} alignContent='center' justifyContent='center' flexDirection='column'>
      <Text bolder fontSize='lg' width='30%' mt={'48px'} color='white' textAlign='center' size='xxl'>Hi, The site is under developemnt. Meanwhile you can download my resume </Text>
      <ExtendedText bold fontSize='lg' color='white' onClick={goToResume} textAlign='center' size='xxl'>Srikanth-Margam-Resume</ExtendedText>
    </Flex>
  )
}

export default About;