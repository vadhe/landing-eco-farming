import { Box, Img, Text, Button } from '@chakra-ui/react'
import React from 'react'

const SectionFirts: React.FC = () => {
  return (
    <Box textAlign="center">
      <Img mx="auto" my={4} width="100px" src="/images/logo-eco-farming.png" alt="eco-farming-logo" />
      <Text fontSize={{ base: '3xl', lg: '4xl' }} fontFamily="Monoton, cursive" color="white">
        ECO FARMING
      </Text>
      <Text px={6} textShadow="dark-lg" fontFamily="Russo One, sans-serif" color="#FFEE58" fontSize="xl">
        PUPUK ORGANIK SUPER AKTIF
      </Text>
      <Img mx="auto" width="200px" src="/images/farmer.png" alt="farmer.png" />
      <Text fontFamily="Righteous, cursive" color="#FFEE58" px={6}>
        SK MENTRI PERTANIAN
      </Text>
      <Text fontFamily="Righteous, cursive" color="#FFEE58">
        No. SK :
      </Text>
      <Text fontFamily="Righteous, cursive" color="#FFEE58">
        039.OL/Kpts/SR.310/B/01/2020
      </Text>
      <Text fontFamily="Timmana, sans-serif" fontSize={{ base: '3xl', lg: '5xl' }} color="#e0e0e0">
        LAHAN SUBUR, PETANI MAKMUR
      </Text>
      <a href="#paket">
        <Button
          boxShadow="xl"
          my={6}
          width={{ base: '90%', lg: '200px' }}
          mx="auto"
          color="#212121"
          fontFamily="Righteous, cursive"
          backgroundColor="#ffc107"
        >
          PESAN KLIK DI SINI
        </Button>
      </a>
    </Box>
  )
}

export default SectionFirts
