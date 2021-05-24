import { Box, Button, Heading, Img, ListItem, Text, UnorderedList } from '@chakra-ui/react'
import * as React from 'react'

const Cara: React.FC = () => {
  return (
    <Box bg="#fff" mt={4} pt={16} px={4}>
      <Heading fontSize={{ base: 'lg', lg: '3xl' }} textAlign="center" px={3}>
        CARA PENGGUNAAN ECO FARMING
      </Heading>
      <Img mx="auto" w={{ lg: '500px' }} my={4} src="images/cara.png" />
      <Box px={{ lg: '52' }}>
        <Text fontSize="Roboto" fontWeight="semibold" my={2}>
          PELARUTAN
        </Text>
        <UnorderedList>
          <ListItem>
            Larutkan Eco Farming dengan rasio perbandingan 1 tube : 1 liter air pelarut (Air Tetes Tebu, Air Kelapa, Air Hujan) menjadi 1
            liter larutan biang Eco Farming.
          </ListItem>
          <ListItem>
            Lakukan 15 menit atau sehari sebelum aplikasi, makin lama makin baik dengan penambahan nutrisi mikroorgnisme positif dan lubang
            kecil.
          </ListItem>
        </UnorderedList>
        <Text fontSize="Roboto" fontWeight="semibold" my={2}>
          PENGENCERAN
        </Text>
        <UnorderedList>
          <ListItem>
            Dosis Aplikasi untuk lahan dengan satuan ml/Tangki ditambahkan air sesuai kapasitas volume tangki semprot (15-20 liter).
          </ListItem>
          <ListItem>
            Dosis Aplikasi untuk tanaman dengan satuan ml/Tangki ditambahkan air sesuai kapasitas volume tangki semprot (15-20 liter)
          </ListItem>
        </UnorderedList>
        <Text fontSize="Roboto" fontWeight="semibold" my={2}>
          APLIKASI
        </Text>
        <UnorderedList>
          <ListItem>Lahan bisa disemprotkan atau disiramkan dengan Eco Farming yang sudah diencerkan dalam tangki.</ListItem>
          <ListItem>
            Tanaman harus disemprotkan pada bagian daun pukul 07.00-10.00 dengan Eco Farming yang sudah diencerkan dalam tangki.
          </ListItem>
        </UnorderedList>
      </Box>
      <Heading textAlign="center" px={{ lg: '32' }} fontSize={{ base: 'xl', lg: '3xl' }} my={4} fontFamily="Archivo Black, sans-serif">
        ECO FARMING COCOK UNTUK SEMUA JENIS TANAMAN SEPERTI DI BAWAH INI !{' '}
      </Heading>
      <Img mx="auto" src="/images/tabel.png" />
      <Box textAlign="center">
        <Button
          boxShadow="xl"
          my={6}
          width={{ base: '90%', lg: '200px' }}
          mx="auto"
          color="#fff"
          fontFamily="Righteous, cursive"
          backgroundColor="#558B2F"
        >
          PESAN KLIK DI SINI
        </Button>
      </Box>
    </Box>
  )
}

export default Cara
