import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: {
      number:0,
      place:"kakanad"
  }
  
}

export const counterSlice = createSlice({
  name: 'Counter',
  initialState,
  reducers: {
    increment: (state,action) => {
        
        state.value.number =action.payload.number
        state.value.place=action.payload.place
        console.log(state.payload)
    },
    decrement: (state,action) => {
        state.value.number =action.payload.number
        state.value.place=action.payload.place
    },
 
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement } = counterSlice.actions

export default counterSlice.reducer