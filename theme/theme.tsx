// 1. Import `extendTheme`
import { extendTheme } from '@chakra-ui/react'
// 2. Call `extendTheme` and pass your custom values
const theme = extendTheme({
  styles: {
    global: {
      'html, body': {
        backgroundColor: 'base.green.500'
      }
    }
  },
  colors: {
    base: {
      green: {
        500: '#33691E'
      }
    }
  }
})

export default theme
