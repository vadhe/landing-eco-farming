import * as React from 'react'
import { NextPage } from 'next'
import { Box } from '@chakra-ui/react'
import SectionFirst from '~/components/SectionFirst'
import Profil from '~/components/Profil'
import Video from '~/components/Video'
import Legalitas from '~/components/Legalitas'
import Manfaat from '~/components/Manfaat'
import Cara from '~/components/Cara'
import TestimoniFirst from '~/components/TestimoniFirst'
import Product from '~/components/products/Product'
import CtaWa from '~/components/CtaWa'
import IconWaSide from '~/components/IconWaSide'

const IndexPage: NextPage = () => (
  <Box>
    <SectionFirst />
    <Profil />
    <Video />
    <Legalitas />
    <Manfaat />
    <Cara />
    <TestimoniFirst />
    <Product />
    <CtaWa />
    <IconWaSide />
  </Box>
)

export default IndexPage
