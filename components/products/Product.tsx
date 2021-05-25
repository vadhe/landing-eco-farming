import { Box, Heading, Text } from '@chakra-ui/react'
import * as React from 'react'
import CardProduct from './CardProduct'

const Product: React.FC = () => {
  const listPaketReg = [
    '34 Box Eco Farming',
    'Gratis Ongkos Kirim',
    'Mendapatkan Bonus 2 Blister Eco Racing.',
    'Diskon Hingga 50% Pembelanjaan Selanjutnya.',
    'Mendapatkan Hak Usaha Nomor ID Resmi Keagenan PT BEST.',
    'Mendapatkan Flipchart dan Buku Eco Farming.',
    'Potensi Mendapatkan Reward Pembelanjaan (Umroh / Motcash, Mocash, Big Mocash,  Rumah Luxury Cash) bebas riba.'
  ]
  const listPaketBasic = [
    '11 Box Eco Farming',
    'Gratis Ongkos Kirim',
    'Mendapatkan Bonus 1 Blister Eco Racing.',
    'Diskon Hingga 50% Pembelanjaan Selanjutnya.',
    'Mendapatkan Hak Usaha Nomor ID Resmi Keagenan PT BEST.',
    'Mendapatkan Flipchart dan Buku Eco Farming.',
    'Potensi Mendapatkan Reward Pembelanjaan (Umroh / Motcash, Mocash, Big Mocash,  Rumah Luxury Cash) bebas riba.'
  ]
  const listPaketEcer = ['1 Box Eco Farming']
  return (
    <Box mt={6} bg="#558B2F" py={16}>
      <Heading color="white" as="h5" px={6} fontSize={{ base: '3xl', lg: '4xl' }} textAlign="center" fontFamily="Bungee Inline, cursive">
        PILIHAN PAKET ORDER ECO FARMING{' '}
      </Heading>
      <CardProduct
        image={["url('/images/bg-paket-reg.png')", '/images/paket-agen-reg.png']}
        color="#b71c1c"
        lists={listPaketReg}
        namaPaket="PAKET AGEN REG"
        harga="Rp. 6.100.000,- (34 Tube EF dan"
        bonus="Bonus 2 Blister ER"
        colorBonus="#512da8"
        cocok="Cocok untuk lahan Sawah/Kebun ukuran Diatas 2 Hektar. "
      />
      <CardProduct
        image={["url('/images/bg-paket-basic.png')", '/images/paket-agen-basic.png']}
        color="#0D47A1;"
        lists={listPaketBasic}
        namaPaket="PAKET AGEN BASIC"
        harga="Rp. 2.100.000,- (11 Box EF + "
        bonus="Bonus 1 Blister ER)"
        colorBonus="#b71c1c"
        cocok="Cocok untuk lahan Sawah/Kebun sekitar 1 Hektar."
      />
      <CardProduct
        image={["url('/images/bg-paket-ecer.png')", '/images/paket-ecer.png']}
        color="#1B5E20"
        lists={listPaketEcer}
        namaPaket="PAKET ECER"
        harga="Rp. 250.000,-
        (Per 1 Box)"
        bonus=""
        colorBonus="#512da8"
        cocok="Cocok untuk lahan kecil seperti pekarangan rumah. "
      />
      <Text
        textAlign="center"
        fontFamily="Roboto"
        color="#fff"
        fontSize={{ base: 'xl', lg: '3xl' }}
        px={{ base: 6, lg: 32 }}
        fontWeight="bold"
      >
        Kami sediakan BONUS tambahan berupa WEBSITE GRATIS yang terhubung ke Whatsapp Pribadi Anda untuk sarana Promosi Online, jika Anda
        Membeli Paket Agen sebelum Waktu Promo berakhir dalam waktu dibawah ini:{' '}
      </Text>
      <Text textAlign="center" fontSize="xl" my={10}>
        Sudah Selesai
      </Text>
    </Box>
  )
}

export default Product
