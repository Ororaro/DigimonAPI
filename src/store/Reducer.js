import {createSlice,current} from '@reduxjs/toolkit'

const initialState = {
     lists:[],
}

const listSlice = createSlice({
    name:"ListName",
    initialState,
    reducers:{
        addList:(state,action) =>{
            state.lists = action.payload
        },
      
    }
})
export const {addList,adddetail} = listSlice.actions
export default listSlice.reducer