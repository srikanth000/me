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
const About = () => {

  const goToResume = () => {
    window.open('https://drive.google.com/file/d/1HLZ73_fw5XIVGkqRjbfzW5BPXzp_5Nhj/view')
  }

  const list = ['Building User Interface', 'Progressive Web Apps', 'Playing with ServiceWorkers', 'Writing automated scripts with Python, Ruby',
  'Competitive Programming', 'Playing with RestFull apis']

  return (
    <>
      <Flex mt={['24%','8%']} alignItems='center' width={['100%', '100%']} alignContent='center' justifyContent='center' flexDirection='column'>
        {/* <Text bolder fontSize='lg' width='30%' mt={'48px'} color='white' textAlign='center' size='xxl'>Hi, The site is under developemnt. Meanwhile you can download my resume </Text>
        <ExtendedText bold fontSize='lg' color='white' onClick={goToResume} textAlign='center' size='xxl'>Srikanth-Margam-Resume</ExtendedText> */}
        <ExtendedImage borderRadius={'50%'} width='50%' minWidth={'15%'} src={me} />
        <Flex mt={3} alignItems='center' flexDirection='column'>
          <Text color='white' fontSize='mdL'>Hey, Glad to meet you.</Text>
          <Text color='white' textAlign='center' mt={'8px'} fontSize='mdL'>I am Srikanth Margam, Web Developer by Profession</Text>
        </Flex>
      </Flex>
      <Flex  mx={['2%','10%']} flexDirection='column'>
        <Flex mt={3} mb={'32px'} mx={'24px'} alignItems='start' flexDirection='column'>
          <Text color='white' fontSize='lg' letterSpacing='1px' bold>INTRODUCTION</Text>
          <Text color='white' textAlign='start' mt={'8px'} fontSize='mdL'>
            I have over 2+ years of experience as software engineer, and working in a startup. While I'm a proficient full-stack developer, my expertise in building scalable user interfaces and web optimizations. 
          </Text>
          <Text color='white' textAlign='start' mt={'8px'} fontSize='mdL'>
            I am more interested in converting ideas into real world workable products . I am recenlty into building the user interfaces which makes the user experience faster, efficent and secure.
            I love building progressive web apps(PWA), which by the way real competitor to native apps.
          </Text>
        </Flex>
        <Flex mt={3} mb={'100px'} mx={'24px'} alignItems='start' flexDirection='column'>
          <Text color='white' fontSize='lg' letterSpacing='1px' bold>INTERESTS</Text>
          <List>
            {list.map((item, index) => {
            return (
              <ListItem key={index}>
                <Text color='white' mt={'4px'} fontSize='mdL'>{item}</Text>
              </ListItem>
            )
            })}
          
          </List>
        </Flex>
      </Flex>
    </>
  )
}

export default About;
