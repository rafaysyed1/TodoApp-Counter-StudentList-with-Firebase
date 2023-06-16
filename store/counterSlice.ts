import { createSlice } from '@reduxjs/toolkit'


// Define your slice
const counterSlice = createSlice({
    name: 'counterApp',
    initialState: { count: 0 },
    reducers: {
       doIncrement: (state,action)=> {
         console.log("state", state.count);
         console.log("action", action.payload);

         let newState = {
            ...state,
            count: state.count + 1,
            data: action.payload.data
         }
         return newState
       },

       doDecrement: (state,action)=> {
        console.log("state", state.count);
        console.log("action", action.payload);

        let newState = {
           ...state,
           count: state.count - 1,
           data: action.payload.data
        }
        return newState
      }
    },
});
export const {doIncrement, doDecrement} = counterSlice.actions
// Export the reducer
export default counterSlice.reducer;
