import { Box, Img, UnorderedList, ListItem, Link } from '@chakra-ui/react'
import * as React from 'react'

const SlideTestimoni: React.FC = () => {
  const slides = ['slide-1', 'slide-2', 'slide-3', 'slide-4', 'slide-5', 'slide-6', 'slide-7', 'slide-8', 'slide-9', 'slide-10']
  return (
    <Box bg="#fff" d="flex" justifyContent="center">
      <UnorderedList className="sListItemdes" overflow="hidden" width="50%" height="50rem">
        {slides.map(item => (
          <ListItem id={item} width="100%" height="100vmin">
            <Img width="100%" height="100%" objectFit="cover" objectPosition="top" src={`/images/${item}.webp`} alt="" />
          </ListItem>
        ))}
      </UnorderedList>

      <UnorderedList
        height="100%"
        m="0"
        width="15%"
        overflow="hidden"
        className="thumbnails"
        d="flex"
        flexDirection="column"
        lineHeight="0"
      >
        <ListItem flex="auto">
          {slides.map(item => (
            <Link href={`#${item}`}>
              <Img w="100%" height="100%" objectFit="cover" objectPosition="top" src={`/images/${item}.webp`} />
            </Link>
          ))}
        </ListItem>
      </UnorderedList>
    </Box>
  )
}

export default SlideTestimoni
