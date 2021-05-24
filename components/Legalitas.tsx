import { Box, Heading, Img, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'

const Legalitas: React.FC = () => {
  return (
    <Box bg="#fff" pt={16} pb={4} px={{ base: '4', lg: '52' }}>
      <Heading my={4} textAlign="center" as="h5" size="md">
        LEGALITAS ECO FARMING
      </Heading>
      <SimpleGrid columns={2} spacing={2}>
        <Text>PERIZINAN KEMENTAN RI </Text>
        <Text> : SK MENTAN NO : 039.OL/Kpts/SR.310/B/01/2020 </Text>
        <Text> TANGGAL SK MENTAN </Text>
        <Text>: 20 JANUARI 2020 </Text>
        <Text>NAMA PERUSAHAAN </Text>
        <Text>: PT. BANDUNG INOVASI ORGANIK </Text>
        <Text>NOMOR PENDAFTARAN </Text>
        <Text>: 02.08.2020.005 </Text>
        <Text>JENIS PUPUK </Text>
        <Text>: ORGANIK BRIKET </Text>
        <Text>SERTIFIKAT ORGANIK </Text>
        <Text>: INOFICE SNI 67292016</Text>
      </SimpleGrid>
      <Heading textAlign="center" my={4} as="h5" fontSize={{ base: 'md', lg: '2xl' }}>
        Eco Farming memiliki 2 (dua) sasaran utama yaitu :{' '}
      </Heading>
      <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={{ lg: '4' }}>
        <Box>
          <Img mx="auto" width={{ base: '150px', lg: '200px' }} src="/images/padi2.webp" alt="padi" />
          <Text my={4} textAlign="center" fontSize="md" fontWeight="bold">
            Memperbaiki struktur dan tekstur (fisik tanah), biologi dan kimia tanah sehingga lahan menjadi sehat dan subur sebagai media
            tumbuh bagi tanaman.
          </Text>
        </Box>
        <Box>
          <Img mx="auto" width={{ base: '150px', lg: '165px' }} src="/images/plant.webp" alt="plant" />
          <Text mt={4} textAlign="center" fontSize="md" fontWeight="bold">
            Menyediakan nutrisi atau unsur hara tanaman lengkap sehingga tanaman akan tumbuh normal dan sehat serta akan menghasilkan
            produksi panen optimal bahkan maksimal (minimal 6 kali/ musim sesuai siklus hidupnya).
          </Text>
        </Box>
      </SimpleGrid>
    </Box>
  )
}

export default Legalitas
