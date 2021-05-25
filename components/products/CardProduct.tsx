import { Box, Heading, Img, Text, Button, UnorderedList, ListItem } from '@chakra-ui/react'
import * as React from 'react'

interface CardProduct {
  image: string[]
  color: string
  lists: string[]
  namaPaket: string
  cocok: string
  harga: string
  bonus: string
  colorBonus: string
}
const CardProduct: React.FC<CardProduct> = ({ image, color, lists, namaPaket, cocok, harga, colorBonus, bonus }) => {
  return (
    <Box
      my={12}
      boxShadow="xl"
      color={color}
      fontFamily="Archivo Black, sans-serif"
      bgImage={image[0]}
      bgPosition="cover"
      borderRadius="2xl"
      py={6}
      px={4}
      w={{ lg: '30%' }}
      mx="auto"
    >
      <Text fontSize="lg">TERLARIS</Text>
      <Heading fontFamily="Archivo Black, sans-serif" fontSize="2xl">
        {namaPaket}
      </Heading>
      <Text>
        {harga} <Text color={colorBonus}>{bonus}</Text>)
      </Text>
      <Img src={image[1]} />
      <Text fontFamily="Roboto" color="black">
        {cocok}
      </Text>
      <Box textAlign="center">
        <Button
          boxShadow="xl"
          my={6}
          width={{ base: '90%', lg: '200px' }}
          mx="auto"
          color="#fff"
          fontFamily="Righteous, cursive"
          backgroundColor={color}
        >
          KLIK PESAN SEKARANG
        </Button>
      </Box>
      <UnorderedList fontFamily="Roboto" color="black" fontWeight="bold">
        {lists.map(item => (
          <ListItem>{item}</ListItem>
        ))}
      </UnorderedList>
    </Box>
  )
}

export default CardProduct
