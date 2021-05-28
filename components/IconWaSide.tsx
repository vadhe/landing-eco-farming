import { Box } from '@chakra-ui/react'
import * as React from 'react'
import { SiWhatsapp } from 'react-icons/si'

const IconWaSide: React.FC = () => {
  return (
    <Box pos="relative">
      <a
        target="_blank"
        rel="noreferrer"
        href="https://api.whatsapp.com/send/?phone=6285341492250&text=Halo+admin%2C+saya+mau+tanya+mengenai+Eco+Farming..+Mohon+dibantu+ya..&app_absent=0"
      >
        <Box
          boxShadow="2xl"
          pos="fixed"
          right="5px"
          bottom={{ base: '90px' }}
          bg="#25d366"
          color="#fff"
          w="60px"
          h="60px"
          borderRadius="full"
          d="flex"
          justifyContent="center"
          alignItems="center"
        >
          <SiWhatsapp size="32" />
        </Box>
      </a>
    </Box>
  )
}

export default IconWaSide
