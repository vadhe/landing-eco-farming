import * as React from 'react'
import { NextPage } from 'next'
import { Box } from '@chakra-ui/react'
import SectionFirst from '~/components/SectionFirst'
import Profil from '~/components/Profil'
import Video from '~/components/Video'
import Legalitas from '~/components/Legalitas'

const IndexPage: NextPage = () => (
  <Box>
    <SectionFirst />
    <Profil />
    <Video />
    <Legalitas />
  </Box>
)

export default IndexPage
