import { Box } from '@chakra-ui/react'
import * as React from 'react'
import { SiWhatsapp } from 'react-icons/si'

const IconWaSide: React.FC = () => {
  return (
    <Box pos="relative">
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
    </Box>
  )
}

export default IconWaSide
