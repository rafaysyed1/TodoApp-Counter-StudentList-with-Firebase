import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { db/*,storage*/ } from '../config/firebasedb'
export const fetchTodo = createAsyncThunk("todos/fetchTodo",async()=>{
    console.log("It's fetching todo Method");
    try {
        
    } catch (error) {
        
    }
})
const todoSlice = createSlice({
    name :"todos",
    initialState: {todos: [], error : null},
    reducers:{
        updatetodo:(state,action)=>{
            return state;
        },
    },
    // extraReducers(builder){
    //     builder.addCase(fetchTodo)
    // }
})
export default todoSlice.reducer;