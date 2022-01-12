import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice(
  {

  name: 'mydata',
  initialState: {
    
       display:[],
      


  },
  reducers: {
    fetchlocal: (state) => {
        
  
      
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