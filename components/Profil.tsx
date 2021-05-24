import { Box, Img } from '@chakra-ui/react'
import React from 'react'

const Profil: React.FC = () => {
  return (
    <Box bg="white" mb={4}>
      <Img mx="auto" w={{ lg: '50%' }} src="/images/company-profile.webp" alt="Company-profile" />
      <Img mx="auto" w={{ lg: '50%' }} mt={4} src="/images/office-manajemen.webp" alt="office-manajemen" />
    </Box>
  )
}
export default Profil
