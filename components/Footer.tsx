import { Box, Text } from '@chakra-ui/react'
import * as React from 'react'

const Footer: React.FC = () => {
  return (
    <>
      <Box bg="#fff27e" py={16} px={{ base: 6, lg: 32 }} color="#00695C" fontWeight="semibold">
        <Text>
          NOTE : Keuntungan Menjadi Agen Resmi Untuk Pembelian ke 2 dan seterusnya senilai 1,5 juta Mendapatkan 12 Tube/BOX Senilai 3 Juta,
          Bisa Mensponsori, Bonus Pengembangan & Berhak Mendapatkan Reword/Hadiah dari Perusahaan seperti MOTOR,MOBILIO,PAJERO & RUMAH 1
          MILIAR dengan Paket penjualan yang semuanya Cash tanpa DP dan Cicilan Serta Bebas dari Hutang & Riba.
        </Text>
        <Text>* 200 Paket = Umroh/Motor senilai 20 juta </Text>
        <Text>* 600 Paket = Mobil senilai 150 juta </Text>
        <Text>* 3000 Paket = Pajero senilai 500 juta </Text>
        <Text>* 6000 Paket = Rumah 1 Miliar</Text>
        <Text>
          Setiap Paket yang telah terjual akan terus dihitung tanpa batas waktu, dan tanpa hangus. Jadi bisa dipastikan bahwa semua
          Distributor kami lambat laun akan mendapatkan hadiah-Hadiah di atas dari perusahaan & diberikan tanpa di undi.
        </Text>
      </Box>
      <Box bg="#000000" textAlign="center" color="#fff" py={16} mb={{ base: 24, md: 0 }}>
        Di Buat Dengan Next JS Penuh Cinta
      </Box>
    </>
  )
}

export default Footer
