import { Box, Heading, Text, AspectRatio, Img, Button } from '@chakra-ui/react'
import React from 'react'

const Video: React.FC = () => {
  return (
    <Box bg="#c5e1a5" textAlign="center">
      <Heading pt={8} fontSize="2xl" fontFamily="Archivo Black, sans-serif" color="#d32f2f">
        MAU PANEN ANDA MENINGKAT SEPERTI INI ?
      </Heading>
      <Text fontSize="xl" fontFamily="Archivo Black, sans-serif" color="#d32f2f">
        SIMAK LIPUTAN TVRI BERIKUT INI :
      </Text>
      <AspectRatio mt={6} mx="auto" mb={6} maxW="560px" ratio={2}>
        <iframe
          width="315"
          height="177"
          src="https://www.youtube.com/embed/so1SEpmfTPU?list=TLGG46Nscg0uOkIyNDA1MjAyMQ"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        />
      </AspectRatio>
      <Text
        px={4}
        color={{ base: 'black', lg: '#2e7d32' }}
        fontWeight="bold"
        fontSize={{ base: 'xl', lg: '2xl' }}
        fontFamily="Righteous, cursive"
      >
        ECO FARMING NUTRISI TANAMAN PLUS RESTORASI KESUBURAN TANAH
      </Text>
      <Text fontWeight="extrabold" px={4} fontSize="xl" color="#2e7d32" fontFamily="Righteous, cursive">
        SOLUSI MENUJU PERTANIAN SEHAT DAN RAMAH LINGKUNGAN
      </Text>
      <Img mt={{ lg: '6' }} mx="auto" src="/images/padi.webp" alt="padi-image" />
      <Text
        fontSize={{ base: 'xl', lg: 'xl' }}
        fontFamily="roboto, sans-serif"
        my={6}
        px={{ base: '4', lg: '52' }}
        color={{ base: '#ffc106', lg: '#31373d' }}
      >
        ECO FARMING pupuk Organik Super Aktif hasil penelitian ahli pertanian lebih dari 17 tahun telah teruji dan terbukti ECO FARMING
        mampu mengembalikan kesuburan tanah, menjadikan tanaman sehat dan produktif serta ramah lingkungan.{' '}
      </Text>
      <Text
        fontSize={{ base: 'xl', lg: 'xl' }}
        px={{ base: '4', lg: '52' }}
        color={{ base: '#ffc106', lg: '#31373d' }}
        fontFamily="roboto, sans-serif"
        my={6}
      >
        Formula ECO FARMING, memiliki nutrisi lengkap kebutuhan tanaman dan bakteri positif (decomposer) untuk Restorasi Kesuburan Tanah
        sehingga mendekati syarat Agroekosistem Ideal.{' '}
      </Text>
      <Img mx="auto" src="/images/pupuk.png" alt="pupuk" />
      <Text
        px={{ base: '4', lg: '52' }}
        fontWeight="extrabold"
        fontFamily="roboto, sans-serif"
        fontSize={{ base: 'lg', lg: 'xl' }}
        my={6}
        color={{ base: '#ffc106', lg: '#31373d' }}
      >
        Eco Farming adalah pupuk atau nutrisi berbahan organik super aktif yang sudah mengandung unsur hara lengkap sesuai kebutuhan tanaman
        juga dilengkapi dengan bakteri positif yang akan menjadi biokatalisator dalam proses memperbaiki sifat fisik, biologi dan kimia
        dalam rangka mengembalikan kesuburan tanah.
      </Text>
      <AspectRatio mx="auto" maxW="560px" ratio={2}>
        <iframe
          width="500"
          height="281"
          src="https://www.youtube.com/embed/IVko7uQfe3Y?list=TLGG1vq0PyuBpbQyNDA1MjAyMQ"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        />
      </AspectRatio>
      <Text fontFamily="roboto, sans-serif" my={6} px={{ base: '4', lg: '52' }} color={{ base: '#ffc106', lg: '#31373d' }} fontSize="lg">
        Eco Farming dapat menekan kebutuhan pupuk lainnya sampai 25%, bahkan 0% sehingga bisa menjadi alternatif pengembangan produksi
        pertanian sehat ramah lingkungan menjadi lebih praktis, efektif, efisien dan ekonomis (menghemat biaya pemupukan).{' '}
      </Text>
      <a href="#paket">
        <Button
          boxShadow="xl"
          my={6}
          width={{ base: '90%', lg: '200px' }}
          mx="auto"
          color="#fff"
          fontFamily="Righteous, cursive"
          backgroundColor="#2e7d32"
        >
          PESAN KLIK DI SINI
        </Button>
      </a>
    </Box>
  )
}

export default Video
