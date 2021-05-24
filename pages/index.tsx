import * as React from 'react'
import { NextPage } from 'next'
import { Box } from '@chakra-ui/react'
import SectionFirst from '~/components/SectionFirst'
import Profil from '~/components/Profil'
import Video from '~/components/Video'

const IndexPage: NextPage = () => (
  <Box>
    <SectionFirst />
    <Profil />
    <Video />
  </Box>
)

export default IndexPage
