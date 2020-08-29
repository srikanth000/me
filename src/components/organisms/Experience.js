import React from 'react';
import { Flex } from 'rebass';
import Text from '../atoms/Text';
import styled from 'styled-components';
import me from '../../../src/assets/images/me.png'
import Image from '../atoms/Image';
import { media } from '../../utils/mediaQueries';
import { isMobile } from '../../utils/common';

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

const Line = styled.div`
  width: 100%;
  border: 1px solid black;
`
const Experience = () => {

  const goToResume = () => {
    window.open('https://drive.google.com/file/d/1iby2DafIdzUIAwGgdOhFJSjnAj-QUOPR/view?usp=sharing')
  }

  let list = [
    'Developing customized reusable UI components', 'Web optimizations for performance improvements', 'Writing scalable  APIs', 'Writing TDD Components'
  ]
  let list1 = [
    'Developed Events feature', 'Written AWS Lambda functions to compress the large chunks of PDFs files to lesser sized images for Deep learning modals', 'Written scalable APIs', 'Developed UI components',
    'Integrated Digitiazation model with the product.'
  ]
  return (
    <Flex mx={['5%','10%']} mb={'64px'} mt={['24%','8%']} flexDirection='column'>
      <Text bolder color='white' fontSize='lg' letterSpacing='1px'>PROFESSIONAL EXPERIENCE</Text>
      <Flex mb={'24px'} flexDirection='column'  width={['100%', '80%']} >
        <Flex mt={'32px'} justifyContent='space-between'  width={['100%', '80%']} flexDirection='row'>
          <Flex flexDirection='row' alignItems='flex-start'>
            <Text color='white' bold fontSize='lg'>Software Developer at eKincare</Text>
          </Flex>
          <Flex flexDirection='row'  alignItems='flex-end'>
            <Text color='white' bold fontSize='lg'> Sep, 2019 -  Present</Text>
          </Flex>
        </Flex>
        <Text mt={'16px'} color='white' bold fontSize='md' >Working as Full stack Developer, involving in developing new features for product, enhancement and bug fixes</Text>
        <Text mt={'16px'} color='white' bold fontSize='md' >Work involves:</Text>
        <List>
            {list.map((item, index) => {
            return (
              <ListItem key={index}>
                <Text color='white'  bold={false} mt={'4px'} fontSize='md'>{item}</Text>
              </ListItem>
            )
            })}
          
        </List>
        <Text mt={'16px'} color='white' bold fontSize='md' >Tech Stack includes:</Text>
        {isMobile() ?
          <Flex flexDirection='row'>
             <Text mt={'8px'} color='white' bold fontSize='md' > JavaSript, HTML/CSS, React, Webpack, PWAs, Babel,Ruby on Rails,  Postgres, Git.</Text>
          </Flex>:
        <>
          <Flex flexDirection='row'>
            <Text mt={'8px'} color='white' bold fontSize='md' >Front-end:</Text>
            <Text mt={'8px'} color='white' bold fontSize='md' >
              JavaSript, HTML/CSS, React, Webpack, PWAs, Babel.
            </Text>
          </Flex>
          <Flex flexDirection='row'>
            <Text mt={'8px'} color='white' bold fontSize='md' >Back-end:</Text>
            <Text mt={'8px'} color='white' bold fontSize='md' >
              Ruby on Rails
            </Text>
          </Flex>
          <Flex flexDirection='row'>
            <Text mt={'8px'} color='white' bold fontSize='md' >Other:</Text>
            <Text mt={'8px'} color='white' bold fontSize='md' >
              Postgres, Git.
            </Text>
          </Flex>
        </>}
      </Flex>
      <Line />
      <Flex mb={'24px'} flexDirection='column'  width={['100%', '80%']} >
        <Flex mt={'32px'} justifyContent='space-between'  width={['100%', '80%']} flexDirection='row'>
          <Flex flexDirection='row' alignItems='flex-start'>
            <Text color='white' bold fontSize='lg'>SDE Intern at eKincare</Text>
          </Flex>
          <Flex flexDirection='row'  alignItems='flex-end'>
            <Text color='white' bold fontSize='lg'> Dex, 2017 -  June 2018</Text>
          </Flex>
        </Flex>
        <Text mt={'16px'} color='white' bold fontSize='md' >Worked as Product Enginner Intern, integrated Digitiazation model(AI) with the product using RestFull APIs.</Text>
        <Text mt={'16px'} color='white' bold fontSize='md' >Work involves:</Text>
        <List>
            {list1.map((item, index) => {
            return (
              <ListItem key={index}>
                <Text color='white'  bold={false} mt={'4px'} fontSize='md'>{item}</Text>
              </ListItem>
            )
            })}
          
        </List>
        <Text mt={'16px'} color='white' bold fontSize='md' >Tech Stack includes:</Text>
        {isMobile() ?
          <Flex flexDirection='row'>
              <Text mt={'8px'} color='white' bold fontSize='md' >JavaSript, HTML/CSS,AWS Lambda, Python, Flask, Ruby on Rails,  Postgres, Git.</Text>
          </Flex>:
        <>
          <Flex flexDirection='row'>
            <Text mt={'8px'} color='white' bold fontSize='md' >Front-end:</Text>
            <Text mt={'8px'} color='white' bold fontSize='md' >
              JavaSript, HTML/CSS, Python
            </Text>
          </Flex>
          <Flex flexDirection='row'>
            <Text mt={'8px'} color='white' bold fontSize='md' >Back-end:</Text>
            <Text mt={'8px'} color='white' bold fontSize='md' >
              Ruby on Rails, Flask
            </Text>
          </Flex>
          <Flex flexDirection='row'>
            <Text mt={'8px'} color='white' bold fontSize='md' >Other:</Text>
            <Text mt={'8px'} color='white' bold fontSize='md' >
              Postgres, Git.
            </Text>
          </Flex>
        </>}
      </Flex>
      <Line />
    </Flex>
  )
}

export default Experience;