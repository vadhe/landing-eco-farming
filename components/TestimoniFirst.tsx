import { Box, Heading, Img, Text } from '@chakra-ui/react'
import * as React from 'react'

const TestimoniFirst: React.FC = () => {
  return (
    <Box bg="#aed581" py={16}>
      <Heading as="h5" fontSize={{ base: 'xl', lg: '2xl' }} textAlign="center" fontFamily="Archivo Black, sans-serif">
        APA KATA MEREKA
      </Heading>
      <Text mb={6} textAlign="center" fontSize={{ base: 'sm', lg: 'lg' }} fontFamily="Archivo Black, sans-serif">
        PENGGUNA ECO FARMING
      </Text>
      <Img mx="auto" src="/images/image-1.png" />
      <Img mx="auto" src="/images/image-2.webp" />
      <Img mx="auto" src="/images/image-3.webp" />
      <Img mx="auto" src="/images/image-4.webp" />
      <Img mx="auto" src="/images/image-5.webp" />
      <Img mx="auto" src="/images/image-6.webp" />
      <Img mx="auto" src="/images/image-7.webp" />
      <Text
        textAlign="center"
        fontSize={{ base: '2xl', lg: '3xl' }}
        px={{ base: 6, lg: 52 }}
        mt={6}
        fontWeight="bold"
        fontFamily="Roboto, sans-serif"
      >
        Dan Ratusan Petani lainnya sudah merasakan manfaat dari penggunaan Eco Farming, kini giliran Anda !
      </Text>
    </Box>
  )
}

export default TestimoniFirst
