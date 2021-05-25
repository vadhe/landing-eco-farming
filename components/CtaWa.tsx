import { Box, Button } from '@chakra-ui/react'
import * as React from 'react'
import { SiWhatsapp } from 'react-icons/si'

const CtaWa: React.FC = () => {
  return (
    <Box bg="white" h="24" py={6} px={4} pos="fixed" bottom="0" w="100%" d={{ base: 'block', md: 'none' }}>
      <Button w="100%" color="#fff" backgroundColor="#1fb055" leftIcon={<SiWhatsapp />}>
        TLP / WA 0853 4149 2250
      </Button>
    </Box>
  )
}

export default CtaWa
