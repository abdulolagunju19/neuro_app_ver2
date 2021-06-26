import React from 'react'
import { useColorMode, Flex, Text, Link, IconButton, SimpleGrid, Box } from '@chakra-ui/react'
import { FiGithub, FiTwitter, FiLinkedin, FiYoutube, FiMail } from "react-icons/fi"

import { Footer } from '../components/Footer'
import Navigation from '../components/Navigation'
import MobileNavigation from '../components/MobileNavigation'
import MobileNavigationTop from '../components/MobileNavigationTop'

import DarkModeSwitch from '../components/DarkModeSwitch'

const Container = ({ children }) => {
  const { colorMode } = useColorMode()
  const bgColor = {
    light: 'white',
    dark: '#15161a'
  }
  const color = {
    light: 'black',
    dark: 'white'
  }

  return (
    <>
     <Container>
      <DarkModeSwitch />
    </>
  )
}

export default Container
