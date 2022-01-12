import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice(
  {

  name: 'mytheme',
  initialState: {
    
        colors: {
          // Add new color
          primary: {
            50: '#E3F2F9',
            100: '#C5E4F3',
            200: '#A2D4EC',
            300: '#7AC1E4',
            400: '#47A9DA',
            500: '#0088CC',
            600: '#007AB8',
            700: '#006BA1',
            800: '#005885',
            900: '#003F5E',
          },
          // Redefinig only one shade, rest of the color will remain same.
          amber: {
            400: '#d97706',
          },
        },
        config: {
          // Changing initialColorMode to 'dark'
          initialColorMode: 'dark',
        },
      


  },
  reducers: {
    increment: (state) => {
  
      
    },
    decrement: (state) => {
      
    },
    incrementByAmount: (state, action) => {
     
    },
  },
}

)

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer