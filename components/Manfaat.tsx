import { Box, Heading, Text, Img, UnorderedList, ListItem, Button } from '@chakra-ui/react'
import * as React from 'react'

const Manfaat: React.FC = () => {
  return (
    <Box bg="#a5d6a7" mt={4}>
      <Heading color="#FFEE58" fontFamily="Shrikhand, cursive" textAlign="center">
        MANFAAT ECO FARMING
      </Heading>
      <Text textAlign="center" fontSize="4xl" fontFamily="Roboto">
        Tanah
      </Text>
      <Img mx="auto" src="/images/tanah.png" />
      <UnorderedList px={{ base: 6, lg: 52 }}>
        <ListItem>Meningkatkan unsur hara tanah</ListItem>
        <ListItem>Mengurai bahan Organik dalam tanah</ListItem>
        <ListItem>Meningkatkan pH tanah menjadi normal (pH 7)</ListItem>
        <ListItem>Mengembalikan kesuburan lahan (restorasi)</ListItem>
      </UnorderedList>
      <Text textAlign="center" fontSize="3xl">
        TANAMAN
      </Text>
      <Img mx="auto" src="/images/tumbuhan.png" />
      <UnorderedList px={{ base: 6, lg: 52 }}>
        <ListItem>Memaksimalkan potensi hasil produksi</ListItem>
        <ListItem>Menjadikan imunitas tanaman lebih kuat (tahan serangan OPT)</ListItem>
        <ListItem>Menjadikan tanaman sehat dan produktif</ListItem>
        <ListItem>Mempercepat masa waktu panen</ListItem>
        <ListItem>Meningkatkan kualitas hasil panen</ListItem>
      </UnorderedList>
      <Text textAlign="center" fontSize="3xl">
        PETANI
      </Text>
      <Img mx="auto" src="/images/petani.png" />
      <UnorderedList px={{ base: 6, lg: 52 }}>
        <ListItem>Meringankan biaya produksi khususnya pupuk dan pestisida kimia</ListItem>
        <ListItem>Menjadikan alternatif pemupukan berimbang (ALL IN ONE)</ListItem>
        <ListItem>Menekan pemakaian hingga 25% pupuk kimia dari normalnya</ListItem>
      </UnorderedList>
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

export default Manfaat
